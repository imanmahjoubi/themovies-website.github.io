console.log("Hello-world");

$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    displayMovieImg();
});

function displayMovieImg() {
    // Main query url; returns long list of movies
    var queryURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0ff882446ecc7061a134cf692047205b";
    // Base URL to attach to backdrop_path results
    var imageBaseURL = 'https://image.tmdb.org/t/p/original';

    // Creating an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        // Limits results to only 5 backdrop images
        for (var i=0; i<5; i++) {
            // Variable pulls the 5 backdrop images
            var backdropImage = response.results[i].backdrop_path;
            carouselSlide = $(".carousel-image-" + (i+1) );
            carouselSlide.attr('src', imageBaseURL + backdropImage);
            carouselSlide.attr('data-name', response.results[i].original_title);

            carouselSlide.on('click', function() {
                window.location.href = 'newindex.html?name=' + $(this).attr('data-name');
            })
        } 
            // News article API and AJAX Call
            var queryURL = "https://newsapi.org/v2/everything?q=Movies&from=2018-07-12&sortBy=popularity&apiKey=215fb6a8533441b8b97d0c058a476321";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {

                // for (var i=0; i<4; i++){
                //     var newsURL = response.articles[i].url;
                //     var newsIMG = response.articles[i].urlToImage;
                //     var newsTitle = response.articles[i].title;
                //     var newsDescription = response.articles[i].description;

                //     newsTitle1 = $(".")
                // }
                // Variables to pull news article 1's URL, image, title, and descritption.
                var newsArticleURL1 = response.articles[0].url;
                var newsImg1 = response.articles[0].urlToImage;
                var movieNewsTitle1 = response.articles[0].title;
                var movieNewsDescription1 = response.articles[0].description;
                // Adds news article 1's URL location to the links
                var newsRow1 = $(".news1");
                newsRow1.attr('href',newsArticleURL1);
                // Adds news article 1's image to the image div
                var displayNewsImage1 = $(".first-news-img");
                displayNewsImage1.attr('src', newsImg1);
                // Adds new article 1's title to title div
                var newsArticleTitle1 = $(".first-news-article");
                newsArticleTitle1.text(movieNewsTitle1);
                // Adds new article 1's description to preview div
                var newsArticleDescription1 = $(".first-news-description");
                newsArticleDescription1.text(movieNewsDescription1);

                // Variables to pull news article 2's URL, image, title, and descritption.
                var newsArticleURL2 = response.articles[1].url;
                var newsImg2 = response.articles[1].urlToImage;
                var movieNewsTitle2 = response.articles[1].title;
                var movieNewsDescription2 = response.articles[1].description;
                // Adds news article 2's URL location to the links
                var newsRow2 = $(".news2");
                newsRow2.attr('href',newsArticleURL2);
                // Adds news article 2's image to the image div
                var displayNewsImage2 = $(".second-news-img");
                displayNewsImage2.attr('src', newsImg2);
                // Adds new article 2's title to title div
                var newsArticleTitle2 = $(".second-news-article");
                newsArticleTitle2.text(movieNewsTitle2);
                // Adds new article 2's description to preview div
                var newsArticleDescription2 = $(".second-news-description");
                newsArticleDescription2.text(movieNewsDescription2);

                // Variables to pull news article 3's URL, image, title, and descritption.
                var newsArticleURL3 = response.articles[2].url;
                var newsImg3 = response.articles[2].urlToImage;
                var movieNewsTitle3 = response.articles[2].title;
                var movieNewsDescription3 = response.articles[2].description;
                // Adds news article 3's URL location to the links
                var newsRow3 = $(".news3");
                newsRow3.attr('href',newsArticleURL3);
                // Adds news article 3's image to the image div
                var displayNewsImage3 = $(".third-news-img");
                displayNewsImage3.attr('src', newsImg3);
                // Adds new article 3's title to title div
                var newsArticleTitle3 = $(".third-news-article");
                newsArticleTitle3.text(movieNewsTitle3);
                // Adds new article 3's description to preview div
                var newsArticleDescription3 = $(".third-news-description");
                newsArticleDescription3.text(movieNewsDescription3);

                // Variables to pull news article 4's URL, image, title, and descritption.
                var newsArticleURL4 = response.articles[3].url;
                var newsImg4 = response.articles[3].urlToImage;
                var movieNewsTitle4 = response.articles[3].title;
                var movieNewsDescription4 = response.articles[3].description;
                // Adds news article 4's URL location to the links
                var newsRow4 = $(".news4");
                newsRow4.attr('href',newsArticleURL4);
                // Adds news article 4's image to the image div
                var displayNewsImage4 = $(".fourth-news-img");
                displayNewsImage4.attr('src', newsImg4);
                // Adds new article 4's title to title div
                var newsArticleTitle4 = $(".fourth-news-article");
                newsArticleTitle4.text(movieNewsTitle4);
                // Adds new article 4's description to preview div
                var newsArticleDescription4 = $(".fourth-news-description");
                newsArticleDescription4.text(movieNewsDescription4);
            })
    });

  }
