
// 4 pillars of DOM 

// 1. Selection of Element 
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener 


//---------------------------------------------------------------------------
//                            // 1. Selection of Element 
//-----------------------------------------------------------------------------
//here document == let suppose it is a html part 
// quertSelector ---> select any query it is a any -> tag or class or id 
// var a = document.querySelector("h1");
// console.log(a);

// //---------------------------------------------------------------------------
// //                            //Changing HTML
// //-----------------------------------------------------------------------------
// // first we have to select the element which we have to change 
// var a = document.querySelector("h1");
// //a.innerHTML// using this we can change 
// a.innerHTML = "Changed HTML";
// // OUTPUT 
// // Changed HTML

// //---------------------------------------------------------------------------
// //                            //Changing CSS
// //-----------------------------------------------------------------------------
// var a = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor = "black";

//---------------------------------------------------------------------------
//                            //Event Listener 
//-----------------------------------------------------------------------------

 var a = document.querySelector("h1");// html me ja kr kisi query ko utha lo ---> yaha pr h1 ko utha liya 
// a.innerHTML = "kaise ho baby"
// a.style.color = "yellow";
// a.style.backgroundColor = "black";
//----------------------------------------come to the topic 

a.addEventListener("click" , function(){// a.addEventListener --> a pr ek EventListener laga do 
    // kon sa EventListener lagado ---> click lga do --> click krte hi ek function chala do 
    a.innerHTML = " Badal gya hu mai teri ex ki tarah";
    a.style.color = "yellow";
    a.style.backgroundColor = "black";

})



//------------------------------------------------------------------------------------------------

// function sum(x,y){
//     return x+y;

// }

// console.log("from external file "+sum(6,5));

// // What is DOM
// //the DOM is a programming interface for web document .
// // it represent the web page as a tree like structure of object , where each object corresponds to an element and attribute in the web page 
// // the DOM provide a way for JavaScript to interact with and manipulate the element content a web page 


// const nameRef = document.getElementsByClassName("description")[0];
// console.log(nameRef);

// const val = document.getElementsByTagName("ul")[0];
// console.log(val);

// const descriptionRef = document.querySelector(".description");
// console.log(descriptionRef);

// const val3  = document.querySelector("#name");
// console.log(val3);

// // if u want to change the value using DOM then 
//nameRef.innerHTML = "Mrinal Sauraj";// then the value will be change DOM INTRO  to Mrinal Sauraj

// if you se in index.html page we have write where one paragraph
// the class of paragraph is "description "

//-------------------------------------------------------------------------------------
//           if you want write paragraph dynamically <p class = "description"> then 
//--------------------------------------------------------------------------------------

// const nameRef = document.getElementsByClassName("description")[0];
// nameRef.innerHTML = ` Suraj Parasnis has taken on the truly Herculean task of directing more than 60 actors on stage to recreate a village of fully realized characters with their individual backstories and personal aspirations. One cannot help but get mesmerized by the world of high stakes drama and comedy created on stage.
// Himanshu Pile essays the kind hearted – if slightly incompetent Patil, charged with the well being of the villagers. Over the next hour and a half the audience is treated to multiple smaller stories of the denizens of the village – their hopes and aspirations. Each sequence of events has a cascading effect and what starts out as the depiction of mundane village life devolves into absolute chaos. While the core of the show is comedic, it does tackle some very poignant issues without being preachy. 
// The power of fake news and biases getting the best of their owner’s judgment are the overarching themes`;


// //-------------------------------------------------------------------------------------
// //           if you want to create new method the we have one method  createElement()
// //--------------------------------------------------------------------------------------


// //-------------------------------------------------------------------------------------
// //createElement ( ) is a methid in the DOM API that allow you to create a new HTML element 
// // you can then manipulate the element and add it to the document using DOM Method 
// //----------------------------------------------------------------------------------------
// const nameNode  = document.createElement('h2');// here we create h2 tags 
// nameNode.id  = 'name';
// const bodyRef = document.querySelector('body');
// // add child 
// //bodyRef.prepend(nameNode);
// bodyRef.append(nameNode);

// nameRef.style.color = 'red';
