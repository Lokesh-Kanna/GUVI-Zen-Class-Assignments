// Session 5 assignmants part - 1 

//Anonymous Functions

//Do the below programs in anonymous function & IIFE
// 1. Print odd numbers in an array
let a = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = [];
var fun = (function () {
            for (let i=0; i<a.length; i++) {
                if(a[i] % 2 === 0) {
                    null;
                }
                else {
                    oddNumbers.push(a[i]);
                }
            }
            console.log(oddNumbers);
        }) (a);
// OUTPUT
// [ 1, 3, 5, 7, 9 ]

//----------------------------------------------------------------

// 2. Convert all the strings to title caps in a string array
let string = "hello, my name is lokesh kanna.";
let titleCaps = (function (string) {
    let stringArr = string.split(" ");
    let titleCapsArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        let word = stringArr[i];
        let capWord = word[0].toUpperCase() + word.slice(1);
        titleCapsArr.push(capWord);
    }
    console.log(titleCapsArr.join(" "));
}) (string)
// OUTPUT
// Hello, My Name Is Lokesh Kanna.

//----------------------------------------------------------------

// 3. Sum of all numbers in an array
let a = [1,2,3,4,5];
let output = 0;
let sum = (function () {
    for (let i=0; i<a.length; i++) {
    output += a[i];
    }
}) (a);
console.log(output);
// OUTPUT
// 15

//----------------------------------------------------------------

// 4. Return all the prime numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findPrime = (function (arr) {
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
}) (arr);

// OUTPUT:
// [2, 3, 5, 7]

//------------------------------------------------------------------------------

// 5. Return all the palindromes in an array
var arr = ["devived", "marram", "hello", "rotator", "world", "bob", "Lucie"] ;
var palindromes = [];
let findPalindromes = (function (arr) {
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
}) (arr)
// OUTPUT
// [ "devived", "marram", "rotator", "bob" ]

//------------------------------------------------------------------------------

// 6. Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let returnMedian = (function (...values) {
    var joinedArr = [...arr1, ...arr2];
    var middle = Math.round(joinedArr.length / 2);
    var median = (joinedArr[middle-1] + joinedArr[middle]) / 2;
    console.log(median);

}) (...arr1, ...arr2);
// OUTPUT
// 5.5

//------------------------------------------------------------------------------

// 7. Remove duplicates from an array
let arr = [1, 2, 1, 3, 4, 5, 2, 4];
let removeDuplicates = (function (arr) {
    let newArr = [...new Set(arr)];
    console.log(newArr);
}) (arr)
// OUTPUT
// [ 1, 2, 3, 4, 5 ]

//------------------------------------------------------------------------------

// 8. Rotate an array by k times
let rotateFun = (function (arr) {
    var arr = [1, 2, 3, 4, 5];
    var k = 3;
    for (let i = 0; i < k; i++) {
        var removed = arr.pop();
        arr.unshift(removed);
    }
    console.log(arr);
}) ();
// OUTPUT
// [ 2, 3, 4, 5, 1 ]

//------------------------------------------------------------------------------


