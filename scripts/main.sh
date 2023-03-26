#!/bin/bash

set -x

# golang-weekly 脚步 
curl -s -L -O https://github.com/polaris1119/golangweekly/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/golang-weekly.js > scripts/golang-weekly.json
cp -n ./golangweekly-master/docs/issue*.md ./docs/weekly/golang-weekly/
cp -R ./golangweekly-master/docs/imgs/ ./docs/weekly/golang-weekly/imgs/
cp -R ./golangweekly-master/docs/res/ ./docs/weekly/golang-weekly/res/

# 阮一峰老师的周刊
curl -s -L -O https://github.com/ruanyf/weekly/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/ruan-weekly.js > scripts/ruan-weekly.json
cp -n ./weekly-master/docs/issue*.md ./docs/weekly/ruan-weekly/