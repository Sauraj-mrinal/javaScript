
//------------------------------------------------------------------------------------------------
//                      more discussion about _ _ proto_ _  and prototype 
//-----------------------------------------------------------------------------------------------
//see the details note in my OneNote notes-- chapter --> _ _ proto_ _  and prototype 

// example 1 
 // when we create any function then what will happend 
 //one more free space will be got and it is an empty object also known as -> prototype
 //so lets see

 function hello(){
    console.log("hello");
 }
 console.log(hello.prototype);

 // now see in case of array
 //let num = [1,2,3,];
//  console.log(Object.getPrototypeOf(num));

// internally it will look like
// --> see detailed notes in my OneNote notes
let num = new Array(1,2,3);
console.log(Array.prototype);
