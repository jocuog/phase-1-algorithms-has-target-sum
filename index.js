
function hasTargetSum(array, target) {
    // iterate through each number in the array
    for (let i = 0; i < array.length; i++) {
      //     for the current number, identify a compliment that adds to the target (compliment = target - num)
      const compliment = target - array[i]
      //     iterate through the rest of the array
      for (let j = i + 1; j < array.length; j++){
      //       check if any number is the compliment
        if (array[j] === compliment) 
        //       if so, return true
        return true
      }
    }
    // if I reach the end of the array, return false
    return false  
}

  // Deliverables: make a function 'hasTargetSum' that that checks if two numbers from an array add up to some target. for example, if an array '[1234]' and the target is '6' I should return true becuase 2 and 4 add to 6 but if the target is 10 return false. fro each number check if theres a number that adds to the target 
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25)
  


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");
}

module.exports = hasTargetSum;
