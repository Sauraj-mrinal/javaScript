// 31. **Create a simple object** with properties `name` and `age`. Print the name property.

// here we can create the object using function constructor 

// it meAN  a function which return an object when ever we call it 

function Car(){
    return{
        model: "R234",
        price: "40002342",
        color: "red",
        brand : "Mahindra"
    }
}

// so when ever we call this function then i got an object 
// so how we can call --> simple as a function call
var obj1 = Car();
console.log(obj1);  // -> { model: 'R234', price: '40002342', color: 'red', brand: 'Mahindra' }

// to access their properties we can write like 
console.log(obj1.model);
console.log(obj1["price"]);


