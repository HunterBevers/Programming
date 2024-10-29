 // track the interval id
 var intervalID = 0;

 // this function will move our image around the page
 function MoveImage(){
     document.getElementById("startbutton").disabled = true;
     document.getElementById("stopbutton").disabled = false;

     // create a nickname/shortcut varriable that points to our HTML image
     var image = document.getElementById("Devils Hand.jpg");

     //this will keep track of where the image was
     var oldX = 0;
     var oldY = 0;
     // keeping track of the interval will allow me to stop moving the image
     intervalID = setInterval(function(){
         // set the x and y coordinates for the image
         var newX = 5; //moving the image by 5 pixels - this could be a random number
         var newY = 5; //moving the image by 5 pixels - this could be a random number

         // oldX += newX is the same thing as oldX = oldX + newX
         oldX = oldX + newX;
         oldY = oldY + newY;

         console.log("oldX = " + oldX);
         console.log("oldY = " + oldY);

         image.style.left = oldX + "px";
         image.style.left = oldY + "px";
     }, 2000); // 1000 milliseconds = 1 second
 }

 // this function will stop moving the image
 function stopMoveImage(){
     document.getElementById("startbutton").disabled = false;
     document.getElementById("stopbutton").disabled = true;
     // call the built in JavaScript function to clear out interval
     clearInterval(intervalID);
 }