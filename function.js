function reverseString(str) {
  return str.split("").reverse().join();
}

function replace(str, charToReplace, strReplacement) {
  const result = str.replaceAll(charToReplace, strReplacement);
  console.log(result);
  return result;
}
replace("hello", "l", "p");

function strLengthEven(str) {
  const result = str.length % 2 === 0;
  console.log(result);
  return result;
}
strLengthEven("Hello");

function findRabbit(arr) {
  return arr.map((word) => word.toLowerCase()).indexOf("rabbit");
}
