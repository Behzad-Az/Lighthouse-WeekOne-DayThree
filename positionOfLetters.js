// get string input.
// return position of each distinct letter in form of an
// array property of the letter object.

//Get arguments as string and remove spaces.
var arg = process.argv[2].split(' ').join('');

//Declare empty object.
var letterObj = {};

//Return number of each letter in argument.
console.log(countLetters(arg.split('')));

//Count number of each letter.
function countLetters(txtArry) {
  txtArry.forEach(function (element, index){
    //If it's the first time observing the ltter, initilize the
    //corresponding object property value from undefined to empty array.
    if (letterObj[element] === undefined) { letterObj[element] = []; }

    //Add one to the corresponding object property value.
    letterObj[element].push(index);
  });
  return letterObj;
}