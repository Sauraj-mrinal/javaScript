// const persion  = {
//     firstName: 'John',
//     age: 34,
//     about: function(){
//         //console.log(`persion name is ${firstName} and age is ${age}` );// if we write like we will get an error
//         // so we have to write like 
//         console.log(`persion name is ${this.firstName} and age is ${this.age}` );
//     }
// }
// // so what is this 
// persion.about()
// console.log();

// ex - 2 ' 
function persionInfo(){
    console.log(`persion name is ${this.firstName} and age is ${this.age} sbout the persion ${this.about}`);

}
const persion1 = {
    firstName : 'John',
    age : 34,
    about : persionInfo,
}
const persion2={
    firstName: 'Vani',
    age : 22,
    about:persionInfo
}

console.log(about());
console.log(persionInfo);

// persion1.about();
// persion2.about();
// output
// persion name is John and age is 34
// persion name is Vani and age is 22