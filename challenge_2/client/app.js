const app = {};


 $('#submit').on('click', function() {
   app.handleSubmit();	
 };

app.handleSubmit = function(event) {
  let message = {text: $('#text').val()};

  $.ajax({
  	type: 'POST',
    data:  JSON.stringify(message),
    contentType: 'application/json',
    success: (data) => {
      app.render(data)
    } 
  });

  event.preventDefault();
},

app.render = function(data) {
  $('#page').render(data);
}

