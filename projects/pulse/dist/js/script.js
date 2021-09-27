/* $(document).ready(function(){
    $('.slider_images').slick({
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        responsive: [
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
  }); */
  var slider = tns({
    container: '.slider_images',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });
  document.querySelector('.prev').addEventListener('click', function(){
      slider.goTo('prev');
  })
  document.querySelector('.next').addEventListener('click', function(){
    slider.goTo('next');
})

let btns = document.querySelector('.catalog_types');
let btnArray = document.querySelectorAll('.catalog_type');
let content = document.querySelectorAll('.catalog_list');

const changeClass = el => {
    for(let i = 0; i < btnArray.length; i++){
        btnArray[i].classList.remove('active');
    }
    el.classList.add('active');
}
btnArray.forEach((element) => {
    element.addEventListener('click', e => {
    const currentBtn = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currentBtn){
            content[i].classList.add('active');
        }
    }
})
})
