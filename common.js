$(function(){
    $('.right a').on('click',function(){
        $('.popup').css('display','block');
    });
    $('.popup a').on('click',function(){
        $('.popup').css('display','none');
    });
    $('.burger').on('click',function(){
        $('nav a').css('display','block');
    });
})