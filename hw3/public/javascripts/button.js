eventHandler = function( event ) {
    /* do stuff */
}
/* functionality for clicking the order button */
function buttonClick(){
  /* Check if the order is vegan, if so warn the customer */
  var notes = document.getElementById("textArea").value;
  if(notes.includes("vegan")){
    alert("Warning! The cheesecakes contain dairy.");
  }
  else{
    /* successful order, remove components */
    var dropdown = document.getElementById("form");
    form.remove();
    document.getElementById("complete").innerHTML = 
    "Thank you! Your order has been placed.";
    document.getElementById("usernotes").innerHTML = ("Notes: ").concat(notes);
  }
}