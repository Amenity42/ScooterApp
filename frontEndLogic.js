
// let nameInput;
// let ageInput;
// let location;


document.getElementById("button").addEventListener("click", () => {
      
      const nameInput = document.getElementById("userName").value;
      const ageInput = document.getElementById("age").value;
      const location = document.getElementById("location").value;

      console.log(nameInput, ageInput);

     if(nameInput == "" || ageInput == ""){

           alert('Missing data, please complete form.');

     } else {
           createUser(nameInput, ageInput, location);
     }
     
});

document.getElementById("button2").addEventListener("click", () =>{

      const destination = document.getElementById("destination").value;

      toggelOverlay('Payment');

      //Send user + scooter to new destination (remove power from battery + break scooter chance)
      
      //delay a few seconds and then display arrival screen with confirm payment etc

});

document.getElementById("button3").addEventListener("click", () =>{


      toggelOverlay('');


});

//create new account instance 
function createUser(nameInput, ageInput, location){

      /* let user = */ new App(nameInput, ageInput, location);

      //Check user age before toggel screen
      if(ageInput >= 18){
            toggelOverlay('Destination');
      }
      

}