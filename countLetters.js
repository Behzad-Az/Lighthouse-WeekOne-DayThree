// Latest Revision - Replaced for-loop with ForEach statement in
// function countLetters.

//Get arguments as string and remove spaces.
var arg = process.argv[2].split(' ').join('');

//Declare empty object.
var letterObj = {};

//Return number of each letter in argument.
console.log(countLetters(arg.split('')));

//Count number of each letter.
function countLetters(txtArry) {
  txtArry.forEach(function (element){
    //If it's the first time observing the ltter, initilize the
    //corresponding object property value from undefined to 0.
    if (letterObj[element] === undefined) { letterObj[element] = 0; }

    //Add one to the corresponding object property value.
    letterObj[element] += 1;
  });
  return letterObj;
}

//Obsolete for-loop
//Count number of each letter.
// function countLetters(txt) {
//   for (var i = 0; i < txt.length; i++) {

//     //If it's the first time observing the ltter, initilize the
//     //corresponding object property value from undefined to 0.
//     if (letterObj[txt[i]] === undefined) {letterObj[txt[i]] = 0;}

//     //Add one to the corresponding object property value.
//     letterObj[txt[i]] += 1;
//   }
//   //return object.
//   return letterObj;
// }