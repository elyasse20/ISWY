// Get the modal
var modal = document.getElementById('id04');
							
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Get the modal
var modal = document.getElementById("myModal_4");
							
// Get the button that opens the modal
var btn = document.getElementById("myBtn_4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}