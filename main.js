const translate = (input) => {
const vowels = ['a','e','u','i','o'];
let resultArray = []; //This will serve as a place to store the vowels from the input string

for (i= 0;  i<input.length;i++ ) {
  for (j =0; j<vowels.length;j++) {
if(input[i]===vowels[j]){
  if( input[i]==='e'){
    resultArray.push('ee')
  }else if( input[i]==='u'){
    resultArray.push('uu')
  }
  else {
    resultArray.push(input[i]);
     }
  
  }

  }

}

console.log(resultArray);
translatedInput = resultArray.join('').toUpperCase();
console.log(translatedInput)
}
let input ="Emanuelle, translating is a good thing to do now!";
translate(input);

translate('Hi, Human');
translate('a whale of a deal!');




