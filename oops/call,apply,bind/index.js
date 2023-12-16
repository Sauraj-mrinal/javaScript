// //------------------------------------------------------------------------------------------------
// //                                          call , apply , bind 
// // ------------------------------------------------------------------------------------------------
// function hello(){
//     console.log("hello");
// }

// hello.call();// hello 

// const user1= {
//     firstName: "Mrinal",
//     age: 21,
//     about: function(){
//         console.log(this.firstName , this.age);
//     }
// }

// const user2= {

// firstName: "VANI",
// age: 21,

// }
// // if i want to call about whinch is present in user1 object 
// // but my requrement is not present in user2 object and i want to call about method from user 2 object then
// user1.about.call(user2);// call method ask  about whinch this (object you want to access )

//--------------------------------------------------------------------------------------------------------------------
// example 2  

// const user1= {
//     firstName: "Mrinal",
//     age: 21,
//     about: function(hobby , favMusic){// so indside object we can make any function with accepting argunment 
//         console.log(this.firstName , this.age,hobby ,favMusic);
//     }
// }

// const user2= {

// firstName: "VANI",
// age: 21,

// }
// // if i want to call about whinch is present in user1 object 
// // but my requrement is not present in user2 object and i want to call about method from user 2 object then
// user1.about.call(user2 ," guitar" , "honysing");// call method ask  about whinch this (object you want to access )
// also call method is allow to pass the argument --> here we are passing 3 arguments 
// output 
//VANI 21  guitar honysing
//----------------------------------------------------------------- ----------------------------------------------------------------
// EXAMPLE 3 --- in example 2 we have make function which has key name "about"--> in place key-value we can create 
// a function outside from the object 
//----------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------
//    call method
//----------------------------------------------------------------------------

function about (hobby , favMusic){// so indside object we can make any function with accepting argunment 
    console.log(this.firstName , this.age,hobby ,favMusic);
}
const user1= {
    firstName: "Mrinal",
    age: 25,
    
}

const user2= {

firstName: "VANI",
age: 22,

}
//about.call(user1 ,"guitar" , "honysing");
//   Mrinal 25 guitar honysing


// -------------------------------------------------------------------------------
//                                   Apply  method-> internally it work like call 
//-------------------------------------------------------------------------------- 

about.apply(user1 ,["guitar" , "honysing"]);
//   Mrinal 25 guitar honysing

// -------------------------------------------------------------------------------
//                                   bind  method->  it will return a function 
// in feturer if we want to call any  function then we can call 
//--------------------------------------------------------------------------------
const func = about.bind(user2 , "guitar" , "kheshariLal yadav");
// now bind FUNCTION IS able to return a function 
//that we are storing into a variable name func 
// whenever we need this function we can call that function using variables name func 
func();
// VANI 22 guitar kheshariLal yada

//----------------
// after finish the file go factory function file 
//-------------------------------------------