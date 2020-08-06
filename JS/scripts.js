var windowWidth= $(window).width();

$('#section1').mousemove(function(event){
  var moveX =(($(window).width() / 2) - event.pageX) * .1;
  var moveY =(($(window).height() / 2) - event.pageY) * .1;
  $('#style').css('margin-left', moveX + 'px');
  $('#style').css('margin-top', moveY + 'px');
})


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});






$(document).ready(function(){


  


 $('.text-nueces').mouseover(function(){
      $('#img-nueces').css({
        "opacity": 0
      })
  });
  $('.text-nueces').mouseout(function(){
    $('#img-nueces').css({
      "opacity": 1
    })
});


$('.text-cosmic').mouseover(function(){
  $('#img-cosmic').css({
    "opacity": 0
  })
});
$('.text-cosmic').mouseout(function(){
$('#img-cosmic').css({
  "opacity": 1
})
});


$('.text-bengala').mouseover(function(){
  $('#img-bengala').css({
    "opacity": 0
  })
});
$('.text-bengala').mouseout(function(){
$('#img-bengala').css({
  "opacity": 1
})
});





TweenMax.to('.c1', 3,{
  left: '50%',
  ease: Power4.easeInOut
})
TweenMax.to('.c1', .5,{
  delay: 2.5,
  opacity: 0,
  ease: Power4.easeInOut
})


TweenMax.to('.preloader1',2.5,{
  delay: 2.4,
  top: '-50%',
  opacity: 0,
  ease: Power4.easeInOut
})
TweenMax.to('.preloader2',2.5,{
  delay: 2.4,
  top: '100%',
  opacity: 0,
  ease: Power4.easeInOut
})


  TweenMax.to('.contenedor-p',2,{
    delay: 4,
    width: '100%',
    height: '100%',
    top: '50%',
    ease: Power4.easeInOut  
  });

  TweenMax.to('.nombre',2,{
    delay: 5,
    top: '-20px',
    opacity: 1,
    transform: 'rotate(0deg)',   
    ease: Power4.easeInOut  
  });
  TweenMax.to('.foto',2,{
    delay: 4.8,   
    opacity: 1,      
    ease: Power4.easeInOut  
  });
  TweenMax.to('.desarrollador',2,{
    delay: 5.5,
    top: '-20px',
    opacity: 1,   
    transform: 'rotate(0deg)',
    ease: Power4.easeInOut  
  });
  TweenMax.to('.front',2,{
    delay: 6,
    top: '-20px',
    opacity: 1,   
    transform: 'rotate(0deg)',
    ease: Power4.easeInOut  
  });

  TweenMax.to('.menu',2,{
    delay: 6.4,
    right: '7%',
    opacity: 1,
    ease: Power4.easeInOut  
  });
  TweenMax.to('.fixed-action-btn',2,{
    delay: 6.2,   
    opacity: 1,
    ease: Power4.easeInOut  
  });

  /**line** */
  

  TweenMax.to('body',1,{
      delay: 5.5,
      backgroundColor: 'white'

  });

  
  $('#aCerca, #aCerca1').click( function(){
    $('html, body').animate({
      scrollTop: $('#section2').offset().top
    }, 1000)
       
    });

   
    $('#proyectos, #proyectos1').click( function(){
      $('html, body').animate({
        scrollTop: $('#section4').offset().top
      },1000)
         
      });

     
      $('#contact, #contact1').click( function(){
        $('html, body').animate({
          scrollTop: $('#footer').offset().top
        },1000)
           
        });



        

  })

  $(document).ready(function(){
    $('.modal').modal();
  });
 

  


	
