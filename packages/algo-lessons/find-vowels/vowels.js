/**
 *  @description
 *  Write a function that returns the number of vowels
 *  used in a string. Vowels are the characters 'a', 'e'
 *  'i', 'o', and 'u'.
 *
 *  Note: uppercase values should be count too!
 * */

// First solution --- Iterative 😎
function vowels(str = ``) {
  let vowelCount = 0;
  const vowels = [`a`, `e`, `i`, `o`, `u`];
  for (const character of str) {
    const lowerChar = character.toLowerCase();
    if (vowels.includes(lowerChar)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

// Using a regex expresion  🆒
function vowelsRegex(str = ``) {
  const matches = str.match(/[aeiou]gi/); // 'g' will try to find all the values,'i' is for case insensitive.
  return matches ? matches.length : 0;
}

/**
 * TODO: Add space and time complexity
 * */
