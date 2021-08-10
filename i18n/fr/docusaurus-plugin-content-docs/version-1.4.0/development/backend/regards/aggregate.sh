#!/bin/bash
result="`pwd`/aggregate-api.md"
cd _generated-snippets/
dirs=`find . -maxdepth 1 -type d`
cat <<EOF > ${result}
---
layout: classic-docs
title: REGARDS Storage API
---

## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-storage port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](/development/regards/authentication/api/authentication-api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-storage port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-storage/api/v1/<endpoint>
```

EOF

for d in $dirs; do 
    if [ $d != "." ]; then
    controller=${d:2:-2}
    echo "" >> ${result}
    echo "# ${controller}" >> ${result}
    echo "" >> ${result}
    cd $d

    for dd in `find . -maxdepth 1 -type d`; do
       if [ $dd != "." ]; then
	  echo "" >> ${result}
          echo "## ${dd:2}" >> ${result}
          echo "" >> ${result}
	  cd $dd
          for f in `find . -type f -name "*.md"`; do
		  echo "{@import _generated-snippets/${d:2}/${dd:2}/${f:2}}" >> ${result}
          done
	  cd ..
       fi
    done
    cd ..
    fi
done
