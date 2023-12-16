


class Animal{
        constructor(name , bids,age){
          this.name = name;
          this.bids = bids;
          this.age = age;
        }
    
    //     //method 
        About(){
          return `name of animal is ${this.name} and bids is ${this.bids}`;
        }
        is18(){
            return this.age>=18;
        }

        static name(){// create a static method
            console.log("nfrom static method ");
        }
    }

    const a1 = new Animal('sera','dehatia',34);


    //-----------------------------------------------------------------------------------------
    //                                     ******* 
    //                                     *******
    //                                     *******       
    //-----------------------------------------------------------------

    