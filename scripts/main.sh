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

# # 阮一峰老师的周刊
curl -s -L -O https://github.com/ruanyf/weekly/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/ruan-weekly.js > scripts/ruan-weekly.json
cp -n ./weekly-master/docs/issue*.md ./docs/weekly/ruan-weekly/

# HelloGitHub开源的月刊
curl -s -L -O https://github.com/521xueweihan/HelloGitHub/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/hellogithub.js > scripts/hello-github.json
cp -n ./HelloGitHub-master/content/HelloGitHub*.md ./docs/weekly/hello-github/
## markdown 中的 ></img> 替换成 /> 
cd ./docs/weekly/hello-github/ 
# add pv to markdown / replace link
files=`ls . | grep HelloGitHub`
for file in ${files[@]}
do 
    sed -i '' 's/><\/img>/\/>/g' ${file}
done