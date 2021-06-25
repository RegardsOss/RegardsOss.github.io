#!/bin/bash
result="`pwd`/aggregate-api.md"
cd generated-snippets/
dirs=`find . -maxdepth 1 -type d`
cat <<EOF > ${result}
---
layout: classic-docs
title: REGARDS Storage API
---

{% include toc.md %}

{% include howto-api.md name="rs-storage" %}
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
		  echo "{% include_relative generated-snippets/${d:2}/${dd:2}/${f:2} %}" >> ${result}
          done
	  cd ..
       fi
    done
    cd ..
    fi
done
