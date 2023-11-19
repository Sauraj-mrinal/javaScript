// object
// arrays are good but not sufficient 
// for real world data
// object stire key value pairs 
// object don't have index 

//---------------------------------HOW TO CREATE AN OBJECT ---------------------------
//  const persion = {name: "Mrinal",age:24};
//  console.log(persion.name);
//  console.log(persion.age); 
 //output 
 //Mrinal
///24
// we can make it by another way

// const obj1 = {
//    name : "Alok Rana",
//    age : 22,
//    hobbies:["circket" , "football" , "sleeping" , "reading "]
// }
//console.log(obj1);
/* 
  output 
   {
        name: 'Alok Rana',
        age: 22,
        hobbies: [ 'circket', 'football', 'sleeping', 'reading ' ]
    }
*/

// how to add key value pair to object (dot notation )
// obj1.gender = "male"
// console.log(obj1);
/* 
  output 
   {
        name: 'Alok Rana',
        age: 22,
        hobbies: [ 'circket', 'football', 'sleeping', 'reading ' ]
        gender 'male'
    }
*/

//---------------or-------
// obj1["gender"] = "female";
// console.log(obj1);

/* 
  output 
   {
        name: 'Alok Rana',
        age: 22,
        hobbies: [ 'circket', 'football', 'sleeping', 'reading ' ]
     y   gender 'femail'
    }
*/

//----------HOW TO ACCESS DATA FROM OBJECT ------------------
// console.log(obj1["name "]);
// console.log(obj1["age"]);
// console.log(obj1["hobbies"]);
// console.log(obj1["gender"]);// in java whenever we try to access name of somthing which belong to object 
// we use obj. variable name or mathod name 
//but in javascript we can do same thing like thaat

//--------------Diff b/w dot and bracket notation --------------

// const obj1 = {
//     name : "Alok Rana",
//     age : 22,
//     "persion hobbies":["circket" , "football" , "sleeping" , "reading "]
//  }
 // herer hobbies is a key ,age is also key so we can write it into a single word
 // not more than one word if i use to write more than one word then we should use of " " double quatation
 // like we are writing as a string 
//--------------------------------------------------------
// now if you want to print the statement then we have to wrie like that 
//console.log( obj1["persion hobbies"]);

// const key ="email";

// const persion = {
//      name : "Mrinal Sauraj",
//      age: 22,
//     "persion Hobbies" : ["guitar" , "sleeping" , "listening music "]
// }
// console.log( persion["persion Hobbies"]);
// persion[key] = "meinalsauraj40@gmail.com";
// console.log(persion);
 //-------------------------------------------------------------------------------------
 //       ---------------------- FOR LOOP IN OBJECT -------------------
 //------------------------------------------------------------------------------------
//  const persion = {
//     name : "Mrinal Sauraj",
//     age: 22,
//    "persion Hobbies" : ["guitar" , "sleeping" , "listening music "]
// }
// for loop 
//Object.keys
// for( let key in persion ){
//     console.log(key);
// }
// for( let ele of persion){
// console.log(ele);
// }
//Object
// console.log(.keys(persion));
// //[ 'name', 'age', 'persion Hobbies' ]
// //it will return array 
// let val = Array.isArray((Object.keys(persion))); 
// console.log(val);//true
//-----------------------------------------------------------------------------------
//-----      how to iterate object using loop                                  -----//
//------------------------------------------------------------------------------------
// const person = {
//   name : "Mrinal Sauraj",
//   age: 22,
//  "persion Hobbies" : ["guitar" , "sleeping" , "listening music "]
// }
// for loop in object 
//1)

// for( let ele in person){
//   console.log(person.ele);
// }
//output---------------- 
// undefined
// undefined
// undefined
// 2)--------------------------

// for( let ele in person){
//   console.log(person[ele]);
// }
//output------------
// Mrinal Sauraj
// 22
// [ 'guitar', 'sleeping', 'listening music ' ]
//3)----------------------

// for( let ele in person){
//   console.log( `${ele}: ${person[ele]}`);
// }

//output------------
// name: Mrinal Sauraj
// age: 22
// persion Hobbies: guitar,sleeping,listening music
// for( let ele in person){
//   console.log(ele," :" ,person[ele]);
// }

//output------------
// age  : 22
// persion Hobbies  : [ 'guitar', 'sleeping', 'listening music ' ]
// PS E:\DEV\JavaScript Basic>
//-------------------------------------------------------------------------------

//  Object.keys method
// it will return an array of keys 

//console.log((Object.keys(person)));
//output
//[ 'name', 'age', 'persion Hobbies' ]
//now if we want to treaverse whole object using loop then we can do like that 
// for( let ele of Object.keys(person)){
//    console.log(ele,":" , person[ele]);

// }

// output ------------------
// Mrinal Sauraj
// 22
// [ 'guitar', 'sleeping', 'listening music ' ]


//__________________________________________________________________________________________
 //----------------------       COMPUTED PROPERTIES            --------------------------
//__________________________________________________________________________________________

// this is give 

//  const key1 = "objekey1";
//  const key2 = "objekey2";

//  const value1 = "myValue1";
//  const value2 = "myValue2";
// // and we have to do same internally to get the

// //  const obj = {
// //   objkey1: "myvalue1",
// //   objkey2 : "myvalue2"
// //  }
// //  console.log(obj);
//  // output--------------
// // { objkey1: 'myvalue1', objkey2: 'myvalue2' }


// // now how compute properties work

// //Computed properties allow you to use the values of expressions as property names of an object.
// //  const obj  = {// if we write like this then we can say that it is a kind of comoute propertie use 
// //    [key1] : value1,
// //    [key2] : value2
// //  }
// //  // using this we will got same output as a upeer outour 
// //  console.log(obj);// { objekey1: 'myValue1', objekey2: 'myValue2' }

// // the last way to do same thing is 
// const obj2  = {};

// obj2[key1] =  value1;
// obj2[key2] = value2;
// console.log(obj2);//{ objekey1: 'myValue1', objekey2: 'myValue2' }

// //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
// //                          spread operator 
// //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------

// // we will se it first in case of array after will see in case of object 
// const arr1  =[1,2,3,4];
// const arr2 = [5,6,7];
// const newARR = [...arr1];
// console.log(newARR);//[ 1, 2, 3, 4 ]
// const NewArr2 = [...arr1,...arr2]
// console.log(NewArr2);// output 
//                         //[
//                         //   1, 2, 3, 4,
//                         //   5, 6, 7
//                         // ]

// // in case of string 
// // let we have a string 
// const newarr3 = [..."abcd"];
// console.log(newarr3);
// // the spreaded String is  o/p -->[ 'a', 'b', 'c', 'd' ]
// // ye ek ek charactor ko iterate krta hai q ki yah ek string hai
// // agar yeah string naa ho to error dega hame 


// //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
// //                          spread operator in case of object 
// //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------




// const obj1 = {
//   name : "Alok Rana",
//     age : 22,
//   "persion hobbies":["circket" , "football" , "sleeping" , "reading "],
//   name : "raja"
// }
// console.log(obj1);
//output -->
// name: 'raja', /// here name is changed bcz we cant use same key in one object if we use then my old value will be loss
//   age: 22,
//   'persion hobbies': [ 'circket', 'football', 'sleeping', 'reading ' ]




//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
//                     now see the spread operator in case of object 
//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------

// const obj2 = {
//   name : "Alok Rana",
//     age : 22,
//   "persion hobbies":["circket" , "football" , "sleeping" , "reading "],
// }
// const obj3 = {
//   name :"Gaurav",
//   address : " Bihar ",
//   Age : "25",
// }
// here we have 2 object obj2 and obj3 and you have to create a new object and make colone it 

// const newObj={...obj2}// we have successfully make object 2 clone 
// console.log(newObj);
//o/p----->

          // {
          //   name: 'Alok Rana',
          //   age: 22,
          //   'persion hobbies': [ 'circket', 'football', 'sleeping', 'reading ' ]
          // }

          
          
          // please see carefully 

          // const obj2 = {
          //   name : "Alok Rana",
          //     age : 22,
          //   "hobbies":["circket" , "football" , "sleeping" , "reading "],
          // }
          // const obj3 = {
          //   name :"Gaurav",
          //   address : " Bihar ",
          //   Age : "25",
          // }
          
          // const newObj2={...obj2, ...obj3}
          // console.log(newObj2);
          // output
          //{
            //   name: 'Gaurav',
            //   age: 22,
            //   '  hobbies': [ 'circket', 'football', 'sleeping', 'reading ' ],
            //   address: ' Bihar ',
            //   Age: '25'
            // }


            
//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
//(imp)                      object  destructuring  
//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
// const band ={
//   bandName : "led zepplin",
//   famousSound : "sanam teri kasham ",
   
// };
// // const bandName = band.bandName;
// const famousSound = band.famousSound;

// console.log(bandName);
// console.log(famousSound);
// // also we can write it like that
// console.log("---------------------"); 
// const x = band.bandName;
// const y = band.famousSound;
// console.log(x);
// console.log(y);
// output -----------------------------
          // led zepplin
          // sanam teri kasham
          // ---------------------
          // led zepplin
          // sanam teri kasham
//we can use same 
//------------------------------------------------------
//                  2nd way 
//---------------------------------------------------------
// const {bandName, famousSound} = band;
// console.log(bandName);
// console.log(famousSound);
//led zepplin
//sanam teri kasham

// example 2;

// const band2 ={
//   bandName : "led zepplin",
//   famousSound : "sanam teri kasham ",
//   year:2003,
//   anotherFamousSon: "ham tere shahar me aaye hai "
// };
//let {val1,val2} = band2;
// console.log(val1);
// console.log(val2);
// output ------------------
// led zepplin
// sanam teri kasham
//-------------------------rest of the values are not store in variable 
// so in line number 359 we are just use to create two varibale nad store the value of concutive value from object
//------------------------------------------------
// if we want to store rest of the value in a single variable then we have to do like 
// const band ={
//   bandName : "led zepplin",
//   famousSound : "sanam teri kasham ",
//   year:"2003",
//   anotherFamousSon: "ham tere shahar me aaye hai ",
   
// };

// // here the variable name rest able to store rest all the values of my object 

//  const {bandName, famousSound,...rest} = band;

// console.log(bandName);
// console.log(famousSound);
// //---------------output -------------
// // led zepplin
// // sanam teri kasham
// console.log(rest);// { year: '2003', anotherFamousSon: 'ham tere shahar me aaye hai ' }
// // in rest variable it will return rest of the key values pair 
// // it is returning the object 



//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
//                          object inside Array   
//-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------

// lwt we have to create an array and store the informatation of users 
// we can store more than one user information into a single array
//const user = []

//const user  = [ {user1 info },{ user 2 info },{ user 3 info },{ user 4 info }]
// const user = [
//   {userId :1 , FirstName : "Alok" , gender :'male'},
//   {userId :2 , FirstName : "parteek" , gender :'male'},
//   {userId :3 , FirstName : "somya " , gender :'gay'},
//   {userId :4 , FirstName : "prince" , gender :'chakka'},
// ]
// //console.log(user);
// //------------------output ------------------
// // [
// //   { userId: 1, FirstName: 'Alok', gender: 'male' },
// //   { userId: 2, FirstName: 'parteek', gender: 'male' },
// //   { userId: 3, FirstName: 'somya ', gender: 'gay' },
// //   { userId: 4, FirstName: 'prince', gender: 'chakka' }
// // ]
// // so if we want to itterate it uding loop 
// //the we can use any kind of loop 
// for( let ele of user){
//   console.log(ele);
// }
// //------------------output -------------------
//   // { userId: 1, FirstName: 'Alok', gender: 'male' }
//   // { userId: 2, FirstName: 'parteek', gender: 'male' }
//   // { userId: 3, FirstName: 'somya ', gender: 'gay' }
//   // { userId: 4, FirstName: 'prince', gender: 'chakka' }

// // if we wnat to access user particular thig like user id name or gender 
// for( let ele of user ){
//   console.log(ele.gender);// one by one it will print gender for all the object 
// }
// //--------------output-------------
// // male
// // male
// // gay
// // chakka

                //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------
                //                          nested destructuring  
                //-------------x-x-x-xx-x-x-x-x-x-x-x-x-x-x-x---------------------------------------


//    const users = [
//   {userId :1 , FirstName : "Alok" , gender :'chuja'},
//   {userId :2 , FirstName : "parteek" , gender :'male'},
//   {userId :3 , FirstName : "somya " , gender :'gay'},
//   {userId :4 , FirstName : "prince" , gender :'chakka'},
// ]
// // it is ver simple way to do 
// // const[ val1, val2, val3, val4] = users;
// // console.log(val1);//{ userId: 1, FirstName: 'Alok', gender: 'male' }
// // console.log(val2);//{ userId: 2, FirstName: 'parteek', gender: 'male' }
// // console.log(val4);// { userId: 4, FirstName: 'prince', gender: 'chakka' }

// // but if we want to destructure the particulat value or details like soneone firstname then
// const[{FirstName},val,{gender}]=users;
// console.log(FirstName);//alok
// console.log(gender);//gay
// console.log(val);//{ userId: 2, FirstName: 'parteek', gender: 'male' }