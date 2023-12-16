
//----------------------------------------------------------------
// example 1  with promise 
//----------------------------------------------------------------
let result = document.getElementById('result1');

let Laptop = {
    Brand: 'MSI',
     SSD: '1TB',
     Color: 'Black',
     Processor: 'i5,9th Gen'
}

let BuyLaptop = new Promise((resolve , reject )=>{
    setTimeout(()=>{
         resolve(Laptop)
    },3000)
})
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

//----------------------------------------------------------------
//                         Ex - 02
//                        using Asyns await
//----------------------------------------------------------------
let result2 = document.getElementById("result2");
async function fetch2(){

    result2.innerText = "fetching Data.."
    let data = await BuyLaptop;
    result2.innerText = JSON.stringify(data);
}


//----------------------------------------------------------------
//                         Ex - 03
//                        using Fetch Api
//----------------------------------------------------------------

let result3 = document.getElementById("result3");
let BuyLaptop2  = fetch("https://jsonplaceholder.typicode.com/posts")
.                 then(response => response.json())


    function fetch3(){
        //result3.innerText = "Fetching Data";
        //promise
        BuyLaptop2.then(res => {
         result3.innerText=JSON.stringify(res)
        })
    }