#!/bin/bash

ENDPOINT="http://localhost:3000"

FILES=`ls -1 public/images/* | sed 's+public++'`
FILES=`echo $FILES /`

echo "Fetching from $ENDPOINT"
for k in $FILES
do
  echo "• GET $k"
done

TIMES=0
for i in {1..10}
do
  for i in {1..100}
  do
    for k in $FILES
    do
      curl -s -o /tmp/file $ENDPOINT$K
    done
  done
  ((TIMES+=100))
  echo Fetched $TIMES times
done
