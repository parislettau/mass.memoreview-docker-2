#!/bin/bash

cd /var/www/kirby/mass.memoreview.net
git checkout master
git pull origin master
git checkout master
git add content/*
git commit -a -m "commit from webserver"
git push origin master