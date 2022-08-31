$(document).ready(function(e){
    if($(document).width() <= 550){
        console.log($(document).width());
        $('.footer__contact-button').click(function(e){
            $(this).toggleClass('active').next().slideToggle(300);
        })
    }
    
})



