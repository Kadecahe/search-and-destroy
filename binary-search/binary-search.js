"use strict";

// Complete this algo
const binarySearch = (array, target) => {
	//define root base base on array.length
	//divide array into 2 => array.length /2 = Root and put into a variable called "splited arr"
	//smaller numbers = left side = index 0 of splitted arr
	//larger numbers = right side = index 1 of splitted arr
	//Root = right[0]

	//search:
	//left = [1,3,4,5,10,15]
	//is Root larger or smaller than target or equals to target?
	//if target < root, go left
	//else, go right
	//loop through every num on the selected side to check (looping backward)
	//if arr[i] === target, break
	//then return true, else return false?

	const center = array.length / 2;
	let left = array.slice(0, center);
	let right = array.slice(center);
	let root = right[0];
	if (target === root) {
		return true;
	}
	console.log('TARGET', target)
	if (target > root) {  //go right
		for (let i = 0; i < right.length; i++) {
			if (right[i] === target) {
				return true;
			} 
		}
	} else {  // go left
		for (let i = left.length-1; i >= 0; i--) {
			if (left[i] === target) {		
				return true;
			} 
		}
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
