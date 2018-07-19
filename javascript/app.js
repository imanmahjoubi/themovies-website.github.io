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
            // Limits results to only top 4 news images
            for (var i=0; i<4; i++){
                var newsURL = response.articles[i].url;
                var newsIMG = response.articles[i].urlToImage;
                var newsTitle = response.articles[i].title;
                var newsDescription = response.articles[i].description;

                newsURLCards = $(".news-url-" + (i+1) );
                newsURLCards.attr('href', newsURL);

                newsIMGCards = $(".news-img-" + (i+1) );
                newsIMGCards.attr('src', newsIMG);

                newsTitleCards = $(".news-title-" + (i+1) );
                newsTitleCards.text(newsTitle);

                newsDescriptionCards = $(".news-description-" + (i+1) );
                newsDescriptionCards.text(newsDescription);
                console.log('desc',newsDescription);
            }
        })
    });

}
