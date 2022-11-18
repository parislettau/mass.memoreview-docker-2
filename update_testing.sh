#!/bin/bash

cd /var/www/kirby/testmass.memoreview.net
git checkout testing
git pull origin testing
git checkout testing
git add content/*
git commit -a -m "commit from webserver"
git push origin testing