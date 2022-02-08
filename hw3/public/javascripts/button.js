/*
Author: Logan Machida
Class: CS341
*/

eventHandler = function( event ) {
    /* do stuff */
}
/* functionality for clicking the order button */
(function buttonClick(){
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
});

$(document).ready(function() {
  $(".monthLink").click(function(){

    let month = $(this).text();
    $('.monthDropdown').text(month);
    console.log(month)
    $.post('http://localhost:3000/orders', month, function(data){
      console.log(data);
      // Update the current quantities
      $('#cherryQuantity').text(data[0].quantity + " " + data[0].topping);
      $('#chocolateQuantity').text(data[1].quantity + " " + data[1].topping);
      $('#plainQuantity').text(data[2].quantity + " " + data[2].topping);

    })

  })
})
