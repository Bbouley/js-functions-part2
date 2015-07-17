var names = [{
  name: 'michael', age: 24},
  {name: 'bradley', age: 30},
  {name: 'james', age: 25
}] ;

function oldestPerson (array) {
  var age=0;
  for (i=0; i < array.length; i++) {
    if (array[i].age > age) {
      age = array[i].age;
    }
  } return age;
}


var longString = "this,?;== is, a-= ridi', long string"


function longestWord(string){
  var stringNoPunctuation = string.replace(/[^\w\s]|_/g, "");
  var array = stringNoPunctuation.split (" ");
  var letterNumbers = '';
  for (i=0; i<array.length; i++){
    if (array[i].length > letterNumbers.length){
      letterNumbers = array[i];
    }
  } return letterNumbers;
}

console.log(longestWord(longString));

function factorial(num){
  var tempNum = 1
  for (i=1; i<=num; i++){
    tempNum *= i;
  } return tempNum;
}

console.log(factorial(5))

function palindrome(string){
  var tempString = string.split('');
  var tempString2 = tempString.reverse();
  var tempString3 = tempString2.join('');
  if(tempString3 === string){
    return tempString3 + ' ' + true;
  } else {
    return tempString3 + ' ' + false;
  }
}

console.log(palindrome('this is a string'));
