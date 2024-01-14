function hasTargetSum(array, target) {
  
  let n = array.length-1;
  // while loop
  while(n>=0){

  //For loop
  for (let i = 0; i < array.length; i++) {
    let sum;
    if(n !== i){
    sum = array[n] + array[i];
    console.log(sum);
  }

    if (sum === target) {
      return true;
    }
  }
  n--;
}

  return false; 
}

console.log(hasTargetSum([1000, 100, 10, 1], 3));


/* 
  Write the Big O time complexity of your function here
  While Loop: O(n)
  For Loop: O(n)
  Sum Calculation: O(1)
  If Statement: O(1)
  total = o2(n^2)

  big o = o(n^2)

  space complexity
  i = o(1)
  n= o(1)
  sum = o(1)

  total = o(1)

*/

/* 
  Add your pseudocode here
  i need the function to have a for loop to the n of the index. Each time it adds the last number to the rest till the end. I iterate again with a while loop to use the rest of the numbers as constant.
*/

/*
  Add written explanation of your solution here
  I need to create a function that returns true, when any two items of an array add up to the target value passed in the function.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
