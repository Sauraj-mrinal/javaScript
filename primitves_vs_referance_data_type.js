//  primitve vs reference data type 
//  let num1 = 6;
//  let num2 = num1;
//  console.log("value is bum1 "+ num1);
//  console.log("value is num2 is "+ num2);
//  num1++;
//  console.log(" after increment num1");
//  console.log("value os num1 is "+ num1);
//  console.log("value os num2 is "+num2);
 
//  referance type 
//  we are taking  Array
//  let array1 = ["item1", " item2"];
//  let array2 = array1;// array1 ka address array2 nam ka referance variable de diya hai
//  console.log("array 1  "+array1);
//  console.log("srrsy 2  "+array2);
//  array1.push("item3");
//  console.log(" after pushing element to array 1");

//  console.log("array 1  "+array1);
//  console.log("srrsy 2  "+array2);

//----------------------*****************************---------------------------//
//                          how to clone array
//----------------------*****************************---------------------------//



// how to concatenate two array
// let array1 =[" item1", " item2"];
// let array2 = ["item1" ,"item2"];
// console.log(array1===array2);// false
// array1.push("item3");
// console.log("array1-->"+array1);
// console.log("array2-->"+ array2);



// in uppre we just see i am cloning array2 of array1
// but it is not a good way to do this.


// let array1 =[" item1", " item2"];
// let array2=array1.slice(0);

// it will copy all the item  which is  present inside of array 1

// we have anothe way to do same work 
//let array2 = [].concat(array1);

// new way to do same thingh is 
// let array2 = [...array1];
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// if we want to make clone as well as add some new element at a same time then 
// let array1 =[" item1", " item2"];
// let array2=array1.slice(0).concat("item2 ", " item3");
// console.log(array1);// output --> [ ' item1', ' item2' ]
// console.log(array2);//output -->   [ ' item1', ' item2', 'item2 ', ' item3' ]
//------------------------------------------------------------------------------
// way 2  
//------------------------------------------------

// let array1 =[" item1", " item2"];
// let array2 =[].concat(array1,["item4" , "item5"]);
// console.log(array1);// output --> [ ' item1', ' item2' ]
// console.log(array2);//output -->  [ ' item1', ' item2', 'item4', 'item5' ]

//-------------------------------------------------------------------------------
//way 3
// let array1 =[" item1", " item2"];
// let array2 = [...array1, "item6" , "item8"];
// console.log(array1);// output --> [ ' item1', ' item2' ]
// console.log(array2);//output -->  [ ' item1', ' item2', 'item6', 'item8' ]

//----------x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x--------------
//we can add more then one array into a single array

let array1 =[" item1", " item2"];
let array2 = ["ramesh" , " Gita " , "Rohan " , "Shyam"];
let NewArray = [...array1, ...array2];
console.log(NewArray);//[ ' item1', ' item2', 'ramesh', ' Gita ', 'Rohan ', 'Shyam' ]

//