$(document).ready(function() {    
  
   $('form').on('submit', function(e) {
     e.preventDefault();	
  
    let message = $("#text").val();

      $.ajax({
      type: 'POST',
      url: '/',
      data: message,
      contentType: 'application/json',
      success: function (result) {
        result.map(function(item) {          
          $("#page").append(item + ' ')
        })
      },
      error: function (err) {
        console.log('AJAX post fail', err); 
      }
    });
  })
 
})
