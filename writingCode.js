//Sum Zero
/* Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise. */

const addToZero = (arr) => {
    const numList = {};

    for(let i = 0; i < arr.length; i++) {
        if (numList[-arr[i]]){
            return true;
        }
        numList[arr[i]] = true;
    }
    return false;
}
const myArray = [1, 2, 3, -2];
// console.log(addToZero(myArray)); 

//Unique Characters
/* Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
 */
const hasUniqueChars = (str) => {
    let charString = str.split('').sort();

    for(let i = 0; i < charString.length; i++) {
        if (charString.indexOf(charString[i]) !== i) {
            return false; 
        }
    }
    return true;
};
// console.log(hasUniqueChars('helloworld')); //false
// console.log(hasUniqueChars('Iloveu')); //true

//Panagram Sentence
/* Write a function to check a sentence to see if it is a pangram or not.
 */
const isPanagram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let strArr = str.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPanagram('The quick brown fox jumps over the lazy dog!')) //true
// console.log(isPanagram('Is this a panagram? No!')) //false

//Logest Word
/* Write a function, find_longest_word, that takes a list of words and returns the length of the longest one. */
const findLogestWord = (str) => {
    const words = str.split(' ');
    let longestWord = 0;
    let maxLength = null;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
return longestWord;
}
console.log(findLogestWord('This is a function that returns the longest word which will most likely be Hippopotomonstrosesquippedaliophobia')); //returns longest word which is the fear of long words 
