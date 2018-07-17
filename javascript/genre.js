$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    displayImges();
});
 
 
 
 function displayImges () {
    
    var movie = $(this).attr("data-name");
    
    var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=35&include_image_language=en,nul&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";
    
    var imageBaseURL =  "https://image.tmdb.org/t/p/original";
 
  

$.ajax ({
    
         url : queryURL,
         method: "GET"  
         }).then(function(response) {
         console.log(response);
      var results = response.results;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          
          var movieDiv = $("<div>");
          var movieImage = $("<img style='width:200px; height:200px'>");
          
          movieImage.attr("src" ,imageBaseURL + results[i].poster_path);
          console.log(movieImage);
          
          movieDiv.append(movieImage);
         $("#wrapper").prepend(movieDiv);
      }
 
  
    });
//   $.ajax ({
      
//      url : queryURL,
//       method: "GET"  
//   }).then(function(response) {
 
//     var posterImg1 = response.results[0].poster_path;
//         console.log(posterImg1);

//         var fullPosterIMG1 = imageBaseURL + posterImg1;
//         console.log(fullPosterIMG1);
//         var carouselPSlide = $('.slick-genre-one');
//         carouselPSlide.attr('src', fullPosterIMG1);
 
  
//   });
    
 }

   
    
    
    
  

    
    
  
