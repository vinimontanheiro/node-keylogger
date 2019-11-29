#!/bin/bash

yarn && yarn prod
cd build


declare -a arr=("windows-x86-6.11.2" "windows-x64-6.11.2" "darwin-x64-v8.4.0", "linux-x32")

for i in "${arr[@]}"
do
   echo "$i"
done


../node_modules/nexe/lib/nexe.js bundle.js win32-x86-10.13.0
../node_modules/nexe/lib/nexe.js bundle.js linux-x64
../node_modules/nexe/lib/nexe.js bundle.js win32-x86-10.13.0
