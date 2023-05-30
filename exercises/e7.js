// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  const arr = [];
  var min = array[0].balance;
  var id = 0;
  for (var i in array) {
    if (min > array[i].balance && array[i].balance !== 0) {
      min = array[i].balance;
      id = array[i].id;
    }
  }
  if (min <= 0) {
    return arr;
  }
  return arr.concat(array[id-1]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function