// JavaScript challenge to find the missing number in a given array of natural numbers sequencing by 1
function missingNumber(numbers = []) {
  let sumArray = 0;
  let arrLength = numbers.length;
  const naturalSum = ((arrLength + 1) * (arrLength + 2)) / 2;
  for (let i = 0; i < arrLength; i++) {
    sumArray += numbers[i];
  }
  return naturalSum - sumArray;
}
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // => 9
