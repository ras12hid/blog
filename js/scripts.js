//Sliders
$(document).ready(function(){
  $('.slider').slick({
  	dots:true,
  	autoplay: true,
  	autoplaSpeed: 4000
  });

    $('.why__slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true
  });  



  let controlsInfo = document.querySelectorAll('.why__slider .slick-dots li');
  for (var i = 0; i < controlsInfo.length; i++) {
    let itemText = controlsInfo[i].innerText;
    controlsInfo[i].innerText = itemText + '/7';
  }
});


// Scroll to form 
let form = $('.form');

$(document).ready(function() {
  $('.scroll').click(function(e) {
    e.preventDefault();
   
    $("html,body").animate({scrollTop: $(form).offset().top}, 1000);
    return false;
  });
});


// timer

//timer

const hour = document.querySelectorAll('.timer__num--hours');
const minute = document.querySelectorAll('.timer__num--minutes');
const second = document.querySelectorAll('.timer__num--seconds');

let time = new Date();
let next = new Date(60 * 60 * 24 * 1000 + time.getTime());
next.setHours(0, 0,0,0,);
let realtime = next - new Date();

function timeRender(el, data) {
  for (var i = 0; i < el.length; i++) {
    el[i].innerHTML = data > 9 ? data : '0' + data;
  }
}


let timer = setInterval( ()=> {
  realtime = next - new Date();
  const hours =  Math.floor(((realtime / 1000 /60 /60) % 24));
  const minutes = Math.floor(((realtime / 1000  /60) % 60));
  const seconds = Math.floor(((realtime / 1000) % 60));
  timeRender(hour, hours);
  timeRender(minute, minutes);
  timeRender(second, seconds);
}, 1000);

