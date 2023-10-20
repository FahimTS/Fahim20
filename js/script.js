/*===================Header Sticky Image==================*/
window.addEventListener('scroll', function(){
    let header = this.document.querySelector('.top-menu');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});
/*===================Menu Bar==================*/
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar_nav");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    

/*===================Menu Bar Scrolling Link==================*/

const allNavLinnksContainer = document.querySelectorAll(".navbar_menu");
let linkMenu = document.querySelectorAll('section');

[...allNavLinnksContainer].forEach((navLinksContainer) => {
    [...navLinksContainer.querySelectorAll("ul li a")].forEach((link) => {
        link.addEventListener("click", () => {
            [...navLinksContainer.querySelectorAll("ul li a")]
                .filter((el) => el.classList.contains("active"))
                .forEach((el) => el.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
/*===================Slider Image==================*/
setInterval(() => {
    if(document.getElementsByClassName("slider_img")[0].classList.contains("active-slider")){
        document.getElementsByClassName("slider_img")[1].classList.add("active-slider");
        document.getElementsByClassName("slider_img")[0].classList.remove('active-slider');

    }else if(document.getElementsByClassName('slider_img')[1].classList.contains('active-slider')){
        document.getElementsByClassName('slider_img')[0].classList.add('active-slider');
        document.getElementsByClassName('slider_img')[1].classList.remove('active-slider');
    }
}, 6000);

/*===================Auto Typed Image==================*/
var typed = new Typed(".auto-type", {
    strings: ["I'm Fahim Hossen.", "I'm a Freelancer.", "I'm a Web Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

/*=================== Tabs Image Card Item ==================*/
const tabs = document.querySelectorAll('.tabs_btn');
const all_content = document.querySelectorAll('.beautiful_town');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        all_content.forEach(beautiful_town => {
            beautiful_town.classList.remove('active');
        })
        all_content[index].classList.add('active');
    });

})
 
/*=================== Scroll Up Top Button ==================*/
$(document).ready( function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('.scrollUp').fadeIn();
      }else{
        $('.scrollUp').fadeOut();
      }
    });
  
    $('.scrollUp').click(function(){
      $('html, body').animate({scrollTop : 0}, 800);
    });
  });