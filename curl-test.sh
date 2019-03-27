#!/bin/bash

ENDPOINT="http://localhost:3000"

FILES=`ls -1 dist/images/* | sed 's+dist++'`
FILES=`echo $FILES /`

echo "Fetching from $ENDPOINT"
for k in $FILES
do
  echo "• GET $k"
done

TOTAL=0
PASS=0
FAIL=0
for i in {1..12}
do
  for i in {1..50}
  do
    for k in $FILES
    do
      status=`curl -Is $ENDPOINT$K | head -1`
      ((TOTAL+=1))
      if [[ $status =~ '200 OK' ]]; then
        ((PASS+=1))
      else
        ((FAIL+=1))
      fi
    done
  done
  
  echo "Completed $TOTAL requests: Pass $PASS, Fail $FAIL"
done
