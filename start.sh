#!/bin/bash

dir=`pwd`
#echo $curDir

libDir=$dir/lib

#echo $libDir

jarStr=

for file in $libDir/*.jar
do
if [ -f "$file" ]; then
  #echo $file
  jarStr=${jarStr}${file}":"
fi
done

echo ExtJars=$jarStr

java -Xbootclasspath/a:$jarStr -jar bin/js-server-page.jar $dir

