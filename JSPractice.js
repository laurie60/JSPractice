// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

const divisors = function (num) {
  const result = [];

  for (let i = 2; i <= Math.floor(num / 2); i++) {
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

// From FreeCodeCamp Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(string) {
  function perms(str) {
    let result = [];

    if (str.length === 0) return "";
    if (str.length === 1) return str;
    for (let i = 0; i < str.length; i++) {
      const currentNum = str[i];
      const remainingStr = str.slice(0, i).concat(str.slice(i + 1));
      const remainingStrPermuted = perms(remainingStr);

      for (let j = 0; j < remainingStrPermuted.length; j++) {
        const permutedArray = currentNum.concat(remainingStrPermuted[j]);

        result.push(permutedArray);
      }
    }
    return result;
  }

  const allPerms = perms(string);

  let numPerms = allPerms.length;

  if (numPerms > 1) {
    allPerms.forEach((perm) => {
      for (let i = 0; i < perm.length - 1; i++) {
        // console.log(perm, i, perm[i] === perm[i + 1]);
        if (perm[i] === perm[i + 1]) {
          numPerms -= 1;
          break;
        }
      }
    });
  }

  return numPerms;
}

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

function pairWise(array, num) {
  let result = 0;
  let skipIndex = [];

  if (!array.length || array.length === 1) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i && !skipIndex.includes(j) && !skipIndex.includes(i)) {
        if (array[i] + array[j] === num) {
          // console.log(array[i], array[j], i, j, "array position and value");
          result += i + j;
          skipIndex.push(j, i);
        }
        // console.log(array[j], "<<<console.log(array[j])");
        // console.log(skipIndex, "<<<skipIndex");
      }
    }
  }
  return result;
}

function bubbleSort(array) {
  const result = [...array];
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  }
  function sort(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
    return array;
  }

  function check(array) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        return false;
      }
    }
    return true;
  }

  let answer = false;

  do {
    answer = check(result);
    sort(result);
  } while (answer === false);

  return result;
}

function solution(A) {
  if (!A.length) {
    return 1;
  }
  const sorted = A.sort(function (a, b) {
    return a - b;
  });
  let result = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (
      sorted[i + 1] !== sorted[i] + 1 &&
      sorted[i] !== sorted[i + 1] &&
      sorted[i] + 1 > 0
    ) {
      result = sorted[i] + 1;
      return result;
    }
  }
  if (sorted[sorted.length - 1] < 1) {
    return 1;
  }
  return sorted[sorted.length - 1] + 1;
}

function mixedupAB(A, B) {
  console.log(A, B, "a and b");
  console.log(A);
  console.log(B);

  let result = "";
  if (!A && !B) {
    return result;
  }
  if (A === 1 && !B) {
    return "a";
  }
  if (B === 1 && !A) {
    return "b";
  }
  // console.log(A, B, "a and b");
  for (i = 0; i < A + B; i++) {
    // console.log(i);
    i % 2 === 0 ? (result += "a") : (result += "b");
  }
  console.log(result, "result");

  return result;

  // write your code in JavaScript (Node.js 8.9.4)
}

function rgb(r, g, b) {
  function hex(num) {
    const letters = ["A", "B", "C", "D", "E", "F"];
    console.log(letters[num], "letters num etc");
    return letters[num];
  }
  function toHex(num) {
    if (num <= 0) {
      return "00";
    }
    if (num >= 255) {
      return "FF";
    }
    let second = Math.floor(num / 16);
    let first = num % 16;
    if (second > 9) {
      second = hex(second - 10);
    }
    if (first > 9) {
      first = hex(first - 10);
    }
    return second.toString() + first.toString();
  }
  return toHex(r) + toHex(g) + toHex(b);
}

// top codewars answer of the above, the Number(d).toString(16) is
// a built in way to get JS ot convert to Hex, the slice-2 takes the last two
// digits, which is how you can add a leading 0 if number isbelow 16 (clever!!)
// function rgb(r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b);
// }

// function toHex(d) {
//   if (d < 0) {
//     return "00";
//   }
//   if (d > 255) {
//     return "FF";
//   }
//   return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
// }

function bouncingBall(h, bounce, window) {
  // your code here
  if (bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  //recursive base case:
  if (h * bounce < window) {
    return 1;
  }
  return 2 + bouncingBall(h * bounce, bounce, window);
}
// top answer on codewars is below, it is nor recursive
//(uses while loop instead). I think mine is clearer!!
// function bouncingBall(h, bounce, window) {
//   if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
//   let seen = 0;

//   while (h > window) {
//     seen += 1;
//     h *= bounce;
//     if (h > window) seen += 1;
//   }

//   return seen;
// }

function sqInRect(lng, wdth) {
  const squares = [];
  if (wdth > lng) {
    [wdth, lng] = [lng, wdth];
  }
  while (lng && wdth > 0) {
    squares.push(wdth);
    lng = lng - wdth;
    if (wdth > lng) {
      [wdth, lng] = [lng, wdth];
    }
  }
  return squares;
}

function RecSqInRect(lng, wdth, initial = true) {
  if (lng === wdth) {
    return initial ? null : lng;
  }

  if (wdth > lng) {
    [wdth, lng] = [lng, wdth];
  }

  lng = lng - wdth;

  return [wdth].concat(RecSqInRect(lng, wdth, false));
}
function validParentheses(parens) {
  // your code here ..
  let odds = false;
  if (!parens) return false;
  let notMatching = 0;
  [...parens].forEach((paren) => {
    if (notMatching === 0 && paren === ")") odds = true;
    if (paren === "(") notMatching += 1;
    if (paren === ")") notMatching -= 1;
    console.log(notMatching, "notmatchign");
  });

  return notMatching === 0 && !odds;
}
//below is the most interesting codewars solution. It is very cool
function reValidParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) {
    console.log(parens);
    parens = parens.replace(re, "");
  }
  return !parens;
}

//Note: n and p will always be given as strictly positive integers.
//Playing with digits from codewars

function digPow(n, p) {
  let exp = p - 1;
  const number2 = String(n)
    .split("")
    .map((num) => {
      exp += 1;
      return num ** exp;
    })
    .reduce((prev, curr) => prev + curr, 0);

  if (number2 % n === 0) {
    return number2 / n;
  }
  return -1;
}
//highest ranking solution on codewars. dont need the seperate map
// function digPow(n, p) {
//   var x = String(n)
//     .split("")
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }

function high(x) {
  words = x.split(" ");
  let wordScore = 0;
  let highestScore = 0;
  let topWord = "";
  words.forEach((word) => {
    wordScore = 0;
    [...word].forEach((letter) => {
      wordScore += letter.charCodeAt(0);
    });
    if (wordScore > highestScore) {
      highestScore = wordScore;
      topWord = word;
    }
  });
  return topWord;
}
// top solution from codewars, very clever!
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
function high(s) {
  let as = s.split(" ").map((s) =>
    [...s].reduce((a, b) => {
      console.log(b);
      return a + b.charCodeAt(0) - 96, 0;
    })
  );
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
// function solution(A, K) {
//   const result = [...A];
//   for (let i = 0; i < K; i++) {
//     const lastResult = [...result];
//     result.forEach((element, index) => {
//       if (index === 0) {
//         result[index] = lastResult[A.length - 1];
//       } else result[index] = lastResult[index - 1];
//     });
//   }
//   return result;
// }

// let A = [1, 2, 3, 4];
// let K = 4;

// console.log(solution(A, K));

// function solution(A) {
//   const lonely = [];
//   A.forEach((number) => {
//     if (!lonely.includes(number)) {
//       lonely.push(number);
//     } else {
//       const index = lonely.indexOf(number);
//       lonely.splice(index, 1);
//     }
//   });
//   const [result] = lonely;

//   return result;
//   // write your code in JavaScript (Node.js 14)
// }
// const A = [1, 2, 6, 1, 2];

// console.log(solution(A));

// function solution(A) {
//   if (A.length === 1) {
//     return A;
//   }

//   A.forEach((number, i) => {
//     A.forEach((num, j)=> {
//         if(A[i]===A[j] && i !==j) {
//             A.splice
//         }

//     })

//   });
//   const [result] = lonely;

//   return result;
//   // write your code in JavaScript (Node.js 14)
// }
// const A = [1, 2, 6, 1, 2];

// console.log(solution(A));
// function solution(A) {
//   A.sort();
//   for (let i = 0; i < A.length; i = i + 2) {
//     if (A[i] !== A[i + 1]) {
//       return A[i];
//     }
//     if (!A[i + 1]) {
//       return A[i];
//     }
//   }
// }

// const A = [1, 7, 2, 6, 1, 2, 7];

// console.log(solution(A));
// console.log(Math.ceil(85 / 30));

// function solution(A) {
//   const sorted = A.sort(function (a, b) {
//     return a - b;
//   });
//   if (!sorted.length || sorted[0] === 2) {
//     return 1;
//   }
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== sorted[i + 1] - 1) {
//       return sorted[i] + 1;
//     }
//   }
// }

// const arry = [];
// for (let i = 1; i < 10000; i++) {
//   arry.push(i);
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 8, 9]), "<<<<<element +1");
function solution(A) {
  let head = A[0];
  let tail = A.slice(1).reduce((a, b) => a + b, 0);
  let result = Math.abs(head - tail);

  // write your code in JavaScript (Node.js 14)
  for (let i = 0; i < A.length; i++) {
    head += A[i + 1];
    tail -= A[i + 1];
    if (Math.abs(head - tail) < result) {
      result = Math.abs(head - tail);
    }
  }

  return result;
}
const array = [3, 1, 2, 4, 3];
console.log(solution(array));

module.exports = {
  divisors,
  tribonacci,
  updateInventory,
  permAlone,
  pairWise,
  bubbleSort,
  solution,
  mixedupAB,
  rgb,
  bouncingBall,
  sqInRect,
  RecSqInRect,
  validParentheses,
  reValidParentheses,
  digPow,
};
