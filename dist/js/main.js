/* author Darkywa https://github.com/darkywa/ */
$(document).ready(function(){

	/* top search focus */
	$('.form-search').on('focus blur', '#top-search', function(){
		let elem = $( this ),
			form = $( '.form-search' );
		setTimeout(function() {
		    form.toggleClass( "form-search__focus", elem.is( ":focus" ) );
		  }, 0 );
	});

	/* write us */
	$('.getWriteUs').on('click', function(){
		$('.write-us').fadeIn(200);
	})

	$('.closeWriteUs, .write-us__overlay').on('click', function(){
		$('.write-us').fadeOut(200);
	});

	/* tabs */
	let linksParent = $('.service__navigation-list');
	let links = linksParent.find('.service__navigation-item');
	let items = $('.service__content-item');
	links.eq(0).add(items.eq(0)).addClass('active');
	linksParent.on('click','.service__navigation-item',function(){
		let t = $(this);
		let i = t.index();
		t.add(items.eq(i))
			.addClass('active')
			.siblings().removeClass('active');
	});

	/* pseudo slider */
	$('.slider__navigation a').on('click', function(){
		let i = $(this).index();
		$('.slider__navigation a, .slider__item').removeClass('active');
		$(this).addClass('active');
		$('.slider__item:eq('+i+')').addClass('active');
	});

});