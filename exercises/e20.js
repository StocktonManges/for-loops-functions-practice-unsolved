
// EXERCISE 20
// Return an array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arrFinal = [];
  let arrIncluded = [];
  let arrNotIncluded = [];
  for (let i of array) {
    let included = false;
    for (let x of i) {
      if (x === 'a') {
        included = true;
      }
    }
    if (included) {
      arrIncluded.push(i);
    } else {
      arrNotIncluded.push(i);
    }
  }
  arrFinal.push(arrIncluded, arrNotIncluded);
  return arrFinal;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
