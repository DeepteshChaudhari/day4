// Print odd numbers in an array:
// Anonymous function
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // IIFE
  (function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5]);

//   Convert all the strings to title caps in a string array:
// Anonymous function
const convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  };
  
  // IIFE
  const titleCapsArray = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  })(["hello", "world"]);
  
  console.log(titleCapsArray);

//   Sum of all numbers in an array:
// Anonymous function
const sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };
  
  // IIFE
  const arraySum = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5]);
  
  console.log(arraySum);

//   Return all the prime numbers in an array:
// Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
  };
  
  // IIFE
  const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
  })([1, 2, 3, 4, 5, 6, 7]);
  
  console.log(primeNumbers);

//   Return all the palindromes in an array:
// Anonymous function
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  };
  
  // IIFE
  const palindromes = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  })(["level", "hello", "radar"]);
  
  console.log(palindromes);

//   Return median of two sorted arrays of the same size:
// Anonymous function
const getMedianOfSortedArrays = function(arr1, arr2) {
    const merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
      return a - b;
    });
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  };
  
  // IIFE
  const median = (function(arr1, arr2) {
    const merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
      return a - b;
    });
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(median);

//   Remove duplicates from an array:
// Anonymous function
const removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  };
  
  // IIFE
  const uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArray);

//   Rotate an array by k times:
// Anonymous function
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotated;
  };
  
  // IIFE
  const rotatedArray = (function(arr, k) {
    const rotations = k % arr.length;
    const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotated;
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArray);
