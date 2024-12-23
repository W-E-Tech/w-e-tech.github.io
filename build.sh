#!/bin/bash

CWD=$(dirname $(realpath $0))

cp -rf $CWD/src/images $CWD/docs/
cp -f $CWD/src/*.* $CWD/docs/
sed -f $CWD/en.sed $CWD/src/index.html > $CWD/docs/index.html

for LANG in $(ls *.sed | xargs -n 1 basename -s .sed); do
    find $CWD/src/{{lang}} -type f -execdir bash -c "sed -f $CWD/$LANG.sed {} > $CWD/docs/$LANG/{}" \;
done