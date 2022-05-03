
// let nameInput;
// let ageInput;
// let location;

//*Splash page
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

//*Destination Page
document.getElementById("button2").addEventListener("click", () =>{
      //debugger
      const destination = document.getElementById("destination").value;

      //*check current location is not the same as destination
      if(currentUserInstance.userAccount.currentLocation === destination){

            alert('Please change destination');

      }
      else{

            currentUserInstance.travel(destination);
            console.log(currentUserInstance instanceof App);

            toggelOverlay('Payment');

      }

});

//*Payments Page
document.getElementById("button3").addEventListener("click", () =>{

      toggelOverlay('');

});

//create new account instance 
function createUser(nameInput, ageInput, location){

      currentUserInstance = new App(nameInput, ageInput, location);

      //Check user age before toggel screen
      if(ageInput >= 18){
            toggelOverlay('Destination');
      }
      
}