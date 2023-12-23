//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                            Event bubbling / Event propogation
//                            Event capturing                          
//                            Event delegation
//--------------------------------------------------------------------------------------------------------------------------------
             // event bubling 
             // when i click any one event and if the event is also apply on there parent element then it will call automatically
             const grandparent = document.querySelector(".grandparent");
             const parent = document.querySelector(".parent");
             const child = document.querySelector(".child");  
             
            //  child.addEventListener("ckick" , ()=>{
            //   console.log("you clicked on child ");
            //  })

            //  parent.addEventListener("ckick" , ()=>{
            //   console.log("you clicked on child ");
            //  })
            // grandparent.addEventListener("ckick" , ()=>{
            //   console.log("you clicked on child ");
            //  })
            //  document.body.addEventListener("ckick" , ()=>{
            //   console.log("you clicked on child ");
            //  })

console.log("hello");

//----------------------------------------------------------------
            //  Event capturing  
//------------------------------------------------------------------------------------------------
//                     capturing events
//------------------------------------------------------------------------------------------------

child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },true);
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },true);
grandparent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! grandparent");
  },true);
document.body.addEventListener(
  "click",
  () => {
    console.log("capture !!!! document.body");
  },true);

//-----------------------------------------------------------------------------------




