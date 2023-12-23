// intro of event 
                                //-----------------------------
                                // click
                                //----------------------------
  //const btn = document.querySelector(".btn-headline");
//console.log(btn);
// output 
//<button class="btn btn-headline">Learn More</button>
// it will return the object of btn-headline class 
// we can also use the console.dir(btn);
//console.dir(btn);

// output --> there are so many function present inside object 
// in btn object we have one function name 
//-------------------------------------------------------------------------
//                      -->addEventListener
//---------------------------------------------------------------------

// btn.addEventListener("click", function(){
//     console.log("you clicked on button");
    
// })

// so whenever we click on a button it will be  call a function that function will be print 
// message 

//------------------------------------------------------------------------------------------------------------
//                                  this 
//-------------------------------------------------------------------------------
// btn.addEventListener("click", function(){
//     console.log(this);
    
// })    
// 

// btn.addEventListener("click", ()=>{
//     console.log(this);
    
// })
// see the note in detail on OneNotes Dome chapter 


// in demo.html file we have 
// body>
//     <div class ="my-buttons">
//         <button id ="one"> button 1</button>
//         <button id ="two"> button 1</button>
//         <button id ="three"> button 1</button>
//         <button id ="four"> button 1</button>
//         </div>
// </body>
// and i want to add event for all three buttons 


// first we will select 1st button
// const AllButtons =  document.querySelectorAll("button");
// console.log(AllButtons);

//output 
// NodeList(4) [button#one, button#two, button#three, button#four]
// 0: button#one
// 1: button#two
// 2: button#three
// 3: button#four
// length: 4

// we can use oop to appy the event 
// for(let button of AllButtons){
//     button.addEventListener("click",function(e){
//         console.dir(this.textContent);
// })
// }
//jab bhi mai kisi bhi element pe event lis ADD HOGA 
// JS Engine ---> line by line execute karta hai 
// browser -->Js Engine + extra features 
// browser --> js engine + webApi


// jab browser Ko pata chala ki user ne event perform kia 
// jo hum isten kar rhe hai 


// 1.) call back function hai vo js Engine ko degi
//2.)callback function ke sathb jo event huaa hai usi information dena 
// ye information hame object ke form me milegi 

// for(let button of AllButtons){
//     button.addEventListener("click",function(abc){// here abc is an object 
//         console.log(abc);
//        // console.dir(this.textContent);
// })
// }

// // for example we can understand it using function example 
// function hello(abc){
//     console.log(abc);
// }

// hello(20);

// hello({key1 : "value1",
// key2 : "value2",
// key3 : "value3",
// })

// const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);

// allButton.forEach((button)=>{
//      button.addEventListener("click", (e)=>{
//         console.log(e.currentTarget.textContent);
//      })
// })
// console.log("script end !!!!!!");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                   keypress Event
//                                   mouseover Event
//--------------------------------------------------------------------------------------------------------------------------------

// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//   console.log(e);
// })

