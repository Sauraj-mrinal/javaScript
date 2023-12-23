//sync and async kya hota hai ?

// sync ka matlab ek ke bad dusara hoga , jb tak ek command complete naa ho , dusara shuru nahi hoga 


// lets we hvae 5 tasks  which take some time 
// task a ----> 5 seconds
// task b ----> 2 seconds
// task c ----> 15 seconds
// task d ----> 1 seconds
// task e ---->  4 seconds
// total time 27 seconds

// but incase of async 
// the maximum time taken -> 15 seconds


//  async function return promise 
 async function getData(){
    return "Mrinal sauraj"
 }

 const data = getData();//here the name variable data is storing the value which is returned by the function getData()
 // actually it is a promise

 console.log(data);

 data.then((res)=>{
  console.log(res);
 })





























// Async matlab saara kaam ek sath shuru aur jo jo kaam pura ho jaye us us ka answer dete jaao 

// ---> async ks mtlb ye hota hai ki mujhe nhi pata ki answear kb aayega us ke respect me koi code ko chala dena 
//---> go to the face book and give me a photo 
//--> example 


// setTimeout()// kuchh der badd chalta hai 
// setTimeout take one callback method 

    //    setTimeout(function() {},2000)// the code which is present inside function 
   // will take time 2 seconds 
//    console.log("hii 1");
//    setTimeout(function() {
//       console.log(" hii2 ");
//    },2000)

  // why i am saying callbacks function which is present inside setTimeout function
  //---> bcz ye baitha huaa hai abhi 2 seconds ke liye and 
  // jb 2 sec ho jayega tb yah phir se challenge
  // so it will again  be called then we call us callbacks function

  // callbacks function jb answear aa jata hai tb chalega 

//   console.log("hey");
//   console.log("hey 1");
//   setTimeout(function(){
//      console.log("hey 3");
//   },0)
//   console.log("hey 4");


// // callbacks function 
//  var ans  = fetch('http://google.com');
// // it will send the request to America google 
//--> wii it go properly ?
// it it sucessfully send thne when it will send respected answer
// console.log(ans);
// so when i try to pprint the answer then it is high chance to 
// print undefined answer bcz still my answer may be not come 

// so avoid this error we use --> .then
// if my answer is not recived then dot then method eill not be work 

// so the syntex of .then 
//-------------------------------
 
//            fetch().then()
//--------------------------------
