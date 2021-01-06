#!/bin/bash
docker stop christmas-app

docker rm christmas-app

docker build -t mxr/christmas-app .

docker run -p 5500:5500 -d --name christmas-app mxr/christmas-app

