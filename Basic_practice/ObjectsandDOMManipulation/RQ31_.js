// **Create a simple object** with properties `name` and `age`. Print the name property.

function info(){
    return{
       namee : 'mrinal',
         age : '22'
    }
   
}

const c = info();
console.log(c.age);
console.log(c.namee);

// way 2

// class human{
//     name='viru'
//     age='22'
// }

// const h = new human();
// console.log(h['name']);
// console.log(h['age']);

// 33. Create a function that **loops through an object** and logs each key and value.
function disp(h){
    for(var ele in h){
        console.log(ele+"->"+h[ele]);
        
    }
}
// class human{
//     name='viru'
//     age='22'
//     sex='m'
// }

// const l = new human();
// disp(l)

// 34. Write a function to **delete a property** from an object.

function deleteProp(key,obj){
    delete obj[key]
}
class human{
    name='viru'
    age='22'
    sex='m'
}

const l = new human();
disp(l)

deleteProp('sex',l);
disp(l)



