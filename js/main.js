"use strict"
$(document).ready(function(){
	$('.item_title').click(function(event){
		if($('.slaider_item').hasClass('one')){
			$('.item_title').not($(this)).removeClass('active');
			$('.item_body-slaider').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
})
 $('.item_filter').click(function(event){
    $('.item_filter').removeClass('active');
    $(this).addClass('active');
});
 $(document).ready(function(){

 	$('.slaider').slick({
 			arrows:false,
			dots:true,
			responsive: [
            {
                breakpoint: 1160,
                settings: {
                 dots:false,
            }
                
           }
    ]
		});
 	});
 const rabotnik = document.querySelectorAll('.employee__item');

 rabotnik.forEach( function (item) {
 	item.addEventListener('mouseover',function(){
 		console.log('лох');
 		item.classList.add('elem');
 	})
 });

