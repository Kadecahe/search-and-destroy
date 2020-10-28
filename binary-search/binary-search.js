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

	//base case for left
	if(array.length === 1) return array[0] === target;
	//base case for right
	if (target === root)return true;

	//O(log n)
	if (target > root) return binarySearch(right, target)
	  //go left
	else if  (target < root) return binarySearch(left, target);



};


	/* OUR Working Code O(n)

	console.log('TARGET', target)

	if (target > root) {  //go right
		for (let i = 0; i < right.length; i++) {
			if (right[i] === target) return true;
		}
	}

	// go left
	for (let i = left.length-1; i >= 0; i--) {
		if (left[i] === target) return true;
	}
	return false
}
return false
}
	*/

	//if the target is > root, we right
		//recursion:
			// first arr = [11, 12, 15, 17, 18, 19, 20]
			//left = [11, 12, 15]
			//right = [17, 18, 19, 20]
			//root = 17
			//if 17 === 20 return true
			//if 20 > 17 repeat recursion
				// second binary search ( [17, 18, 19, 20] )
					//left  = [17, 18]
					//right = [19, 20]
					//if 20 > 19
						// binarysearch( [19, 20])
						//left [19]
						//right is 20
						//root is 20
						//if 20 === 20 return true

		//go right
// 		if (target > root) return binarySearch(right, target)

// 	  //go left
// 		else if  (target < root) return binarySearch(left, target);



// 	return false


// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
