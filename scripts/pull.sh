#!/usr/bin/env sh

PROJECT=${PWD##*/}  # get project directory name
HOST=root@149.28.168.105
WEBROOT=/var/www/$PROJECT

rsync -r -p -t -u -z --checksum --exclude=".*" -P -h -i --delete $HOST:$WEBROOT/content ./
