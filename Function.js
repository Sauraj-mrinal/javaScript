 // syntax ------------
 //-----------------------
 
// function  ---> followed by function name the bracket 
// we can create function same  like 

// const { log } = require("console");
// const { devNull } = require("os");

// function singHappyBirthDay(){
//     console.log("happy birthday to you darling mrinal !!!!");
// }

// singHappyBirthDay();// function call 
// singHappyBirthDay();
// singHappyBirthDay();
// function twoPluseFour(){
//     return 2+4;
//  // but this function is not useble again and again 

// }
// const val = twoPluseFour();
// console.log(val);

// function sumTwoVal( num1,num2){
//     return num1 + num2;
// }

// const v = sumTwoVal(4,6);
// console.log(v);
// you have to create a function that will return true if number is even and return false if number is odd 
// function isEven(number ){
//     if( number %2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(45));
// console.log(isEven(16));
// console.log(isEven(75));
//-----------output
// false
// true
// false

// create a function taht take a input string and return its first charactor 

// function firstChar( anyString ){
//     return anyString[0];

// } 
// console.log(firstChar("ram"));
// console.log(firstChar("shyam"));
// output 
     //r
     //s
//---------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------function expression or anonymous function ------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
// we can create same function in diff ways 


// function firstChar( anyString ){
//     return anyString[0];

// } 
// console.log(firstChar("ram"));
// console.log(firstChar("shyam"));
//EX------
   // CREATE A FUNCTION THAT RETURN FIRST CHAR OF ANY STRING 

// here we have create a const variable and this variable is use to store the value that return by function
// this function design or you can say that the syntex will be same 
// first create a varible then equalsign then function keyword which is reserve word then pass argunment 

//  const firstChar  = function(anyString ){
//     return anyString[0];
//  }
// console.log(firstChar("ram"));
// console.log(firstChar("shyam")); 
// // output will we same 


//=----------------------------------------
// EX ------ create a function that take array of number and  , target ( number ) to find and return its index 
//if element not found then we have to return -1
// function Search(array , target){
//     for( var i=0; i<array.length; i++){
//         if(target=== array[i])
//         return i;
//     }
//     return -1;
// }
// const myarray= [2,4,5,3,15,7,8,17];
// const ans = Search(myarray , 8);
// console.log(ans);
// // output --------------------------
// //  6

// function findTarget(array, targe'){

// }
// const findTarget = function(array , target){
//    for( var i=0; i<array.length; i++){
//       if( array[i]==target)
//       return i;
//    }
//     return -1;

// }
// these type of function is known as anonymous function 
// because it does not have any name we just store this function into some variable 

// ----------------if we talking about odd even function but we have to create as a anonymous function 
// case 1 )
//   function FindOddEven( val){
//    if( val % 2 ==0){
//       return "even no";

//    }else{
//       return 'odd no'
//    }
//   }
//   // case 2 anonymous function
//    const evenOdd = function( val){
//       if( val % 2 ==0){
//          return "even no";
   
//       }else{
//          return 'odd no'
//       }
//    }
   // the return value will we store into the evenOdd variable 



//---------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------ARROW FUNCTION --------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
// it is kind of function 

   // const evenOdd = ( val) =>{
   //       if( val % 2 ==0){
   //          return "even no";
      
   //       }else{
   //          return 'odd no'
   //       }
   //    }
   //    console.log(evenOdd(4));
   //    //ex--- create a function that use to add 3 number 
   //    const sum = (val1, val2, val3) => {
   //       return val1+val2+val3; 
   //    }
   //    var x = sum(2,3,4);
   //    var y = sum(4,5,6);
   //    console.log(x);// 9
   //    console.log(y);// 15
   //    // we can write it into diff ways
   //    // if any function have onle one line of code and is returning something 
   //    // then we can write like 

      // const isEven = Number=> Number%2==0;
      // console.log(isEven(4));// true
      // console.log(isEven(5)); // odd
//---------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------ FUNCTION DECLARATION ARE HOISTED --------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------HOISTING -----------------------------------

// hello();
// function hello(){
//    console.log(" say hello....");
// }
//output---         say hello....
//
// so in case of function declaration we can call function before function body
//
// but whenever we create a (anonymous function/ arrow function)   or function Expression 
// in this case you will got an error

// hello();
// let hello = function(){
//    console.log(" hello");
// }
// output -- error--------------
//annot access 'hello' before initialization
//at Object.<anonymous>


//  console.log(h);//undefined
//  var h = 'hello';

//  console.log(v); // error
//                   // Cannot access 'v' before initialization
//                   //  at Object.<anonymous> (E:\DEV\JavaScript Basic\Function.js:190:14)
//                   //  at Module._compile (node:internal/modules/cjs/loader:1233:14)
//  const v = 'hello';

 // we just see that ki one varibale is throwing an error and anothe variable is showing  undefined
 // why ??
 // we will se after some time , right now you have to wait 


 //---------------------------------------------------------------------------------------------------------------
 //------------------------------------------------------ FUNCTION INSIDE FUNCTION --------------------------------
 //----------------------------------------------------------------------------------------------------------------

//  const app  = ()=>{
//     // inside another function 
//     const myFun = ()=>{
//         console.log(" hello from inner function (from myFun ) ");
//     }

//     const addTwoNum = (num1, num2) =>{
//       return num1 + num2 ;
//     }

//     const mulTwoNum = (num1, num2) =>{
//       return num1*num2 ; 

//     }
//     console.log(" inside app function ");
//  }

//  app();
// output -------------
//  inside app function 

// but here rest of inner function is not invoked 
// we have to call these function internally then these function will call 

// lets see -------------
// const app  = ()=>{
//    // inside another function  1 
//    const myFun = ()=>{
//        console.log(" hello from inner function (from myFun ) ");
//    }

//    // inside another function  2
//    const addTwoNum = (num1, num2) =>{
//      return num1 + num2 ;
//    }

//    // inside another function  3
//    const mulTwoNum = (num1, num2) =>{
//      return num1*num2 ; 

//    }
//    console.log(" inside app function ");
//    myFun();// function calling 
//    var v = addTwoNum(4,5); // function calling 
//    console.log(v);
// }

// app();// here we have call internally only two function out of 3 function 
// so the output will be
//----------------------------output ------------
// inside app function 
//  hello from inner function (from myFun )
// 9

//---------------------------------------------------------------------------------------------------------------
 //------------------------------------------------------ lexical Scope  --------------------------------
 //----------------------------------------------------------------------------------------------------------------

//  function myApp(){
//    const myVar = "value 1";
//    //inside globle variable for this function 
//    function myFunc(){
//     //  const myVar = "value 2 ";
//       // this is local variable for outer function  
//       const myFunc2 = function(){}
//       const myFunc3 = ()=>{}
//       console.log(myVar);
//    }
//    myFunc();// value 2  is  the output 
//    // but if we remove the inner variable who have same name then 
//    // console.log will be print globle varibale 
// //output ---------------------
// // value 1

//  }
//  myApp();
//EX -----2
// const myVar = "value 1"; // globle variable 
// function myApp(){
   
//    function myFunc(){
//    //   const myVar = "value 2 "; // same name local variable 
    
//       const myFunc2 = function(){}
//       const myFunc3 = ()=>{}
//       console.log("printing form inner function " , myVar);
//    }
//    myFunc();

//  }
//  myApp(); 
//  // form inner function  value 1
//  // it is taking globle funnction 
 
 //-------------------------------------------------------------------------------------------------------------
 //------------------------------------------------------ BLOCK Scope Vs FUNCTION SCOPE   ----------------------
 //-------------------------------------------------------------------------------------------------------------

// let and const are block scope 
//var is function scope 

// //block 1
//       {

//       }

// // block 2
//       {

//       }

//-------------------------------
 //block 1
      // {
      //     let firstName = "Mrinal";
      //     const val = "sauraj";
      // }
      // console.log(firstName);// firstName is not defined

      // //at Object.<anonymous> (E:\DEV\JavaScript Basic\Function.js:321:19)

      // // it is a error becaue let and const are block scope 
      // // if i declar a variable using let and using const then we acamt access it outside 
      // // we can use only inside it , if i try to use it outside it will throw an error 
      // console.log(val);// same error

// // block 2
//       {
//          let firstName = "Mrinal";
//          const val = "sauraj";
//          console.log(firstName);
//          console.log(val);
//       }
//      // output -----------------
//       //Mrinal
//        //sauraj

       // block 3
      //  {
      //    var firstName  = "Mrinal";
      //  }
      //  console.log(firstName);  // Mrinal
      //  // if we declare any variable inside block using var then we can access easly outside also in whole program

      //  {
      //    console.log(firstName);
      //  }
      //   // output -------------
      //   // Mrinal
      //   // Mrinal
   //    //  //-----------------------------------------------------------
   //     function myApp(){
   //       if(true){
   //          var firstName = 'MRINAL';
   //          console.log(firstName);
   //       }
   //       console.log(firstName); // we can access outside from the block 
   //    } 
   //     myApp();
   //     console.log(firstName);// we can't access this variable outside form morethan two block 
   //     // output -> error 
   //   //ReferenceError: firstName is not defined
   //  //  at Object.<anonymous>
   
      //   function myApp(){
      //    if(true){
      //       var firstName ="mrinal";
      //       console.log(firstName);
      //    }
      //    if(true){
      //       console.log(firstName);
      //    }
      //    console.log(firstName);
      //   }
        
      //   myApp();
      //   // output---------
      //    // mrinal
      //    // mrinal
      //    // mrinal

//-------------------------------------------------------------------------------------------------------------
 //--------------------------------- DEFAULT PARAMETERS   ----------------------
 //-------------------------------------------------------------------------------------------------------------
// CASE 1 --> in cse of normal function 
//  function addTwo(val1, val2){
//    return val1+val2;
//  }
//  let x = addTwo(2,4);
//  console.log(x); // output is 6 
 // but what will happend when i pass only one parameter
 // for example ------------------>
//  function addTwo_(val1, val2){
//    return val1+val2;
//  }
//  let y = addTwo(2);
//  console.log(y);// output is NaN

 // so we can solve this type of problem using if condition 
 // lets see 
//  function addTwo__(val1, val2){
//    if(typeof val2 === "ndefined"){
//       val2 = 0;
//        // agar val2 me kuchh nhi diya it means that ki o undefine hai to b ka value zero kr do 
//       // is se sum me koi refelection nahi hoga 

//    }
//    return val1+val2;
//  } 
//  let z = addTwo__(2);
//  console.log(z);// the value of z is ---> 2--> showing in lecture 
//  //   (actully mu output is still NaN)

//  function add(a,b=0){
//    return a+b;
//  }
//  const v = add(3);
//  console.log(v);// 3

//-------------------------------------------------------------------------------------------------------------
 //--------------------------------- Rest PARAMETERS   ----------------------
 //----------------------------------------------------------------------------------------------------------


//  if we pass argument morethan  parameter then 
// we have to make last variable as a array  
//  function myFun(a,b,c){
//    console.log(`a is ${a}`);
//    console.log(`b is ${b}`);
//    console.log(`c is `,c);
//  }
//  myFun(3,4,5,6,7,8,9);
 // my requerement is i want to thae value assign for a = 3 , b=4 and rest of the value go for c 
 // it means for c ={5,6,7,8,9}--> c should be store in array form 
 // 
// -------------------------------output ----------------
   // a is 3
   // b is 4
   // c is 5,6,7,8,9
 // for answer we ahve to change the function declaration like 

   // function myFun(a,b,c,d){// -----> if we write it like this then variable befor three dot ... c then variable c is able to store like array
   //    console.log(`a is ${a}`);
   //    console.log(`b is ${b}`);
   //    console.log(`c is `,c);
   //    console.log(`d is ${d}`);
   //  }
   //  myFun(3,4,5,6,7,8,9);
    //output 
      // a is 3
      // b is 4
      // c is  5
      // d is 6

//    
// function myFun(a,b,c,...d){// -----> if we write it like this then variable befor three dot ... d then variable d is able to store like array
//    console.log(`a is ${a}`);
//    console.log(`b is ${b}`);
//    console.log(`c is `,c);
//    console.log(`d is ${d}`);
//  }
//  myFun(3,4,5,6,7,8,9);
//output 
// a is 3
// b is 4
// c is  5
// d is 6,7,8,9


//EX--2 
// create a function for add all the number which is given in parameter 
// addAll(1,2,3,4,5,6,7);

// lets understand how number varibale actual work inside 

// function addAll(...numbers) {
//    console.log(numbers);
//    console.log(Array.isArray(numbers));

// }
// output---------------
// [
//    1, 2, 3, 4,5, 6, 7 // -> you can see that here the number varible is working as a  Array
// ]
//  true

// addAll(1,2,3,4,5,6,7);

// function addAll(...numbers) {
//    var total=0;
//    for( var i=0 ; i<numbers.length; i++){
//     total  = total+ numbers[i];
//    }
   
//    console.log(total);
// }

// // output == 28 

//-------------------------------------------------------------------------------------------------------------
 //---------------------------------PARAMETERS Destructuring   ----------------------
 //----------------------------------------------------------------------------------------------------------

 // work with object 
//  const persion={
//     firstName : " Mrinal ",
//     gender: 'male,'
//  };
 //now we will create a function and pass the object
 // using this function we will print details of object 

// printDetails(persion);

//  function printDetails(obj){
//    console.log(obj.firstName);
//    console.log(obj.gender);
//    // if i write something which is not belong to object  like --> LastNme 
//    console.log(obj.LastNmae );// --> then it will throw an output --> undefined 

//  }

 // the output is 
//  Mrinal 
//  male 

// // ----------------------------------------
// // we can do same thing in another way
// function printDetails({firstName , gender}){
//    console.log(firstName);
//    console.log(gender);
// }
// // same output 
// // Mrinal
// male


//-------------------------------------------------------------------------------------------------------------
 //---------------------------------Very brief introduction to CALLBACK FUNCTION  ----------------------
 //----------------------------------------------------------------------------------------------------------

// function myFunc2( name){
//    console.log("inside myFunc 2 ");
//    console.log(`your name is ${name }`);
// }
// function myFunc(callback){
//    console.log(" hello there I am main  function My name is myFunc ");
//    callback();
// }
// myFunc(myFunc2);

// output--------
// inside myFunc 2
// your name is undefined

//
//-------------------------------------------------------------------------------------------------------------
 //--------------------------------FUNCTION returning Function ----------------------
 //----------------------------------------------------------------------------------------------------------


// case 1 in case of normal function

// function myFunc(){
//    return "a";
// }
// const ans  = myFunc();
// console.log(ans);

// // case 2 function returning array --------------------
// function ArrREtunr(){
//    return [1,2,3];
// }
// const ans1 = ArrREtunr();
// console.log(ans1);
// // output-------- [ 1, 2, 3 ]

// // case 3 function returning object --------------------

// function ObjectREtunr(){
//    return {a:1,b:2,c:3};
// }
// const ans2 = ObjectREtunr();
// console.log(ans2);
// // output-------- { a: 1, b: 2, c: 3 }

// // case 4 function returning any integer number --------------------
// function anyIntegerREtunr(){
//    return 1;
// }
// const ans3 = anyIntegerREtunr();
// console.log(ans3);

// // output-------- 1

// // case 5 function returning function --------------------
// function anyFunctionREtunr(){
//     function hello(){
//       console.log("hello from inner function");
      
//    }
//    return  hello;
// }
// const ans4 = anyFunctionREtunr();
// console.log(ans4);
//     ans4();

// // output-------- 
// // [Function: hello]
// // hello from inner function


// another example
// function return a function 
// function anyFunctionREtunr(){
//    return function(){
//       return "hello world ";
//    };
// }
//       const ans5 = anyFunctionREtunr();
//       console.log(ans5);
// // output--------
// // [Function (anonymous)]

   //  



//-------------------------------------------------------------------------------------------------------------
 //-------------------------------- INTRO OF FUNCTION  Khantam ----------------------
 //                                   THANK YOU  MRINAL 
//                                  Total - 633 line of code 
//                                
//                                    Date --   21/09/2023
//                                    time    --19:14
 //----------------------------------------------------------------------------------------------------------
