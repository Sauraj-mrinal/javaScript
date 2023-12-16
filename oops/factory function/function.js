
// function that create object 
// 2) add key value pairs
// 3) return the object
// function createObj(FirstName , lastName , email, age,address){
//      // to add key value pairs we need to create an object 
//      const user ={}// this is an empty object 
//      user.FirstName = FirstName;
//      user.LastName = lastName;
//      user.Email = email;
//      user.Age = age;
//      user.Address = address;  
//      // now we have to return the object
//      // but we have to add some method
//      user.about = function(){
//           return `${this.FirstName} ${this.lastName}`
//      }
//      user.is18 = function(){
//               return this.age>=18;
//      }
//     return user ;// returnung the object

// }
// user1 = createObj('mrinal','sauraj', 'mrinalsauraj@gmail.com',24 ,'my address' );
// console.log(user1);
// const val = user1.is18();
// console.log(val);
// const val2 = user1.about();
// log(val2);

// in upper case we just see how we will create an object using function
// suppose we have to complete more than one object the we will call method again naf again

// user2 = createObj('mrinal','sauraj', 'mrinalsauraj@gmail.com',24 ,'my address' );
// user3 = createObj('kunal','sauraj', 'mrinalsauraj@gmail.com',24 ,'my address' );
// user3 = createObj('shriHarsha','sauraj', 'mrinalsauraj@gmail.com',24 ,'my address' );
// jitna bar user banega utna bar method banega utna bar memory me space lega 

// so inside createObj function we have created two methods 
// 1) about 
// 2) is18 
// --> so inpalce of these methods we can create an object and put thair referance or address 
// so let's create
// first we create the object and then we create  function and inside  function WE WILL 
// user this object referance namne 

const userMethod = {
    // inside object we crete two key value pair 
    about : function(){
         return `${this.FirstName} ${this.lastName}`
    },
  // key: value  
    is18 : function(){
         return this.age>=18;
}
}


function createObj(FirstName , lastName , email, age,address){
    // to add key value pairs we need to create an object 
    const user ={}// this is an empty object 
    user.FirstName = FirstName;
    user.LastName = lastName;
    user.Email = email;
    user.Age = age;
    user.Address = address;  
    // now we have to return the object
    // but we have to add some method
    // here we are putting here address of 'userMethod' object address 

    user.about = userMethod.about;// so this type we can add some additional methods
    user.is18 = userMethod.is18;// so this type we can add some additional methods


   
   return user ;// returnung the object

}
user1 = createObj('mrinal','sauraj', 'mrinalsauraj@gmail.com',24 ,'my address' );

console.log(user1);
console.log(user1.about);
console.log(user1.is18);

//--------------------------------------------------------------------------------------------------------------------
// after finishing this first go proto.js file and read
//--------------------------------------------------------------------------------------------------------------------
