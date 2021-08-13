 




document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "...turning boldest dreams into amazing realities", "...believe, think and perform differently","...be better every day, in every way"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the slider animation
  StartTextAnimation(0);
});
$('.slide').hiSlide();
// smooth scrolling 

$('a[href*="#"]').on('click',function(e){

  e.preventDefault();

  $('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,

  },
    500, 
    'linear'
  );

});
//Partner slider section
function handleMarquee(){
  const marquee = document.querySelectorAll('.marquee');
  let speed = 6;
  let lastScrollPos = 0;
  let timer;

  marquee.forEach(function(el){
    // stop animation on mouseenter
    mouseEntered = false;
    document.querySelector('.inner').addEventListener('mouseenter', function() {
      mouseEntered = true;
    })
    document.querySelector('.inner').addEventListener('mouseleave', function() {
      mouseEntered = false
    })

    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const  elWidth = content.offsetWidth;
    
    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);
    
    let progress = 1;
    function loop(){
      if (mouseEntered === false) {progress = progress-speed;} 
      if (progress <= elWidth*-1) {progress=0;}
      container.style.transform = 'translateX(' + progress + 'px)';
      window.requestAnimationFrame(loop);
    }
    loop();
  });
  
  function handleSpeedClear(){
    speed = 6;
  }
};

handleMarquee();