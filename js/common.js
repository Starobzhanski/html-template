$(function() {

$owlMain = $('.owl-carousel-main');

$owlMain.owlCarousel({
    nav:false,
    mouseDrag: false,
    touchDrag: false,
    items: 1,
    smartSpeed: 400,
		dots: true,
	 	animateOut: 'fadeOut',
		onTranslate : animation
});

if($('body .isHome'))
	animation();

$tr = $('button.owl-dot');
var l = $tr.length;
for(var i = 0; i<l; i++)
	$tr.eq(i).text("0"+i);

$(".btn .link-underline").on('click', fadeOut);
$(".btn-back").on('click', fadeIn);

$("#toggle").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
	});

var elements = document.querySelectorAll( '.intense' );
	Intense( elements );

});




function fadeIn(event){

	TweenMax.to('.last-screen',1,{
		delay: 0.2,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.to('.third-screen',2,{
    y: '10vh',
    ease: Expo.easeInOut,
  });

	TweenMax.to('.second-screen',2,{
		delay: 0.2,
    y: "10vh",
    ease: Power2.easeInOut,
  });

  TweenMax.to('.first-screen',2,{
   	delay: 0.4,
    y: '0vh',
    ease: Expo.easeInOut
  });

  TweenMax.to('.owl-dots',1,{
  	delay: 2,
		opacity: 1
	});

	TweenMax.to('.logo',1,{
		delay: 1,
		opacity: 1
	});

	TweenMax.to('.socials',1,{
		opacity: 1,
		delay: 1
	});

	//setTimeout(refresh,3000);
}

function fadeOut(event){

	TweenMax.to('.owl-dots',1,{
		opacity: 0
	});

	TweenMax.to('.logo',1,{
		opacity: 0
	});

	TweenMax.to('.socials',1,{
		opacity: 0
	});

	var $owlItem = $('.first-screen');
	TweenLite.to($owlItem, 2, {
		y: '-100vh'
		//opacity: 0
	});

	TweenMax.to('.second-screen',2,{
    y: '-110vh',
    //opacity: 0,
    ease: Power2.easeInOut,
    delay: 1
  });

	var $thirdScreen = $('.third-screen');
	console.log($thirdScreen.offset().top);
  
  TweenMax.to('.third-screen',2,{
   	delay: 1.4,
    y: '-110vh',
    ease: Expo.easeInOut
  });

	console.log($thirdScreen.offset().top);
  TweenMax.to('.last-screen',2,{
  	delay: 2,
    opacity: 1,
    ease: Expo.easeInOut,
  });
}

/*
function updateHeight(){`

	var $photo  = $('.owl-item .photo');
		var photoHeight = ($photo.offset().top*-1) + $(window).height();
		//var photoHeight2 = $photo $photo.offset().top;
		console.log("photo = ", $photo.offset().top);
		console.log("window = ",  $(window).height());
		console.log("result = ", photoHeight);

		return photoHeight *-1;
}
*/

function animation(event){

		var $photo  = $('.owl-item .photo');
		var $text  = $('.owl-item .carousel-text');
		//var photoHeight = ($photo.position().top * -1) + $(window).height();
		if($('.owl-item .photo').length)
			if($photo.offset().top === 0){
					TweenLite.from($photo, 1,{
						y : "-110vh",
						delay: 0.2
					});
			
				TweenLite.from($text, 1,{
					y: '110vh'
				});
			}

}