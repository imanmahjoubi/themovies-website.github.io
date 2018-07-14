$(document).ready(function(){
   
  $.ajax ({
      
      url : "https://api.themoviedb.org/3/discover/movie?with_genres=35&include_image_language=en,nul",
      data: {"api_key : b8986d8f95d7bee72e1e6191b6cf95f4"},
      dataType: "json",
      success: function(result) {
          var resultHTML = $("<div class="img">");
          for ( i = 0; i < result["results"].length; i++){
              var image = result["results"][i]["profile_path"]==null?;
              cosole.log(result);
          }
      }
  })
    
    
    
    
    
    /* var comedy = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/discover/movie?with_genres=35&include_image_language=en,null&videos&limit=10&api_key=b8986d8f95d7bee72e1e6191b6cf95f4",
      "method": "GET",
      "headers": {}*/
      

   
    
    
    
    });
  
});
    
    
  
