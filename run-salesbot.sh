#!/bin/sh
if [ $(docker ps -a  -f name=bot | wc -l) -eq 2 ];then 
echo "RUNNING docker start salesbot"
docker start salesbot
else 
echo "RUNNING docker run --name salesbot jkendall1975/pixa-salesbot:latest"
docker run --name salesbot jkendall1975/pixa-salesbot:latest
fi