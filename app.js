const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


$(document).ready(function (){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding:"0",
      });
});
