
/************************************

Scooter Hire App
By
Amenity42 AKA oddCompost
29 - 04 - 2022

************************************/




//* --------------------------| Classes |--------------------------

class User{

      constructor(Name, Age, CurrentLocation){

            this.name = Name;
            this.age = Age;
            this.currentLocation = CurrentLocation;

            //Test users age
            try {
                  
                  this.checkAge();

                  console.log(`Test: ${this.name} is old enough`);
                  //Todo User is old enough --> assign user a scooter --> take user to next screen so they can select destination

            } catch (error) {
                  console.log(`Test: ${this.name} is not old enough`);
                  
            }
            
      }

      checkAge(){

            if(this.age < 18){

                  alert('Sorry you are not old enough to ride a scooter.')
                  throw new Error('User is not old enough to rent a scooter.');
                  
            }

      }

      name;
      age;
      scooter;
      currentLocation;

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
      static areas = [];
      scooters = [];
      location;
      ID;

      //Charge scooter 
      chargeScooter(scooter){

            scooter.chargeRemaining = 100;

      }

      scooterDepart(userAccount){

            //Handle scooter being removed from array 
          
            //Assign scooter to userAccount
            userAccount.scooter = this.scooters[0];

            //Remove scooter from array
            this.scooters.shift();
            //console.table(this.scooters);

      }

      //Checks in scooter - Check if damaged or uncharged 
      scooterArrive(scooter){

            //Handle scooter being added to array if it is not damaged
            if(!this.checkForDamages(scooter)){ //Scooter not broken

                  this.scooters.push(scooter);
                  
            }else{ //Scooter broken

                  //Send scooter for repairs
                  console.log('Scooter sent for repairs'); 

                  //This could be Async...
                  Maintinance.fixScooter(scooter); //<-- Await this 

                  //Once scooter is fixed add to array
                  this.scooters.push(scooter);

            }

            //Check if Scooter is fully charged
            if(scooter.chargeRemaining !== 100){

                  this.chargeScooter(scooter);

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

     static fixScooter(scooter){
            //todo Fix scooter

            //fix xcooter 
            console.log(`Scooter is now fixed`);
            scooter.needsMaintinance = false;

            //Send scooter back to depo that called this 

            return(scooter); //!not sure if this will work -- may need to send call function and check ID 
      }

}

class Payment{

      constructor(){

      }

}

class App{

      constructor(UserName, Age, CurrentLocation){

            this.userAccount = new User(UserName, Age, CurrentLocation);
            
            this.assignScooter(this.userAccount);

            App.accounts.push(this.userAccount); 


           //*Test accounts info

              console.table(App.accounts);
      //      console.log(App.accounts);

      }

     userAccount; 
     static accounts =[];

     assignScooter(user){

          ChargeStation.areas.forEach(element => {

            if (element.location === user.currentLocation) {

                  console.log('Found match');

                  //Assign scooter to user
                  element.scooterDepart(user)

                  // Exit
                  return;  

            }
                
          });
          console.log(user.currentLocation); 

     }

}

//* ------------------------| Setup areas |------------------------

setupAreas();     

//Set up all areas
function setupAreas(){

      const areas = ['Basildon', 'London', 'Dagenham', 'Barking', 'Upminster'];
      for(i=0; i< areas.length; i++){

                 const area = new ChargeStation(areas[i]);
            
                 //Add area to array 
                 ChargeStation.areas.push(area);

      }

      console.table(ChargeStation.areas);
}


//* --------------------------|   End   |--------------------------




//! --------------------------| Testing |--------------------------


//*Test  users
// let account_1 = new App('Richard', 31);
//console.log(account_1.accounts);

//*Test scooter instance
// let scooter_1 = new Scooter;

// //console.log(scooter_1);

// //Remove a portion of the battery & log
// scooter_1.chargeRemaining -=40 ;
// console.log(scooter_1.chargeRemaining);

//*Testing charge station

// let area_1 = new ChargeStation('Basildon');

//console.log(area_1);

//*Test adding scooter to depo

// scooter_1.needsMaintinance = true;

// area_1.scooterArrive(scooter_1);

// //console.info(area_1.scooters);
// console.table(area_1.scooters);

///



//! --------------------------|   End   |--------------------------



















