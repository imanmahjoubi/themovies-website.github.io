$(document).ready(function(){
    $('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
    });

displayMovieImg();

function displayMovieImg () {
    
    var movie = $(this).attr("data-name");
    
    var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=35&include_image_language=en,nul&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";
    
    var imageBaseURL =  "https://image.tmdb.org/t/p/original";

   
  
  $.ajax ({
      
     url : queryURL,
      method: "GET"  
  }).then(function(response) {
      console.log(response);

      
      var posterpathImg1 = response.result[0].poster_path;
      console.log(posterpathImg1);
  
  });
    
}
    
    
    
    /* var comedy = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/discover/movie?with_genres=35&include_image_language=en,null&videos&limit=10&api_key=b8986d8f95d7bee72e1e6191b6cf95f4",
      "method": "GET",
      "headers": {}*/
      

   
    
    
    
  

    
    
  
