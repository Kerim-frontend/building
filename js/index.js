$('.slider__wrapper').slick({
    dots: true,
    arrows: false,

});
$(function(){
    $('.header a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn - 100 }, 1000);
    });
});

let  btn = document.querySelector('.menu__btn');
let list = document.querySelector('.nav__list');
btn.addEventListener('click', function () {
    this.classList.toggle('active')
    list.classList.toggle('active')
});

list.addEventListener('click', function () {
    this.classList.remove('active')
    btn.classList.remove('active')
});

window.onscroll = function fix(){
    let header = document.querySelector('.header');

    if(window.pageYOffset > 270){
        header.classList.add('header-fix')
        btn.classList.add('btn-fixed')
    } else{
        header.classList.remove('header-fix')
        btn.classList.remove('btn-fixed')
     
    }
}