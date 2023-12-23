// // DOM
// // document object module 
// //---------------------
// // 28/10/2023
// console.log(window.document);
// // or if u want to see the document object then 
// console.log(document);// it will print all the elements of the document object
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //                     how to select any element 
// //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // i want to select any one element in the document 
// // we whave lot's of method to select the element 
// //
// // 1)
// //------------------------------------------ 
// //         getElementById
// //------------------------------------------
// // i want to select main heading element 
// document.getElementById("main-heaing");
// // to see it we have to write it inside the console.log function
// console.log(document.getElementById("main-heaing"));

// // output 
// //h2#main-heainga 
// // to chaek its type we can write like 
// console.log(typeof document.getElementById("main-heaing"));// object 
// //---------------------------------------------------------------
// // we can also store it into any variable 
// const val = document.getElementById("main-heaing");
// console.log(val);


// we have 2nd method  

//--------------------------------------------------------
// //                  2) quqryselector
// //-------------------------------------------------------------
// const MainHeading = document.querySelector("#main-heaing");
// console.log(MainHeading);// same output 


// // if i want to select any button
// const header = document.querySelector(".header");// to select any class we have to use dot -> . 

//console.log(header);// same output
// const navitem = document.querySelector(".nav-items");// to select
// console.log(navitem);

            //  output-->   // <li><a href="">Home</a></li>
            // in this case i got the first nave item but we have more than one item 
            // so if same  name we are using snd try to access it it wiil give me the first it which is releted to this class name 
            // it will not go to next 
               // it will return just first item 

               //------*************************-------------
               // but if you want to more than one item hvaing same class so we can do it easlly 
               //----------> by using querySelectorAll()
               
//-----------------------------------------------
//                  2) quqrySelectorAll
//---------//----------------------------------------------------
// const navitem = document.querySelectorAll(".nav-items");// to select
// console.log(navitem);
// // it will return a node list 
// // it is same as a array but it is not an array

// output ------------
// // NodeIterator[ul.nav-itens]
//----->
// <ul class="nav-items">
//                 <li><a href="">Home</a></li>
//                 <li><a href="">ToDo</a></li>
//                 <li><a href="">SingUp</a></li>
//             </ul>



//---------------------------------------------------------------------------------------------------------------
//                      chage text-- using textContent
// ------------------------------------------------------------------------------------------------
// if we want to change my task name manage my task 
//
//

// const MainHeading = document.getElementById("main-heaing");
// console.log(MainHeading);

// // if i want to access text content then 
// console.log(MainHeading.textContent); // Manage your task
// MainHeading.textContent = "This is something else and it is cnaged";

// // so using textContent we can access text as well as chage content


// example -->
/*{ <h2 id ="main-heaing">Manage your task<span style="display: none;">hello</span></h2> */
// if we use textContent--> it will print all the item including span text 



//---------------------------------------------------------------------------------------------------------------
//                            innerText 
// ------------------------------------------------------------------------------------------------

// change the style --> how we will change the style 

// if i want to select element which is belong to some Div and inside div we have to select h2 then 
            /*{ <div class="headline">
            <h2 id ="main-heaing">Manage your task<span style="display: none;">hello</span></h2>
            <button class="btn btn-headline">Learn More</button>

            </div> }*/

// how we will write it 
// const MainHeading  = document.querySelector("div.headLine h2");
// console.log(MainHeading);
// // MainHeading.style.color = "black";
// backgroundColor = "black";
// MainHeading.style.backgroundColor = "black";

//--------------------------------------------------------------------------------------------------------------- 
//                                   get and set attributes
//---------------------------------------------------------------------------------------------------------------
// const linkq = document.querySelector("a");
// console.log(linkq);
// const link = log(...data:any[]) :void)

//------------------------------>
// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// // 
// link.setAttribute("href","https://github.com/");

//-------------------
//------------------- 
// get multiple  element using getAttribute by class name 
// get multiple elements items using querySelectorAll

// // you have to select all class having nave-items
// const navItem = document.getElementsByClassName("nav-items");
// console.log(navItem);
// console.log(navItem.length);
// console.log(typeof navItem);// object
// //HTMLCollection []
// // length :0;
// // [[Prototype]]: HTMLCollection

// //----------------------------------------------------
// // we cant use foreach method to iterate HTMLCollection
// //simple for loop
// // for of loop
// // forEach

//  for(let i=0; i<navItem.length; i++){
//     const navItemr = navItem[i];
//     navItemr.style.backgroundColor = "red";
//  }


// -----------------------------------------------------------------------------
//                          innerHTML
//-----------------------------------------------------------------------------
const headline  = document.querySelector(".headline");
console.log(headline.innerHTML);

headline.innerHTML = "<h1> inner html chaged </h1>";

// i want to add something new into headLine innerHtml
headline.innerHTML+="<button class  = \"btn\">Learn More</button>";
console.log(headline.innerHTML);


     


