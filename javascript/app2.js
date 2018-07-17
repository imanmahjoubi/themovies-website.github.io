//Redirects user to movie-details.html
//this is the placeholder ID I used for now
//$('#submitSearch').click(function() {  
//    location.href = "movie-details.html";

    //Run the function when a user click the search button
    //Pull the value from the submit button
    var movie = "Clockwork Orange"
    //$('movieSearch').val();

    // Main query url; returns info on movie searched
    var queryURL = 'https://api.themoviedb.org/3/search/movie?api_key=0ff882446ecc7061a134cf692047205b&query='+ movie;

    // This is the base URL for images from the API
    var imageBaseURL = 'https://image.tmdb.org/t/p/original';

    // Creating an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

    var movieTitle = response.results[0].original_title;
    $(document).prop('title', movieTitle);
    $('h3').append(movieTitle + ':');

    var moviePlot = response.results[0].overview;
    $("#plot").append(moviePlot);
    var movieDate = response.results[0].release_date;
    $('#releaseDate').append(movieDate);


    var posterImg = response.results[0].poster_path;

    var fullImageUrl1 = imageBaseURL + posterImg;
    console.log(fullImageUrl1);
    var carouselSlide = $('.first-carousel-image');
    carouselSlide.attr('src', fullImageUrl1);

    //other movie titles
    var possibleTitles = [response.results[1].original_title, response.results[2].original_title , 
    response.results[3].original_title, response.results[4].original_title];
    for (var i = 1 ; i < possibleTitles.length ; i++){
    $('#otherMovies').append(possibleTitles[i] + ', ');
    };

    //info from OMDB
    var queryURL2 = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
     var actors = response.Actors;
     var director = response.Director;
     var writers = response.Writer;
     var genre = response.Genre;

     $("#director").append(director);
     $('#actors').append(actors);
     $('#writers').append(writers);
     $('#genre').append(genre);

    });

    //This is the news articles, currently working 
    var queryURL = "https://newsapi.org/v2/everything?q=" + movie + "&sortBy=popularity&apiKey=215fb6a8533441b8b97d0c058a476321";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                // News article 1. URL, image, title, and descritption.
                var newsArticleURL1 = response.articles[0].url;
                var newsImg1 = response.articles[0].urlToImage;
                var movieNewsTitle1 = response.articles[0].title;
                var movieNewsDescription1 = response.articles[0].description;
                var newsRow1 = $(".news1");
                newsRow1.attr('href',newsArticleURL1);
                var displayNewsImage1 = $(".first-news-img");
                displayNewsImage1.attr('src', newsImg1);
                var newsArticleTitle1 = $(".first-news-article");
                newsArticleTitle1.text(movieNewsTitle1);
                var newsArticleDescription1 = $(".first-news-description");
                newsArticleDescription1.text(movieNewsDescription1);

                // News article 2. Image, title, and descritption.
                var newsArticleURL2 = response.articles[1].url;
                var newsImg2 = response.articles[1].urlToImage;
                var movieNewsTitle2 = response.articles[1].title;
                var movieNewsDescription2 = response.articles[1].description;
                var newsRow2 = $(".news2");
                newsRow2.attr('href',newsArticleURL2);
                var displayNewsImage2 = $(".second-news-img");
                displayNewsImage2.attr('src', newsImg2);
                var newsArticleTitle2 = $(".second-news-article");
                newsArticleTitle2.text(movieNewsTitle2);
                var newsArticleDescription2 = $(".second-news-description");
                newsArticleDescription2.text(movieNewsDescription2);

                // News article 3. Image, title, and descritption.
                var newsArticleURL3 = response.articles[2].url;
                var newsImg3 = response.articles[2].urlToImage;
                var movieNewsTitle3 = response.articles[2].title;
                var movieNewsDescription3 = response.articles[2].description;
                var newsRow3 = $(".news3");
                newsRow3.attr('href',newsArticleURL3);
                var displayNewsImage3 = $(".third-news-img");
                displayNewsImage3.attr('src', newsImg3);
                var newsArticleTitle3 = $(".third-news-article");
                newsArticleTitle3.text(movieNewsTitle3);
                var newsArticleDescription3 = $(".third-news-description");
                newsArticleDescription3.text(movieNewsDescription3);

                // News article 4. Image, title, and descritption.
                var newsArticleURL4 = response.articles[3].url;
                var newsImg4 = response.articles[3].urlToImage;
                var movieNewsTitle4 = response.articles[3].title;
                var movieNewsDescription4 = response.articles[3].description;
                var newsRow4 = $(".news4");
                newsRow4.attr('href',newsArticleURL4);
                var displayNewsImage4 = $(".fourth-news-img");
                displayNewsImage4.attr('src', newsImg4);
                var newsArticleTitle4 = $(".fourth-news-article");
                newsArticleTitle4.text(movieNewsTitle4);
                var newsArticleDescription4 = $(".fourth-news-description");
                newsArticleDescription4.text(movieNewsDescription4);
            })

        

  });

//});