// DESCRIPTION:
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

// SOLUTION:
function getASCII(c) {
  return c.charCodeAt(0)
}

console.log(getASCII('A'));