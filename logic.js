
/************************************

Scooter Hire App
By
Amenity42 / oddCompost
29 - 04 - 2022

************************************/




//* --------------------------| Classes |--------------------------

class User{

      constructor(Name, Age){

            this.name = Name;
            this.age = Age;

            //Test users age
            try {
                  
                  this.checkAge();

                  console.log(`Test: ${this.name} is old enough`);

            } catch (error) {
                  console.log(`Test: ${this.name} is not old enough`);
                  
            }
            
      }

      checkAge(){

            if(this.age < 18){
                  throw new Error('User is not old enough to rent a scooter.');
            }

      }



      name;
      age;
      scooter;

}

class Scooter{

      constructor(){
            
            this.chargeRemaining = 100;
            this.needsMaintinance = false;
            this.ID = Math.random() * 100;

      }

      chargeRemaining;
      needsMaintinance;
      ID;
      location;

}

class ChargeStation{

      constructor(){
            
      }

      scooters = [];
      location;
      ID;

      chargeScooter(){
            //todo: Charge scooter 
      }

}

class Maintinance{

      constructor(){
            
      }

      fixScooter(scooter){
            //todo Fix scooter
      }

}

class Payment{

      constructor(){

      }

}

class App{

      constructor(UserName, Age){

           this.accounts.push(this.account = new User(UserName, Age)); 

      }

      account;

      accounts =[];

}

//* --------------------------|   End   |--------------------------




//! --------------------------| Testing |--------------------------

let account_1 = new App('Richard', 31);

console.log(account_1.accounts);

// let Richard = new User('Richard', 31);
// let Gemma = new User('Gemma', 30);
// let Oscar = new User('Oscar',4);



//! --------------------------|   End   |--------------------------



















