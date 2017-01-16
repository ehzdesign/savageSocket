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
  if(!rn){
    rn = 10000;
  }
  updateCountValue(rn);
  console.log(rn);
});

socket.on('update time', function(msg){
  displayTimestamp(msg)}
);

//replace followers count value text with random number recieved from server
function updateCountValue(rn){
  $('#count *:first-child').text(rn.toLocaleString());
};

//function display timestamp
function displayTimestamp(msg){
  $('#timestamp').text('last updated: ' + msg);
}
