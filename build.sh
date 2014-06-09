#!/bin/bash
#dir is the working directory:
dir=$(dirname $1);
#fullname is the filename for $1
fullname=$(basename "$1");

#stub is filename minus the extension
almoststub=${fullname%.*};
stub=`echo "$almoststub" | tr " " "_"`;
echo $stub
#/home/jmax/.cabal/bin/pandoc -sS

pandoc -sS --template=dp.template --section-divs  \
    -f markdown -t html5 -o ../$stub".html" "$1"
