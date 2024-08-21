/* const amount=9
if (amount<10){
  console.log('small number');
}else{
  console.log('large number');
}
console.log(`hey it's my first node app!!!`); */

// commonJS, every file is module (by default)
// Modules-encapsulated code (only share minimum)
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
// console.log(data)

/* when we import a module we simultaneously invoke it */
require('./7-mind-grenade')
// console.log(names)
// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)