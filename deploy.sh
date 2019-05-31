#!/bin/bash

PROJECT=$(gcloud config list --format 'value(core.project)' 2>/dev/null)
REGION=$(gcloud config list --format 'value(compute.region)' 2>/dev/null)

function usage () {
  echo "Usage:"
  echo "  [sudo] deploy.sh [project region] name"
  echo ""
  echo "Options:"
  echo "  project - Google project name [defaults to \"$PROJECT\"]"
  echo "  region  - Google compute region [defaults to \"$REGION\"]"
  echo "  name    - the name of the build application"
}

if [[ "$1" == "" ]]; then
  usage
  exit
else
  if [[ "$2" == "" ]]; then
    APP=$1
  elif [[ "$3" == "" ]]; then
    echo "Ambiguous options.  Please provide 1 or 3 options."
    echo ""
    usage
    exit
  elif [[ "$5" != "" ]]; then
    echo "Too many options.  Please provide 1 or 3 options."
    echo ""
    usage
    exit
  fi

  if [[ ! -e "Dockerfile" ]]; then 
    if [[ -e "../Dockerfile" ]]; then
      cd ..
    else
      echo "Cannot find Dockerfile. Please run from project root folder."
      exit
    fi
  fi 

  rm -f cloud-build.yaml

  echo "steps:" > cloud-build.yaml
  echo "  - name: gcr.io/cloud-builders/docker" >> cloud-build.yaml
  echo "    args:" >> cloud-build.yaml
  echo "      [" >> cloud-build.yaml
  echo "        'build'," >> cloud-build.yaml
  echo "        '-f'," >> cloud-build.yaml
  echo "        'Dockerfile'," >> cloud-build.yaml
  echo "        '-t'," >> cloud-build.yaml
  echo "        'gcr.io/$PROJECT/$APP'," >> cloud-build.yaml
  echo "        '.'," >> cloud-build.yaml
  echo "      ]" >> cloud-build.yaml
  echo "images:" >> cloud-build.yaml
  echo "  - gcr.io/$PROJECT/$APP" >> cloud-build.yaml

  docker build -t $APP .
  gcloud builds submit --project $PROJECT --config=./cloud-build.yaml
  gcloud beta run deploy $APP --region $REGION --project $PROJECT --image gcr.io/$PROJECT/$APP
fi

