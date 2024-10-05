// 6 [ Arrays in javaScript ]


// let fruits = ["apple", " mango", " banana"];
// console.log(fruits);//[ 'apple', ' mango', ' banana' ]

// let number  = [1,2,3,4,56,76];
//console.log(typeof number);// object 
// console.log(number );
// //[ 1, 2, 3, 4, 56, 76 ]

// let mixed = [1,2,3,4,"string ",null, undefined,33.07,"Radha"];
// console.log(mixed);
/*1,         2,
  3,         4,
'string ', null,
undefined, 33.07,
'Radha' */
// if we want to update sum values then we can do easyly 
// let fruits = ["apple","banana", " mango","grapes"];
// console.log(fruits);
// fruits[1] = "papaya ";
// console.log(fruits);
// output ::---
//[ 'apple', 'banana', ' mango', 'grapes' ]
//[ 'apple', 'papaya ', ' mango', 'grapes' ]

//in case of js array is a object 
// to know its type we can do like that



// let fruits = ["apple","banana", " mango","grapes"];
// let obj = {}// it is objext leteralas 
// console.log(typeof fruits);//object
// console.log(Array.isArray(fruits));//True 
// console.log(Array.isArray(obj));//false

// if you want to add elemnnt in array 
//1)ref_variable.push(______);// push method is use to push element at last

// let fruits = ["apple","banana", " mango","grapes"];

// fruits.push("car");
// console.log(fruits);//[ 'apple', 'banana', ' mango', 'grapes', 'car' ]
// // to remove the element from arrray
// fruits.pop();
// console.log(fruits);
// //[ 'apple', 'banana', ' mango', 'grapes' ]

// let popedfruit =fruits.pop();
// console.log(popedfruit);//grapes

// // if you want to add element at first then we will use 
// fruits.unshift("BMW");
// fruits.unshift("Hero Honda");
// console.log(fruits);
// //[ 'BMW', 'apple', 'banana', ' mango' ]



// //remove the element from starting 
// let removeele = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ",removeele);
// //removed fruits is  Hero Honda

//------------x-x-x-x-x--x-x-x-x-x-x-x-x-x-x-x-x-x-x-x--x-x-xx-x-x-x-x--xx--xx-x---------------------
// use const for creating array 

// const fruits = ["apple","banana", " mango","grapes"];
// fruits.push("lichi");
// console.log(fruits);
// we we will not use  const then we can update array it is wrong thing 
// so we have to recomended to use const 

//---------------------------------array destructuring ---------------------
//const arrayx=["value1", " value2","value3" , " value4", "value4"];
// we can print this array using two way
// way1----
// let val1 = arrayx[0];
// let val2 = arrayx[1];

// console.log(" value 1 - "+val1);
// console.log(" value 2 - "+val2);
// but in java script we have another way to do same thing 
// let[val1, val2] = arrayx;// here internally it is happening same thing like upper case 
// // val1 and val2 is same as normal variable we can do same thing 
// // also we can update our values 

// console.log(" value 1 - "+val1);
// console.log(" value 2 - "+val2);

// val2="book";
// console.log(" value 2 - "+val2);//

//outout
//  value 1 - value1
//  value 2 - value2
//  value 2 - book

// we can skip index using coma 
// let[val1, , val2] = arrayx;
// using one coma ", "  we can skip our array index value 
// console.log(" value 1 - "+val1);
// console.log(" value 2 - "+val2);
//here val1 can store only 0th index value while val2 will we store 2nd index value 
// one index value will we skiped 
//-------------------------------------------------------------------------------------------------
// if your requrment is ki store some value of array in two variable and rest of the value should be store into a new array
// let newArry = arrayx.slice(2);
// console.log(newArry);//[ 'value3', ' value4', 'value4' ]

// ///same thing we can do in diff Way 
// let [val1, val2, ...newArry] = arrayx;
// // here forst two value will we store into two variable val1, val2
// // rest of the value will we store into newArry variable it is an array 
// console.log("value 1 ->"+val1);// value1
// console.log("value 2 ->"+val2);// value2
// console.log("new array value "+newArry);//value3, value4,value4


//-------------------------------------------------------------------------------------------------------------
 //-------------------------------- Some important Array Methods ----------------------
//                                
//                                    Date --  21/09/2023
//                                    time    --19:14
// 1)Foreach Mehthod 
// 2) Map Method 
// 3)Filter Method
// 4)Reduce Method
// 5)Sort Method
// 6)Find Method
// 7)Every Method
// 8)Some Method 
// 9)Fill Method
//10)splice Method
 //----------------------------------------------------------------------------------------------------------


//  const numbers = [1,2,3,4,5,6,7];
 // i'm creating a function that returns first value multiplay by 2 and  return 
//  function multiplay(val1, index){
//     console.log(`index is` + index);
//     console.log(`${val1[0]} * 2  = ${val1[0] * 2}`);
//  }
//  multiplay(numbers);

//  function myFun(number , index){
//     console.log(`index is ${index} number is ${number} multiplay is ${number *index}`);
//  }
//  for(let i=0; i<numbers.length; i++){
//     myFun(numbers[i], i);
//  }
 //output
//  index is 0 number is 1 multiplay is 0
// index is 1 number is 2 multiplay is 2
// index is 2 number is 3 multiplay is 6
// index is 3 number is 4 multiplay is 12
// index is 4 number is 5 multiplay is 20
// index is 5 number is 6 multiplay is 30
// index is 6 number is 7 multiplay is 42

//-------------------------------------------------------------------------
//                                 1)Foreach Mehthod 
//--------------------------------------------------------------------------
// const numbers = [4,5,1,8,2,6,7];
// way 1
// function myFun(number , index){
//     console.log(`index is ${index} number is ${number} multiplay is ${number *index}`);
//  }

//  numbers.forEach(myFun);
 // here foreach loop passing the value and index one by one by and call the function
 //output
//  /index is 0 number is 4 multiplay is 0
//  index is 1 number is 5 multiplay is 5
//  index is 2 number is 1 multiplay is 2
//  index is 3 number is 8 multiplay is 24
//  index is 4 number is 2 multiplay is 8
//  index is 5 number is 6 multiplay is 30
// //  index is 6 number is 7 multiplay is 42

// way 2
// numbers.forEach(function(number , index){
//     console.log(`index is ${index} number is ${number} multiplay is ${number *index}`);
// });
 // output will be same as previous example


//-------------------------------------------------------------------------
//EX-3 
// we are creating array of objects and we have to print there first name only for each object
// const user = [
//   {firstNmae : "Mrinal", age :25},
//   { firstNmae : "Mohan",age : 25 },
//   { firstNmae : "Vijay",age : 22 },
//   { firstNmae : "raghus",age :35},
//   { firstNmae : "Amrita",age :26},
// ]
// user.forEach(function(user){// user.forEach --> ek ek object ko laa kr dega object se aur function me wah object
//     // as a user ref  variable jayega , it is a callback function or anonumus function
//     console.log(user.firstNmae);// first object aaya hai uske sath dot lga kr uska properties ko access kr sakte hai 
//     // according to our requrement we have to print only forstName 
// })
// // output 
// // Mrinal
// // Mohan
// // Vani
// // raghus
// // Amrita
// explain-> 
//const user = [
  // forEach(function(user){
// ----------->one by one object is comming inside the function 
  //}
  //   user1->  {firstNmae : "Mrinal", age :25},
  //   user2->{ firstNmae : "Mohan",age : 25 },
  //   user3-> { firstNmae : "Vijay",age : 22 },
  //   user4->{ firstNmae : "raghus",age :35},
  //   user5-> { firstNmae : "Amrita",age :26},
  // ]
// // aso we can do same work using for loop 
// for(let ele of  user){
//   console.log(ele.firstNmae);
// }
// output 
// Mrinal
// Mohan
// Vani
// raghus
// Amrita

//-------------------------------------------------------------------------
// 2) Map Method
//--------------------------------------------------------------------------
// Map method is a same as a forEach method 
// it will  take as a input callBack function (same as forEach Method )

// so here we are creating a callback function which tack one integer value and return its square value
// const number =[3,4,6,2,1,0,];
// function square(number){
//     return number * number;// whenever we use map method we have to write return , it is mendatory to write return 
//     // because whenever we paas function in map , map will create own array 

// }

// here we are calling the map method
// we pass the callback function into the map method
//my call callback function name is square here .
//
//const result = number.map(square);
// map function always creates an new array 
// here result is a array of square of numbers array elements
//console.log(result);
//output square
//[ 9, 16, 36, 4, 1, 0 ]

// Example same using Awrrow function

// const number2  = [3,4,6,2,1,0,];
// const SqureNumber  = number2.map((number, index)=>{
//     return `index -> ${index} , ${number * number}`;
// });
// console.log(SqureNumber);
// // output square
// // ['index -> 0 , 9',
// //   'index -> 1 , 16',
// //   'index -> 2 , 36',
// //   'index -> 3 , 4',
// //   'index -> 4 , 1',
// //   'index -> 5 , 0' ]


//------------------------------------------------------------
//                           // 3)Filter Method
//------------------------------------------------------------
// this function use to filter the record like 
// for example we need to find only evevn numbers from the the array 
//const number=[1,2,3,4,5];
    // number.filter(this method take as a input any callback function)
    // to return the  even number we need a function that calculates the number is even or odd number

    // function isEven(number){
    //     if(number % 2 === 0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // const result = number.filter(isEven);
    // console.log(result);
    // output
    // [2, 4, 6]  // it will return the answerin array format



//----------------------------------------------------------------
//                            reduce function--> this function take the input of any callback function and retune
//----------------------------------------------------------------
//EXAMPLE----
// syntex of reduce function
// reduce(callbackFn)
//reduce(callbackFn, initialValue)
 //  write a function to sum of all the element of the array and explain each line of the function
 // 
//    const numbers1 = [1, 2, 3, 4, 5]; //
//    const val = numbers1.reduce(isEven);
// //    console.log(val);//true

//    const res = numbers1.reduce((accumulator1,currentvalue)=>{
//        return accumulator1 + currentvalue;
//    });
//    console.log(res);
//    // output -> 15
 // accumulator (accumulator=return value ),       currentvalue ,     return value 
 //      1                                               2                3
 //      3                                               3                6
 //      6                                               4                10
 //     10                                               5                15
 // sum is 15 that is the return value of the function 
//----------------------------------------------------------------  
//


// // it is A array of product 
// const userCart = [
//     {productId:1 , productName:"Moble", price:12000},
//     {productId:2, productName:"iPhone", price:10000},
//     {productId:3, productName:"Samsung", price:15000},
//     {productId:4, productName:"Sony", price:10000},
//     {productId:5, productName:"Apple", price:10000},
// ]
// // if my requrement is like we have to add all the prices of the product then what we will do

// // method 1
// //-----------> using for loop we go and add the price 
// var sum =0 ;
// for(var i=0; i<userCart.length;i++){
//     sum = sum + userCart[i].price;
// }
// console.log(sum);
// // output - > 57000

// // method 2
// // using reduce function
// const sum2 = userCart.reduce((totalPrice,currentvalue)=>{
//     return totalPrice + currentvalue.price;
// },0);
// // zero is the initial value here 
// // here the initial value of totalPrice is zero


// console.log(sum2);
// // output - > 57000

// --------------------------------------------------------------------------------------------------------------------
//                                                          sort method
// =====================================================================================================================
//    const number  = [5,9,1200,410,3000];
//    // now we are applying the sort function

//    number.sort();
//    //Sorts an array in place. This method mutates the array and returns a reference to the same array.

// @param compareFn
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

// [11,2,22,1].sort((a, b) => a - b)

// --------------------------------------------------------------------------------------------------------------------
// const number  = [5,9,1200,410,3000];
// //now we are applying the sort function

// // way 1  using ArrowFunction
//  number.sort((a,b) =>{
//     return a-b;
//  });
//  console.log(number);

// // way 2 using Normal function 
//  number.sort(function SortElement(a,b){
//     return a-b;
//   });

// console.log(number);

// example 2 ----------------------------------------------------------------
//---------------------------------------------------------------------------

// const number  = [5,9,1200,410,3000];
// number.sort()
// console.log(number);//[ 1200, 3000, 410, 5, 9 ]


// //example 2
// const userCart = [
//         {productId:1 , productName:"Moble", price:12},
//         {productId:2, productName:"iPhone", price:10400},
//         {productId:3, productName:"Samsung", price:1500},
//         {productId:4, productName:"Sony", price:1000},
//         {productId:5, productName:"Apple", price:100},
//     ]
//     // in this example we have to do like  arrange it based on price 
//     //so we will use here sort method 
//     userCart.sort((a,b)=>{
//         return a.price - b.price;// here a and b is an object so if we want to access the element then we need to write like that 

//     })
//     console.log(userCart);
//     // output 
//     // 
 // [
//   { productId: 1, productName: 'Moble', price: 12 },
//   { productId: 5, productName: 'Apple', price: 100 },
//   { productId: 4, productName: 'Sony', price: 1000 },
//   { productId: 3, productName: 'Samsung', price: 1500 },
//   { productId: 2, productName: 'iPhone', price: 10400 }
// ]
// high to low 
// // userCart.sort((a,b)=>{
//     return b.price - a.price ;// here a and b is an object so if we want to access the element then we need to write like that 

// })


// ------------------------------------------------------------------------------------------------
//                                     FIND METHOD
// ------------------------------------------------------------------------------------------------

// const myArray = ["Hello" , "car" ,"dog","lion" ];
// //
// function isLength_equal_3(a ){
//   return a.length===3;
// }
// const ans = myArray.find(isLength_equal_3);
// console.log(ans);
// // output 
// // cat --> it will return first occurrence of length_equal to 3 this is cat and it will not return other number length
// //

// const user = [
//     {userId:1 , userName: "John" },
//     {userId:2 , userName: "vimail"},
//     {userId:3 , userName: "rakesh"},
//     {userId:4 , userName:"vani"},
//     {userId:5 , userName: "Hajanale"},

// ];
// const myUser = user.find((user)=>{
//     return user.userId === 4;
// });
// console.log(myUser);
// output
// { userId: 4, userName: 'vani' }

//-----------------------------------------------------------------------------------------------------
//                                             every method 
//-----------------------------------------------------------------------------------------------------
// const number = [2,4,6,8,4,6];
// // we have to chack it is element in this array even or not


// const ans = number.every( function isEven(num){
   
//     if(num % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);
// // true 

// const userCRT  = [
//     {productId:1, productName:"mobile ",price:1200},
//     {productId:2 , productName:"tv" , price:200000},
//     {productId:3 , productName:"Laptop" , price:30000},
// ]
// const val = userCRT.every((val)=>{
//     return val.price<30000;// here userCRT is a array of bojects and val is a object 

// });
// console.log(val);
// //output
// //--> false


//------------------------------------------------------------------------------------------------
//                                                some method
//------------------------------------------------------------------------------------------------

//  const number =[3,5,8,9];
//  // is any number esa hai jo even hai ya nhi 
//  // ture
//  const val = number.some((num)=>{
//     return num%2 === 0;
//  }) 
// console.log(val);

// ------------------------------------------------------------------------------------------------
//                                                fill method
// ------------------------------------------------------------------------------------------------
// value ,         start ,         end 
// ex---
// // you have to create an array of size 10  and youhave to fill it by negative number -1
// const myArray = new Array(10);// new array of size 10 is created.
// const myArray1 = new Array(10).fill(-1);// new array of size 10 is created and fill by negative number -1 

// console.log(myArray);//[ <10 empty items> ]
// console.log(myArray1);// [-1, -1, -1, -1, -1,-1, -1, -1, -1, -1 ]


// const myArray2=[1,2,3,4,5,6,7,8,9];


// console.log(myArray2);//[  1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// myArray2.fill(0,2,5);
// console.log(myArray2);//// [  1, 2, 0, 0, 0, 6, 7, 8, 9]

//------------------------------------------------------------------------------------------------
//                    splice method 
//------------------------------------------------------------------------------------------------
// Removes elements from an array and, 
// if necessary, inserts new elements in their place, returning the deleted elements.
// use ----------->

//const ar = ["item1" , "item2" , "item3"];
// now in this array i want to delete element of index 2
// ar.splice(1,1);
// console.log(ar);//[ 'item1', 'item3' ]

// insert new element
// syntex
//         // start , delete , insert 
    // ar.splice(1,      0,      "new item insert"); 
    // console.log(ar);
    // // ar.splices(//starting_index // number of ele tht u wan to delete , "new string valur for insert); 
    // const deleteitem = ar.splice(1, 0, "delete") 
    // console.log(ar);   //[ 'item1', 'delete', 'item2', 'item3' ]

// delete and insert together  

// console.log(ar);//[ 'item1', 'item2', 'item3' ]
// ar.splice(1,2,"inserted item1", "inserted item2","inserted item3");
// console.log(ar);//[ 'item1', 'inserted item1', 'inserted item2', 'inserted item3' ]


//------------------------------------------------------------------------------------------------------------------------------------
const arr =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

function find_space(ele){
  if(ele===' '){
    ele.push('empty string')
  }
}

const item1 = arr.map(find_space)

console.log(item1);//[ '




UnderStand_LocalStorageE:\DEV\New folder\javaScript\javaScript\Arrays.js