//Navbar toogle button
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

//top scroll button

$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $('#scroll_btn').css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('#scroll_btn').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('#scroll_btn').click(function(){
      $('html').animate({scrollTop:0}, 100);
    });
  });

const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
    reverse: true,
    max: 10,
    speed: 300,
    scale: 1,
    reset: true,
    perspective: 600,
    transition: true,
});



// ========================== text type animation code

var typed = new Typed(".auto-type", {
  strings: ["Hetul Suthar", "Web Designer", "Web Developer"],
  typeSpeed: 150,
  backSpeed:150,
  loop: true
});

