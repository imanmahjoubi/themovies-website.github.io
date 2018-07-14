console.log("Hello-world");

$(document).ready(function(){
    $('.movie-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
    displayMovieImg();
    // displayMovieNews();
});

function displayMovieImg() {

    var movie = $(this).attr("data-name");
    // Main query url; returns long list of movies
    var queryURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0ff882446ecc7061a134cf692047205b";

    // for a single movie result
    // var queryURL = "https://api.themoviedb.org/3/movie/550?sort_by=popularity.desc&api_key=0ff882446ecc7061a134cf692047205b";
    var imageBaseURL = 'https://image.tmdb.org/t/p/original';

    // Creating an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
        // console.log(response.backdrop_path);

        var backdropImg1 = response.results[0].backdrop_path;
        console.log(backdropImg1);
        var backdropImg2 = response.results[1].backdrop_path;
        console.log(backdropImg2);
        var backdropImg3 = response.results[2].backdrop_path;
        console.log(backdropImg3);
        var backdropImg4 = response.results[3].backdrop_path;
        console.log(backdropImg4);
        var backdropImg5 = response.results[4].backdrop_path;
        console.log(backdropImg5);

        


        var fullImageUrl1 = imageBaseURL + response.results[0].backdrop_path;
        console.log(fullImageUrl1);
        var carouselSlide = $('.first-carousel-image');
        carouselSlide.attr('src', fullImageUrl1);

        var fullImageUrl2 = imageBaseURL + response.results[1].backdrop_path;
        console.log(fullImageUrl2);
        var carouselSlide2 = $('.second-carousel-image');
        carouselSlide2.attr('src', fullImageUrl2);

        var fullImageUrl3 = imageBaseURL + response.results[2].backdrop_path;
        console.log(fullImageUrl3);
        var carouselSlide3 = $('.third-carousel-image');
        carouselSlide3.attr('src', fullImageUrl3);

        var fullImageUrl4 = imageBaseURL + response.results[3].backdrop_path;
        console.log(fullImageUrl4);
        var carouselSlide4 = $('.fourth-carousel-image');
        carouselSlide4.attr('src', fullImageUrl4);

        var fullImageUrl5 = imageBaseURL + response.results[4].backdrop_path;
        console.log(fullImageUrl5);
        var carouselSlide5 = $('.fifth-carousel-image');
        carouselSlide5.attr('src', fullImageUrl5);

        
        
            var queryURL = "https://newsapi.org/v2/everything?q=Movies&from=2018-07-12&sortBy=popularity&apiKey=215fb6a8533441b8b97d0c058a476321";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                // News article 1. URL, image, title, and descritption.
                var newsArticleURL1 = response.articles[0].url;
                console.log(newsArticleURL1);

                var newsImg1 = response.articles[0].urlToImage;
                console.log(newsImg1);

                var movieNewsTitle1 = response.articles[0].title;
                console.log(movieNewsTitle1);

                var movieNewsDescription1 = response.articles[0].description;
                console.log(movieNewsDescription1);

                var newsRow1 = $(".news1");
                newsRow1.attr('href',newsArticleURL1);

                var displayNewsImage1 = $(".first-news-img");
                displayNewsImage1.attr('src', newsImg1);
                console.log(displayNewsImage1.attr('src', newsImg1));

                var newsArticleTitle1 = $(".first-news-article");
                newsArticleTitle1.text(movieNewsTitle1);

                var newsArticleDescription1 = $(".first-news-description");
                newsArticleDescription1.text(movieNewsDescription1);

                // News article 2. Image, title, and descritption.
                var newsArticleURL2 = response.articles[1].url;
                console.log(newsArticleURL2);

                var newsImg2 = response.articles[1].urlToImage;
                console.log(newsImg2);

                var movieNewsTitle2 = response.articles[1].title;
                console.log(movieNewsTitle2);

                var movieNewsDescription2 = response.articles[1].description;
                console.log(movieNewsDescription2);

                var newsRow2 = $(".news2");
                newsRow2.attr('href',newsArticleURL2);

                var displayNewsImage2 = $(".second-news-img");
                displayNewsImage2.attr('src', newsImg2);
                console.log(displayNewsImage2.attr('src', newsImg2));

                var newsArticleTitle2 = $(".second-news-article");
                newsArticleTitle2.text(movieNewsTitle2);

                var newsArticleDescription2 = $(".second-news-description");
                newsArticleDescription2.text(movieNewsDescription2);

                // News article 3. Image, title, and descritption.
                var newsArticleURL3 = response.articles[2].url;
                console.log(newsArticleURL3);

                var newsImg3 = response.articles[2].urlToImage;
                console.log(newsImg3);

                var movieNewsTitle3 = response.articles[2].title;
                console.log(movieNewsTitle3);

                var movieNewsDescription3 = response.articles[2].description;
                console.log(movieNewsDescription3);

                var newsRow3 = $(".news3");
                newsRow3.attr('href',newsArticleURL3);

                var displayNewsImage3 = $(".third-news-img");
                displayNewsImage3.attr('src', newsImg3);
                console.log(displayNewsImage3.attr('src', newsImg3));

                var newsArticleTitle3 = $(".third-news-article");
                newsArticleTitle3.text(movieNewsTitle3);

                var newsArticleDescription3 = $(".third-news-description");
                newsArticleDescription3.text(movieNewsDescription3);

                // News article 4. Image, title, and descritption.
                var newsArticleURL4 = response.articles[3].url;
                console.log(newsArticleURL4);

                var newsImg4 = response.articles[3].urlToImage;
                console.log(newsImg4);

                var movieNewsTitle4 = response.articles[3].title;
                console.log(movieNewsTitle4);

                var movieNewsDescription4 = response.articles[3].description;
                console.log(movieNewsDescription4);

                var newsRow4 = $(".news4");
                newsRow4.attr('href',newsArticleURL4);

                var displayNewsImage4 = $(".fourth-news-img");
                displayNewsImage4.attr('src', newsImg4);
                console.log(displayNewsImage4.attr('src', newsImg4));

                var newsArticleTitle4 = $(".fourth-news-article");
                newsArticleTitle4.text(movieNewsTitle4);

                var newsArticleDescription4 = $(".fourth-news-description");
                newsArticleDescription4.text(movieNewsDescription4);
            })
            
            







    });

  }
