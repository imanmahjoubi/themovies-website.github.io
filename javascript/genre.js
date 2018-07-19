$(document).ready(function(){
    /* $('.autoplay').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
     });*/

    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 980,
                settings: "unslick"
            },
            {
                breakpoint: 660,
                settings: "unslick"
            },
            {
                breakpoint: 480,
                settings: "unslick"
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    displayImges();

    function displayImges () {

        var movie = $(this).attr("data-name");

        var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=14&include_image_language=en,nul&limit=7&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";

        var imageBaseURL =  "https://image.tmdb.org/t/p/original";

        $.ajax ({

            url : queryURL,
            method: "GET"
        }).then(function(response){



            for (var i=0; i<7; i++) {
                var posterImage = response.results[i].poster_path;
                console.log(posterImage);
                carouselSlide = $(".slick-genre-" + (i+1) );
                carouselSlide.attr('src', imageBaseURL + posterImage);
                carouselSlide.attr('data-name', response.results[i].original_title);

                carouselSlide.on('click', function() {
                    window.location.href = 'movie-details.html?name=' + $(this).attr('data-name');
                });
            };
        });


        var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=18&include_image_language=en,nul&limit=7&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";

        var imageBaseURL =  "https://image.tmdb.org/t/p/original";

        $.ajax ({

            url : queryURL,
            method: "GET"
        }).then(function(response){



            for (var i=0; i<7; i++) {
                var posterImage = response.results[i].poster_path;
                carouselSlide = $(".slick-action-" + (i+1) );
                carouselSlide.attr('src', imageBaseURL + posterImage);
                carouselSlide.attr('data-name', response.results[i].original_title);

                carouselSlide.on('click', function() {
                    window.location.href = 'movie-details.html?name=' + $(this).attr('data-name');
                });
            };
        });


        var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=12&include_image_language=en,nul&limit=7&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";

        var imageBaseURL =  "https://image.tmdb.org/t/p/original";

        $.ajax ({

            url : queryURL,
            method: "GET"
        }).then(function(response){



            for (var i=0; i<7; i++) {
                var posterImage = response.results[i].poster_path;
                carouselSlide = $(".slick-adventure-" + (i+1) );
                carouselSlide.attr('src', imageBaseURL + posterImage);
                carouselSlide.attr('data-name', response.results[i].original_title);

                carouselSlide.on('click', function() {
                    window.location.href = 'movie-details.html?name=' + $(this).attr('data-name');
                });
            };
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

        var imageBaseURL =  "https://image.tmdb.org/t/p/original";

        $.ajax ({

            url : queryURL,
            method: "GET"
        }).then(function(response){



            for (var i=0; i<7; i++) {
                var posterImage = response.results[i].poster_path;
                carouselSlide = $(".slick-crime-" + (i+1) );
                carouselSlide.attr('src', imageBaseURL + posterImage);
                carouselSlide.attr('data-name', response.results[i].original_title);

                carouselSlide.on('click', function() {
                    window.location.href = 'movie-details.html?name=' + $(this).attr('data-name');
                });
            };
        });


        var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=27&include_image_language=en,nul&limit=7&api_key=b8986d8f95d7bee72e1e6191b6cf95f4";

        var imageBaseURL =  "https://image.tmdb.org/t/p/original";

        $.ajax ({

            url : queryURL,
            method: "GET"
        }).then(function(response){



            for (var i=0; i<7; i++) {
                var posterImage = response.results[i].poster_path;
                console.log(posterImage);
                carouselSlide = $(".slick-horror-" + (i+1) );
                carouselSlide.attr('src', imageBaseURL + posterImage);
                carouselSlide.attr('data-name', response.results[i].original_title);

                carouselSlide.on('click', function() {
                    window.location.href = 'movie-details.html?name=' + $(this).attr('data-name');
                });
            };
        });

    }
});