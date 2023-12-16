// // // import { message } from "./library.js";

// // // //import {} from "./library";
// // // import{user} from "./library.js";
// // // console.log(message);
// // // document.body.innerHTML = message;
// // // user();// we  are calling a method 
// // // // if my method is able to take any type of paramaeter then
// // // // we can send value 


// // // user("Mrinal");// we are calling a method and pass the parameter 
// // // // output --hello everyone Mrinal


// // // import individual from  from "./library" we can write directly 
// // // a single lin.variable1
// // import * as obje from "./library.js";

// // console.log( obje.variable1); 
// // // here we are accessing the variable

// // // now if i want to access method then we can write like this

// // obje.user("Mrinals");
// // // here we are calling a method that is accepting arguments as a String 

// //----------------------------------------------------------------  --------------------------------
// //                           default function 
// //---------------------------------------------------------------- --------------------------------

//  // to use def function we have to write like 
//  import {default as obj} from "./library.js";

//  //because there are no name of default function then we can call the mathod using 
//  // newly created variable --> in this casr that is obj --> obj();
//  obj();


//------------------------------------------------------------------------------------------------

//we can sccess normal as well as default function at a same time 
//------------------------------------------------------------------------------------------------
//              aggregate module --> we can access multiple file from another file 
///------------------------------------------------------------------------------------------------
import{user} from "./bridge.js";// but user --> file is not avalible in bridge .js file
// then we have to write something into bridge.js file 
console.log(user());
// output 
//  hello
