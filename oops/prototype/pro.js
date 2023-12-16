// function hello(){
//     console.log("hello from function");
// }
//in js function is function but 
// we can say that function is also an object of javaScript :: function + object 


// to add key value in object we use like
// const obj = {}// create new  empty object
// obj.name  = 'mrinal'// adding key value
// console.log(obj.name);//geting key value
// output -> mrinal
// here we add name property in our object 
//----------------------------------------------------------------
// similarly we add property in function --> it will work like object 
// hello.addNewProperty = "this is new property added in my function";
// console.log(hello.addNewProperty);
// output 
// this is new property added in my function

//---------------->
//----------------> see details note in my OneNote ---> chapter name -> property

// only function provide prototype properties
//  we can add n number of key and value in my function
// apartfrom function no one will provide properties of prototype

// function SayHello(){
//     console.log('inside sayHello');
// }
// // to add prototype properties we write like 
 
//  SayHello();
// //  we can add in two way
// // way 1
//    SayHello.NewPropName = 'mrinal';
//    console.log(SayHello.NewPropName);// mrinal 

// //   way 2 
//  SayHello.prototype.name = 'mrinal';
//  console.log(SayHello.prototype);// mrinal

// SayHello.prototype.abc = 'abc';
// SayHello.prototype.def = 'def';
// console.log(SayHello.prototype);
// // if we want to add function prototype properties
// SayHello.prototype.NewFun = function(){
// return "la la la he he he he um hu hu hu";
// }

//--------------------------------------------------------------------------------------------------------
// 
//--------------------------------------------------------------------------------------------------------- 

// //----------------> see details note in my OneNote ---> chapter name -> property 
// if any key is not present in my object name user then it will take this object 
// from userMethod and return the value 
// 
// but we learn inthis lecture --> function has it own space and it is in the form of empty object 
// so we can use that space and save the extera space .
// so how we will do this 

// in example 2 i am using one extera object to store properties or additional PROPERTIES

// in example 2 i will do same work but in function sapce 

// example 2
// const userMethod = {
//     // inside object we crete two key value pair 
//     about : function(){
//          return `${this.FirstName} ${this.lastName}`
//     },
//     // key: value  
//     is18 : function(){
//          return this.age>=18;
//     }
// }
// function createObj(FirstName , lastName , email, age,address){
//     //- - - -> to add key value pairs we need to create an object 
//     const user = Object.create(userMethod);// syntex 
//     user.FirstName = FirstName;
//     user.LastName = lastName;
//     user.Email = email;
//     user.Age = age;
//     user.Address = address;   
//     return user ;
//     // returnung the object
// }
// const use1 = createObj('MRINAL','SAURAJ','MRINALSAURAJ@GMAIL.COM',25,'MYADDRESS');

//
//
//---------------------------------------------------------------------------------------------
// example 3 
function createObj(FirstName , lastName , email, age,address){
    //- - - -> to add key value pairs we need to create an object 
    const user = Object.create(userMethod);// syntex 
    user.FirstName = FirstName;
    user.LastName = lastName;
    user.Email = email;
    user.Age = age;
    user.Address = address;   
    return user ;
    // returnung the object
}
const use1 = createObj('MRINAL','SAURAJ','MRINALSAURAJ@GMAIL.COM',25,'MYADDRESS');



