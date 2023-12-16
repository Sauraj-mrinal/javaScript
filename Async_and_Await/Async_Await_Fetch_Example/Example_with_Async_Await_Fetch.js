
//----------------------------------------------------------------
// example 1  with promise 
//----------------------------------------------------------------
let result = document.getElementById('result1');

// let Laptop = {
//     Brand: 'MSI',
//      SSD: '1TB',
//      Color: 'Black',
//      Processor: 'i5,9th Gen'
// }

// let BuyLaptop = new Promise((resolve , reject )=>{
//     setTimeout(()=>{
//          resolve(Laptop)
//     },3000)
// })
//now we will create a function 
function fetch1(){
    console.log('working');
    // document.write('working')
     result.innerText = 'Featching Data......... '
    //  BuyLaptop.then(function(data){
    //     console.log(data);
    //     // result1.innerText = 'Fetching Data';
    //    // result1.innerText = data;// output---> object 
    //   // to see the data we have to chage the data format
    //   result1.innerText = JSON.stringify(data)
    //  })
    
}