// Function to count vowels in a given string
function countVowels(name) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (const char of name) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Sample array of names
const names = ["Alice", "Bob", "Eve", "Charlie", "Oscar", "Uma"];

// Sort names by the number of vowels in descending order
names.sort((a, b) => {
  return countVowels(b) - countVowels(a);
});

console.log(names);
