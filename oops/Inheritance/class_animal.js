// class Animal{
//     constructor(name , bids){
//       this.name = name;
//       this.bids = bids;
//     }

//    //method 
//     About(){
//       return `name of animal is ${this.name} and bids is ${this.bids}`;
//     }
// }
// class dog extends Animal{
    
   
//     About(){
//       return ` from child class -> name of animal is ${this.name} and bids is ${this.bids}`;
//     }
// }

// const d1 = new dog("srea ", 'dehatiya');
// console.log(d1.name);
// console.log(d1.bids);
// console.log(d1.About());

// // srea 
// //  dehatiya
// //  from child class -> name of animal is srea  and bids is dehatiya


//------------------------------------------------------------
// //         for more go yahoo folder and see inheritance 
//------------------------------------------------------------ 



//----------------------------------------------------------------------------
//                                 super()
//----------------------------------------------------------------------------
// class Animal{
//     constructor(name , bids){
//       this.name = name;
//       this.bids = bids;
//     }

//     //method 
//     About(){
//       return `name of animal is ${this.name} and bids is ${this.bids}`;
//     }
// }
// class dog extends Animal{
//     constructor(name , bids,age){
//       super(name,bids);// to call parent constructor from child class 
//       this.age = age;
//     }
//     About(){
//       return ` from child class -> name of animal is ${this.name} and bids is ${this.bids} and age is ${this.age}`;
//     }
// }

// const d1 = new dog("srea ", 'dehatiya',4);
// console.log(d1.name);
// console.log(d1.bids);
// console.log(d1.About());


//------------------------------------------------------------------------------------------------
//                           getter methods and setters
//------------------------------------------------------------------------------------------------
// // example 1 
// class persion{
//     constructor(firstName, lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//     }
//     // mwthod 
//     fullName(){
//             return `${this.firstName} ${this.lastName}`;
//     }
// }

// const p1 = new persion('mrinal','sauraj' , 25);
// console.log(p1);
// console.log(p1.firstName);
// // to call the method 
// console.log(p1.fullName());// so aj a method when i call we have to write like that

// //persion { firstName: 'mrinal', lastName: 'sauraj', age: 25 }
// // mrinal
// // mrinal sauraj

//----------------------------------------------------------------
// example 2 -----------> get <--------------
//----------------> how to make any function getter using get 
// class persion{
//     constructor(firstName, lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//     }
//     // getter 
//     get fullName(){// before function name of i write get there calling syntex will be change 

//             return `${this.firstName} ${this.lastName}`;
//     }
// }

// const p1 = new persion('mrinal','sauraj' , 25);
// console.log(p1);
// console.log(p1.firstName);
// // to call the method 
// console.log(p1.fullName);// so heare we can call directlly using there name 
// // it is working like some properties 

//persion { firstName: 'mrinal', lastName: 'sauraj', age: 25 }
// mrinal
// mrinal sauraj
//-------------------------------------------------------------------------------------------   ----------------
//                          seName 
//------------------------------------------------------------------------------------------- ----------------

//----------------------------------------------------------------
// example 3 -----------> setName <--------------
//----------------> how to  using setName  
class persion{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    // getter 
    get fullName(){// before function name of i write get there calling syntex will be change 

            return `${this.firstName} ${this.lastName}`;
    }
    // if we want to set persion name and age using method the 
    setName(firstName ,lastName){
        this.firstName  = firstName;
        this.lastName = lastName;
    }

    set fullName(fullname){
        // we are using here string splite by space  
     const [first , second ] = fullname.split(" ");
     this.firstName = first;
     this.lastName = second ;
    }
}

const p1 = new persion('mrinal','sauraj' , 25);
console.log(p1);
console.log(p1.firstName);
console.log(p1.lastName);
// to call the method 
console.log(p1.fullName);// so heare we can call directlly using there name 
// it is working like some properties 
//now we want to change the name or set the name 

p1.setName('sauraj' , 'mrinal');
console.log(p1.firstName);
console.log(p1.lastName);

p1.fullName = "rajeshwari rajput";
// mrinal
//  sauraj
//  mrinal sauraj
//  sauraj
// mrinal

// ------------------------------------------------------------
// for more details go : freecodecamp website and read 
//                          @mrial655 Mrinal
//                           ******
//--------------------------------------------------------------

