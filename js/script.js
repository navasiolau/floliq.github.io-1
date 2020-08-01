$(document).ready(function(){
    $('.toggler').click(function (event) {
        $('.toggler,.nav').toggleClass("active");
        $('body').toggleClass("lock");
    });
});