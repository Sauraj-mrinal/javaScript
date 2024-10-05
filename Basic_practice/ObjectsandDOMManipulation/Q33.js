// 33. Create a function that loops through an object and logs each key and value.

animal = {
    name:"tommy",
    color:"red",
    age: "4yr",
    breed: "cat",
    price: 5000
}

// we have to print all key and it's values

function Disp(obj){
    for(let ele in obj){
        if (obj.hasOwnProperty(ele)){
        console.log(`${ele} -> ${obj[ele]}`);
            
        }
    }
}
Disp(animal);
console.log(animal.name);
