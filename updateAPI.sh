#!/bin/bash -e

if [ "$#" != 2 ]; then
   echo "oops $#"
   echo "updateAPI.sh [server] [version]"
   echo "exemple : ./updateAPI.sh https://regards.cnes.fr 1.15.0"
   echo "C-S : ./updateAPI.sh https://validation-regards.cloud-espace.si.c-s.fr 1.15.0"
   exit 1
fi

server=$1
version=$2


# Param 1 : microservice name
function importMServiceControllers
{   
  microservice=$1
  folder_name=$2
  dest=./docs/development/backend/regards/$folder_name/$microservice.json
  echo "Fetching ${server}/api/v1/$microservice/v3/api-docs"
  curl -s -S -f -X GET -k ${server}/api/v1/$microservice/v3/api-docs --output $dest || printf >&2 "[\033[31mFailed\033[m] $microservice api doc generation failed\n"
  
  sed -i s/\'\@project.version\@\'/$version/g $dest
  sed -i s@$server@https://regardsoss.github.io/@g $dest
  sed -i s@https://regardsoss.github.io/\:80/@https://regardsoss.github.io/@g $dest
  sed -i s@https://regardsoss.github.io/\:443/@https://regardsoss.github.io/@g $dest
  sed -i s@https://regardsoss.github.io//@https://regardsoss.github.io/@g $dest
  sed -i -E "s@\"scopes\"\:\{\".*\"}@\"scopes\"\:\{}@g" $dest
  jq -S . ./docs/development/backend/regards/$folder_name/$microservice.json > ./docs/development/backend/regards/$folder_name/$microservice.json.formated
  mv ./docs/development/backend/regards/$folder_name/$microservice.json.formated  ./docs/development/backend/regards/$folder_name/$microservice.json
}

importMServiceControllers rs-access-instance     access
importMServiceControllers rs-access-project      access
importMServiceControllers rs-admin               admin
importMServiceControllers rs-admin-instance      admin
importMServiceControllers rs-authentication      authentication
importMServiceControllers rs-catalog             catalog
importMServiceControllers rs-dam                 dam
importMServiceControllers rs-dataprovider        dataprovider
importMServiceControllers rs-fem                 fem
importMServiceControllers rs-ingest              ingest
importMServiceControllers rs-lta-manager         lta-manager
importMServiceControllers rs-notifier            notifier
importMServiceControllers rs-order               order
importMServiceControllers rs-processing          processing
importMServiceControllers rs-storage             storage
importMServiceControllers rs-worker-manager      worker-manager
importMServiceControllers rs-delivery            delivery
