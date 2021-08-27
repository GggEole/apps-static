#!/bin/bash 
# redmine pwd
docker login hub.eole.education
docker build -t hub.eole.education/test/static-apps:v2.0.2 .
docker push hub.eole.education/test/static-apps:v2.0.2
docker tag hub.eole.education/test/static-apps:v2.0.2 hub.eole.education/test/static-apps:latest
