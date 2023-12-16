//console.log(this);
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// -->it is showing object of windo and it is a universial object of javascript

// //examples 2 
// function myFun(){
//     console.log(" hello world ");

// }
// myFun();
// // outputs
// // hello world
// window.myFun();
// hello world

// so if we calling a object using windo then it will show the same output 
// why ?
// because windo is my universial object of javascript
// we can call any function and any variables using this window Object

// if we wnat to use our owin object then we have to use strict mode 
// the strict mode does not allow to use windo object 

// ----------------------------------------------------------------
//                        how to will use strict mode 
// ----------------------------------------------------------------

"use strict"; //--> syntex to  use strict mode
function myFun(){
  console.log(this);
}
myFun()// undefined--> because there is no object present in the program and i am using strict mode



