
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const arr = [];
  var max = array[0].balance;
  var id = 0;
  for (var i in array) {
    if (max < array[i].balance && array[i].balance !== 0) {
      max = array[i].balance;
      id = array[i].id;
    }
  }
  if (max === 0) {
    return arr;
  } else {
    let arrFinal = arr.concat(array[id-1]);
    return arrFinal;
  }
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
