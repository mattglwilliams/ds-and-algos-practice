// returns the digit in num at the given place value
function getDigit(num, i) {
  // 1. Math.floor removes decimals
  // 2. Math.abs(num) / Math.pow(10, i) divides the number by 100
  // 3. % 10 gives us the remainder when dividing by 10
  // So when we pass the num 7323 and i of 2, steps 1. & 2. gives us 73 and step 3 gives us 3
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  // Math.log10 is asking 10 to what power gives us this num
  // So for 423 it gives us 2.6263... and Math.floor removes the decimals, so we end up with 2
  // + 1 = 3.
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  // Tracks the max
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    // Math.max gives the largest number when passed two numbers. So if the one we have just checked
    // is larger than maxDigits, it will change it
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  // sets out max digits (max amount of iterations until array is sorted)
  let maxDigitCount = mostDigits(nums);
  // loop from 0 up to largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // creates empty arrays for each bucket 0-9
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // fills the buckets with the numbers based on the kth digit
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // replace our existing array with values in our buckets, starting with 0 and going up to 9
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
