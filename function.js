function reverseString(str) {
  return str.split("").reverse().join();
}

function replace(str, charToReplace, strReplacement) {
  const result = str.replaceAll(charToReplace, strReplacement);
  // console.log(result);
  return result;
}
replace("hello", "l", "p");

function strLengthEven(str) {
  const result = str.length % 2 === 0;
  // console.log(result);
  return result;
}
strLengthEven("Hello");

function findRabbit(arr) {
  return arr.map((word) => word.toLowerCase()).indexOf("rabbit");
}

function subtractTen(num) {
  return num - 10;
}

//Changing century from year
function century(year) {
  return Math.ceil(year / 100);
}
// console.log(century(1996));

//Checking the end from the string
function solution(str, ending) {
  return str.endsWith(ending);
}
// console.log(solution("hello everybody", "ody"));

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
