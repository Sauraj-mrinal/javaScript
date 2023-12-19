 // so in this part we will learn about what is Async 
 console.log('--------------------------------');
 // in case of general function what ever we write inside the function it will retuen
 

//    function getData(){
//     return ' Data received';
//    }

   // when we call this function we will get the data simple 
//    console.log(getData());
   // output
   // it will simple print --> Data received
   

 // but what will happend if i write async BEfor the function
 // lets see 

//  async function getData(){
//     return ' Data received';
//    }
// now i am calling async function 
// console.log(getData());
// output -->
//  > Promise {<fulfilled>: ' Data received'}

// so we can say that whenever we call any async function it will be return a promise

// we have already learned how we can access the the promise data 
// so we have a method name is ----> then 

// so here we can write like 
// getData().then(function(data){
//    console.log(data);
// })
// // output -->  Data received

//----------------------------------------------------------------
//                               await 
//----------------------------------------------------------------
let promise1 = new Promise((resolve , reject )=>{
    setTimeout(()=>{
         resolve('data received')
    },3000)
})
async function getData(){
    let response = await promise1;
    console.log(response);
}
getData();
// output --> Data received --.> after 3 seconds 
