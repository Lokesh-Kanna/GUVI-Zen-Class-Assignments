// Session 5 assignmants part - 2 

// Arrow Functions

// Do the below programs in arrow functions
// 1. Print odd numbers in an array
let a = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = [];
var fun = (a) => {
    for (let i=0; i<a.length; i++) {
        if(a[i] % 2 === 0) {
            null;
        }
        else {
            oddNumbers.push(a[i]);
        }
    }
    console.log(oddNumbers);
};
fun(a);
// OUTPUT
// [ 1, 3, 5, 7, 9 ]

//------------------------------------------------------------------------------

// 2. Convert all the strings to title caps in a string array
let string = "hello, my name is lokesh kanna.";
let titleCaps = (string) => {
    let stringArr = string.split(" ");
    let titleCapsArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        let word = stringArr[i];
        let capWord = word[0].toUpperCase() + word.slice(1);
        titleCapsArr.push(capWord);
    }
    console.log(titleCapsArr.join(" "));
};
titleCaps(string);
// OUTPUT
// Hello, My Name Is Lokesh Kanna.

//------------------------------------------------------------------------------

// 3. Sum of all numbers in an array
let a = [1,2,3,4,5];
let sum = (a) => {
    let output = 0;
    for (let i=0; i<a.length; i++) {
        output += a[i];
        }
    return output;
};
console.log(sum(a));
// OUTPUT
// 15

//------------------------------------------------------------------------------

// 4. Return all the prime numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findPrimeNumbers = (arr) => {
    var primeNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        var isPrime;
        var currentNumber = arr[i];
        if(currentNumber < 2) {
            isPrime = false;
        }
        else if(currentNumber == 2) {
            isPrime = true;
        }
        else {
            for(var j = 2; j < currentNumber; j++) {
                if(currentNumber % j == 0) {
                    isPrime = false;
                    break;
                }
                else {
                    isPrime = true;
                }
            }
        }
        if(isPrime == true) {
            primeNumbers.push(arr[i]);
        }
        else {
            null;
        }
    }
    console.log(primeNumbers);
};
findPrimeNumbers(arr);
// OUTPUT:
// [2, 3, 5, 7]

//------------------------------------------------------------------------------

// 5. Return all the palindromes in an array
var arr = ["devived", "marram", "hello", "rotator", "world", "bob", "Lucie"] ;
let findPalindromes = (arr) => {
    var palindromes = [];
    for(let i = 0; i < arr.length; i++) {
        var res = true;
        var word = arr[i].split("");
        var reverseWord = arr[i].split("").reverse();
        for(var j=0; j<word.length; j++) {
            if(word[j] != reverseWord[j]) {
                res = false;
                break;
            }
            else {
                null;
            }
        }
        if(res == true) {
            palindromes.push(arr[i]);
        }
        else {
            null;
        }
}
    console.log(palindromes);
};
findPalindromes(arr);