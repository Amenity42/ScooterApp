
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

      constructor(location, locationID){
            
            this.chargeRemaining = 100;
            this.needsMaintinance = false;
            this.ID = Math.round(Math.random() * 100);
            this.location = location;
            this.locationID = locationID;

      }

      chargeRemaining;
      needsMaintinance;
      ID;
      location;
      locationID;

}

class ChargeStation{

      constructor(location){

            //Construct X amount of scooters and add them to array
            let i = 0;
            this.location = location;
            this.ID = Math.round(Math.random() * 100);

            while (i < 10) {
                 this.scooters.push(new Scooter(this.location, this.ID)); 
                 i++
            }

      }

      scooters = [];
      location;
      ID;

      chargeScooter(scooter){

            //todo: Charge scooter 
            //once scooter arrives at the depo automatically set it for chargeing and then check if the scooter needs repairs

      }

      scooterDepart(scooter){

            //Handle scooter being removed from array 

      }

      scooterArrive(scooter){

            //Handle scooter being added to array if it is not damaged
            if(!this.checkForDamages(scooter)){

                  this.scooters.push(scooter);
                  
            }else{

                  //Send scooter for repairs
                  console.log('Scooter sent for repairs');  

            }

      }

      checkForDamages(scooter){

            if(scooter.needsMaintinance){
                  //deactivate scooter and send for maintinance
                  console.log('Scooter needs maintinance');
                  return true;
            }

            return false;

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


//*Test  users
let account_1 = new App('Richard', 31);
//console.log(account_1.accounts);

//*Test scooter instance
let scooter_1 = new Scooter;

//console.log(scooter_1);

//Remove a portion of the battery & log
scooter_1.chargeRemaining -=40 ;
console.log(scooter_1.chargeRemaining);

//*Testing charge station

let area_1 = new ChargeStation('Basildon');

//console.log(area_1);

//*Test adding scooter to depo

scooter_1.needsMaintinance = true;

area_1.scooterArrive(scooter_1);

//console.log(area_1.scooters);

///

//! --------------------------|   End   |--------------------------



















