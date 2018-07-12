$(document).ready(function(){
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

