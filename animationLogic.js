const userDetailsScreen = document.getElementById("userDetailsScreen");
const overlayDestination = document.getElementById("overlayDestination");
const overlayPayment = document.getElementById("overlayPayment");


function toggelOverlay(page){

      if(page === "Destination"){

            userDetailsScreen.style.left = "200px";
            overlayDestination.style.left = "0px";
            overlayPayment.style.left = "-200px"; 

      }
      else if(page === "Payment"){

            userDetailsScreen.style.left = "400px";
            overlayDestination.style.left = "200px";
            overlayPayment.style.left = "0px"; 

      } else {

            //Revert back to main page
            userDetailsScreen.style.left = "0px";
            overlayDestination.style.left = "-200px";
            overlayPayment.style.left = "-400px";

      }
      
}