// const obj1= {
//     key1:'value1',
//     key2:'value2'
// }

// const obj2= {
//     key3:'value3'
// }
//console.log(obj2.key3);
// value3
//console.log(obj2.key1);
// if i try to access like we got -> undefined
// ------------------------------------------------------------------------------
// if key1 is not available in object 2 then it should be automatically refere tp object 1 and print some value not 
// undefined , it should print some original value
// mtlb ye khud jaye obj2 ke pass and check kre value agar value na mile to vo khud jaaye obj1 ke pass and waha pr key1 
// ka  value nikal kr print kre 
//------------------------------------------------------------------------------------------------------------------------

// const obj1= {
//     key1:'value1',
//     key2:'value2'
// }
// // so we can crreate like this 
// // 

// const obj2 = Object.create(obj1);
// obj2.key3='value3';
// console.log(obj2);//-->
// console.log(obj2.__proto__);// se the detail note in  onenotes -> proto page 

// console.log(obj2.key1);//value1


// const userMethod = {
//     // inside object we crete two key value pair 
//     about : function(){
//          return `${this.FirstName} ${this.lastName}`
//     },
//   // key: value  
//     is18 : function(){
//          return this.age>=18;
//     }
// }
//
//------------------------------------
//       see the following example of prototype

function createObj(FirstName , lastName , email, age,address){
    // to add key value pairs we need to create an object 
    const user = Object.create(createObj.prototype);// syntex 
    
    user.FirstName = FirstName;
    user.LastName = lastName;
    user.Email = email;
    user.Age = age;
    user.Address = address;   
    return user ;// returnung the object

}
createObj.prototype.about = function(){
  // here we adding a property name about in creatObj function  and it hold a function address. 
    return `${this.FirstName} ${this.LastName}`;

}
createObj.prototype.is18 = function(){
   return this.Age>=18;
}
const use1 = createObj('MRINAL','SAURAJ','MRINALSAURAJ@GMAIL.COM',25,'MYADDRESS');

console.log(use1.about());
console.log(use1.is18());


//----------------------------------------------------------------
//
// after finishing you should go for prototype file 
//
//----------------------------------------------------------------
