'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  //does this contain a loop
  //use a new Map
  //if there is no linkedlist.head.value in the map, make one and have that hold the next one
  //if there is that value already have it return true
  //if its null have it return false

  const linkedMap = new Map();

  let key = linkedlist.head.value,
    value = linkedlist.head.next,
     bool = false;

  linkedMap.set(key, value)

  while(!bool) {
    let nextKey = value.value,
      nextValue = value.next;

    if(linkedMap.has(nextKey)) return !bool;

    linkedMap.set(nextKey, nextValue)

    nextKey = nextKey.value;
    value = nextValue.next;

    if(!value) return bool;
  }

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
