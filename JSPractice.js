// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

const divisors = function (num) {
  const result = [];

  for (let i = 2; i < Math.floor(num / 2); i++) {
    num % i === 0 && result.push(i);
    console.log(result);
  }
  return result.length === 0 && num ? `${num} is prime` : result;
};
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

const tribonacci = function (sig, len) {
  const result = [...sig];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  if (len < sig.length) {
    return result.slice(0, len);
  }
  for (i = 3; i < len; i++) {
    const seq = result.slice(i - 3, i).reduce(reducer);
    result.push(seq);
  }
  return result;
};

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const pinCheck = function (pin) {};

const updateInventory = (arr1, arr2) => {
  const refObj = {};
  const output = [];
  [...arr1, ...arr2].forEach((item) => {
    item[1] in refObj
      ? (refObj[item[1]] += item[0])
      : (refObj[item[1]] = item[0]);
  });

  for (const key in refObj) {
    output.push([refObj[key], key]);
  }

  output.sort((a, b) => (a[1] > b[1] ? 1 : -1)), "output sorted???";

  return output;
};

module.exports = { divisors, tribonacci, updateInventory };
