//get update button
var updateBtn = $('#update-btn');

updateBtn.on('click', function(event) {
  event.preventDefault();
  /* Act on the event */

  //tell server a request to update count has been made
  socket.emit('update request');

});

//update count when server get request to update
socket.on('update count', function(rn){

  updateCountValue(rn);
  console.log(rn);
  
});

//replace followers count value text with random number recieved from server
function updateCountValue(rn){
  $('#count *:first-child').text(rn.toLocaleString());
};
