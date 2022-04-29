
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

//* --------------------------|   End   |--------------------------
