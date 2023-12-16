// // // how we will decelear a class 
// // ES-6 
// // class hello{
// //     printHello(){
// //         console.log(" hello gaurav");
// //     }
// //     sorry(){
// //         log("Sorry eveyone");
// //     }
// // }
// // let a  =new hello();
// // a.printHello(); //  hello gaurav
// // a.sorry();
// // // we can access anything of class  useing referance variable 

// // //----------------------------------------------------------------
// // //                     constructor function
// //------------------------------------------------------------------------------------------------
// //  class student {

// //     // condtructor  creating 
// //     constructor(){
// //       console.log("constructor id calling ");
// //     }
// //  }
// //  let b = new student;
// //  let c = new student;

// // // output 
// // // constructor id calling 
// // // constructor id calling
// // // here we create two objects and you can see that constructor is calling 2 times

// // example 2 :---------------
// // work of   `this` 
// //
// // class student{
// //     constructor(){
// //         let name ;
// //         console.log(" inside constructor");
// //     }
// //     hello(){
// //         console.log(" inside hello");
// //         console.log(this.name);
// //     }
// // }
// // let a = new student();
// // a.hello();
// // output 
// // inside constructor
// //  inside hello
// // undefined --> the value of a is showing undefined
// // how we will assign the value of a 
// // we have two ways to assign the value

// // WAY 1 
// // a.name = "mrinal";
// // a.hello();

// // output 
// // inside constructor
// //  inside hello
// // mrinal

// // way 2 
// // class student{

// //     constructor(name){
// //         //let this.name  = name; --> showing // Variable declaration not allowed at this location.
// //          this.name  = name;
// //         console.log(" inside constructor");
// //     }
// //     hello(){
// //         console.log(" inside hello");
// //         console.log(this.name);
// //     }
// // }
// // let a = new student("mrinal");
// // a.hello();
// // // output
// // // inside constructor
// // // inside hello
// // // mrinal

// //---------------------------------------------------------------------------------------------------
// //                                     about static methods
// //---------------------------------------------------------------------------------------------------
  
// class student{

//     constructor(name){
//         //let this.name  = name; --> showing // Variable declaration not allowed at this location.
//          this.name  = name;
//         console.log(" inside constructor");
//     }
//     hello(){
//         console.log(" inside hello");
//         console.log(this.name);
//     }
//     static print(){
//         console.log(" inside static function ");
//     }
// }
// let a = new student("mrinal");
// a.hello();
// student.print();// inside static function
// // output -------------

// // inside constructor
// // inside hello
// // mrinal
// // inside static function



// //---------------------------------------------------------------------------------------------------
// //                                  Inheritance
// //---------------------------------------------------------------------------------------------------
// // class employee{

// //     constructor(){
// //         console.log(" in side employee constructor");
// //     }
// // }
// // class Manager extends employee{
   
// // }
// // let b1 = new Manager();
// //let a1 = new employee();
// // output 
// // in side employee constructor

// //------------------------------------------------------------------------------------------------

// class employee{

//     constructor(){
//         console.log(" in side employee constructor");
//     }
// }
// // class Manager extends employee{
// //     constructor(){
// //         console.log(" in side Manager constructor");
// //     }//-------------------------> showing erroe Must call 
// //     //super constructor in derived class before accessing 'this' or returning from derived constructor
// //     // we have to write here super to call parant class constructor
    
// // }

// class Manager extends employee{
//     constructor(){
//         super();
//         console.log(" in side Manager constructor");
//     }
    
// }
// let b1 = new Manager();
// // output 
// // in side employee constructor
// //  in side Manager constructor


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// class employee{
//     constructor(name){
//         //this.name = name;
//         console.log(" employee constructor called "+name);

//     }
// }
// class Manager extends employee{

//  constructor(name){
//     super();
//     console.log("manager constructor called " + name);
//  }
// }
// let a  = new Manager("mrianl_sauraj");
//output
// employee constructor called undefined // actully childe class constructor call first and assign the value of name and inside childe class we call parent class constructor using super so at that time parent call vaiable name is undefined.
// manager constructor called mrianl_sauraj



//------------------------------------------------------------------------------
//                              prototype methods
//------------------------------------------------------------------------------

// class employee{
//     constructor(name){
//         this.Empname = name;
//         console.log(" employee constructor called ");

//     }

//     info(){
//         console.log("Employee name is  " + this.Empname);
//      }
// }
// class Manager extends employee{

//  info(){
  
//     console.log("Manager name is  " + this.Empname);
//  }
// }
// let a  = new Manager("mrianl_sauraj");
// a.info();
// output 
// employee constructor called 
// Manager name is mrianl_sauraj
//--> here you can see the when we call info() method it call  only child class manaGER 
// TO call parant class info method we need  to call super.info( ) inside Manager class 

// class Manager extends employee{

//     info(){
//        super.info();// to call parent class info method we need to write like  super.info
//        console.log("Manager name is  " + this.Empname);
//     }
//    }
//    let a  = new Manager("mrianl_sauraj");
//    a.info();

// output
//    employee constructor called 
//    Employee name is  mrianl_sauraj
//    Manager name is  mrianl_sauraj

//EXAMPLE --3 
  //see the example in inheritance.html page 
  