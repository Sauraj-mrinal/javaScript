

// class CreateUser{

//      constructor(FirstName , lastName , email, age,address){
//         this.FirstName = FirstName;
//         this.LastName = lastName;
//         this.Email = email;
//         this.Age = age;
//         this.Address = address; 
        
//      }
//      // sum more function creatation 
//      about(){
//         return `${this.FirstName} ${this.lastName}`
//      }
//      is18(){

//         return this.age>=18;
//      }
//      sing(){
//         return "la la la lalala lla la la ";
//      }

// }

// const user1 = new CreateUser('MRINAL','SAURAJ','MRINALSAURAJ@GMAIL.COM',25,'MYADDRESS');
// const user2 = new CreateUser('suresh','SAURAJ','suresh34@GMAIL.COM',26,'MYADDRESS');
// const user3 = new CreateUser('alok','rana',' ALOK@GMAIL.COM',22,'MYADDRESS');

// // to see the prototype 
// console.log(Object.getPrototypeOf(user1));
// console.log(user1.is18());
//-------------------------------------------
// hw )
// createv a class cl HAVING TWO PROPERTIES
// name and bids
// one method  should be abour 
//------------------------------------------------
class Animal{
      constructor(name , bids){
        this.name = name;
        this.bids = bids;
      }

      //method 
      About(){
        return `name of animal is ${this.name} and bids is ${this.bids}`;
      }
}

const cow  = new Animal(" Surbhi" , " jarsi gaye ");
console.log(cow.name);
console.log(cow.About());
console.log(cow.bids);