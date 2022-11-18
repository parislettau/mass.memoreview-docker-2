#!/usr/bin/env sh
# Ask the user for a descripion of push
echo Hello, please enter short description of the push:
read varname

# get all the variables
DESCRIPTION=$varname          # get the description from user input
PROJECT=${PWD##*/}            # get project directory name
DIRECTORY=~/sites/$PROJECT    # get the local direcotry of the project

# add to git
cd $DIRECTORY
git pull
git add .
git commit -m "$DESCRIPTION"
git push

# pull to server
USER=root                     # connect with root user
HOST=149.28.168.105           # 
WEBROOT=/var/www/$PROJECT     # get the location of the project on the server

ssh -A $USER@$HOST /bin/bash <<EOF
  cd $WEBROOT
  git pull
  sudo chown -R www-data:www-data .
EOF


