$(document).ready(function(){
  // весь ваш код
  //$('#foo').width(300);
  //console.log( $('#foo').width() );

 // $('.root__child').each(function(){
 // 	console.log( $(this).text() );
 // });

 //$('#foo').after('<br>Hello');

 //$('.root__child').on('click', function(){
 //	console.log( $(this).text() );
 //});

 $(document).on('click', '.root__child', function(){
 	console.log( $(this).text() );
 });

 $('#gallery-thumbs').owlCarousel({
 	items: 6,
 	center:true,
 	loop:true,
 	responsive: {
 		0: { items:2},
 		768: { items:4 },
 		1200: { items:6 }
 	}
 });
	$('#gallery-thumbs a').on('click', function(e){
		e.preventDefault();
		var mainImageUrl = $(this).attr('href');
		$('#gallery-main-img').attr('src', mainImageUrl);
	});

});
