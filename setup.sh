#!/bin/bash
PROJECT_DIR=`pwd`

chmod -R 777 ./
sudo apt-get install python3 jq curl
cd res/MobSF-master
./setup.sh
