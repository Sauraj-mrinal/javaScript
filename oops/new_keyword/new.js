
//New keyword in JavaScript is used to create an instance of an object that has a constructor function. 

function CreateObj(FirstName , age) {
    this.FirstName = FirstName;
    this.age = age;


}
// here we are using a function so we have also there free space or (empty object )
CreateObj.prototype.about = function(){
    console.log(this.FirstName, this.age);
}
// how to use new keyword in JavaScript
const use1 = new CreateObj('vani' , 21);
// here one object is created and address of these object is stored into a variable name user1

//
// new keyword use
// 1) create a new empty object 
//2) return the new object address
// replace the work of 
//------>  const user  = Object.create(createObj.prototype)
// it is working here automatically 

console.log(use1);
//createObj { FirstName: 'vani', age: 21 }
console.log(use1.about());
//output --
// vani 21
//----------------------------------------------------------------------------
// to see the key we will use 
// for(let key in use1){
//     console.log(key);
// }
// output --
// FirstName
//  age
//about
// here it showing all the key including (prototype wala key )
// so if i want to see only function key then 



for(let key in use1){
  
   if( use1.hasOwnProperty(key)){
    console.log(key);
   }
}
// output---
// FirstName
// age
//here hasOwnProperty is a method that use to return boolean true or false  


