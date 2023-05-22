// Print odd numbers in an array:
const printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5]);

//   Convert all the strings to title caps in a string array:
const convertToTitleCaps = arr => {
    return arr.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  };
  
  const titleCapsArray = convertToTitleCaps(["hello", "world"]);
  console.log(titleCapsArray);

//   Sum of all numbers in an array:
const sumArray = arr => {
    return arr.reduce((acc, num) => {
      return acc + num;
    }, 0);
  };
  
  const arraySum = sumArray([1, 2, 3, 4, 5]);
  console.log(arraySum);

//   Return all the prime numbers in an array:
const getPrimeNumbers = arr => {
    return arr.filter(num => {
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
  
  const primeNumbers = getPrimeNumbers([1, 2, 3, 4, 5, 6, 7]);
  console.log(primeNumbers);

//   Return all the palindromes in an array:
const getPalindromes = arr => {
    return arr.filter(str => {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  };
  
  const palindromes = getPalindromes(["level", "hello", "radar"]);
  console.log(palindromes);
  