$(document).ready(function(){


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDNLV8nEiHGle0AeKXrvoCbcpLxZjLSCng",
        authDomain: "iheartmovie-e6ca6.firebaseapp.com",
        databaseURL: "https://iheartmovie-e6ca6.firebaseio.com",
        projectId: "iheartmovie-e6ca6",
        storageBucket: "iheartmovie-e6ca6.appspot.com",
        messagingSenderId: "847005601179"
    };
    firebase.initializeApp(config);
    var database = firebase.database();


    $('#demo-carousel').carousel();
    //set time for auto (otherwise remove this part)
    setInterval(function(){
        $("#demo-carousel").carousel('next');
    },2000);

    $('.thing').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});


