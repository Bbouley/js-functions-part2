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


var longString = "this is a ridiculously long string"


function longestWord(string){
  var array = longString.split (" ");
  var letterNumbers = '';
  for (i=0; i<array.length; i++){
    if (array[i].length > letterNumbers.length){
      letterNumbers = array[i];
    }
  } return letterNumbers;
}

console.log(longestWord(longString));
