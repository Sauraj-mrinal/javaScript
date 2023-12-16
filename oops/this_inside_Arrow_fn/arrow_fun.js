
//---   ------------------------------------------------------------------------------------------------
//              Copyright (c) 2023 Mrinal sauraj all rights reserved
// ------------------------------------------------------------------------------------------------
//        Arrow function 
// ------------------------------------------------------------------------------------------------
// const user1 = {
    
//       firstName:'mrinal',
//       age:8,
//       about: function(){
//         console.log(`firstName is  ${this.firstName} and age is ${this.age}`);
//     }
// }
// user1.about();
// output 
// firstName is  mrinal and age is 8

// if i  change in line number 11 remeove function decleration to arrow function then 
// we know that in arrow function there is no concept of "this"
//


const user1 = {
    
    firstName:'mrinal',
    age:8,
    about: ()=>{
      console.log(`firstName is  ${this.firstName} and age is ${this.age}`);
      //// arrow function take this from srounding 
      // if i write this in arrow function then what will happen 
      // outout will be undefined 
      // here 'this' belong to windo -> parant windo object 
  }
  
}
user1.about();//
// output
//firstName is  undefined and age is undefined









