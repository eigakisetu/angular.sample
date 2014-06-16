$(function(){

	imgChange();
	menuChange ();

	$(window).resize(function() {
		imgChange();
		menuChange ();
	});

	function imgChange (){
		var wid = $(window).width();
		if( wid < 767 ){
			$('.imgChange').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
			});
		} else {
			$('.imgChange').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
			});
		}
	}

	$('#smp_menu').click(function(){
		$("header ul").slideToggle();
	});

	function menuChange (){
		var wid = $(window).width();

		if( wid < 767 ){
			$("header ul").css('display','none');
			console.log(wid)
		}else {
			$("header ul").css('display','block');
		}
	}

	/*page-top*/
	$('.pageScroll a').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	$('#btn01').click(function(){
		console.log($('.errorMessage').length)
		console.log($('.ng-hide').length)
		if($('.errorMessage').length > $('.ng-hide').length){
			 alert("未入力、もしくは入力間違いの必須項目があります。")
			 return false
		} else {
			$('#confirm,#bg').css('display','block')
			$('body,html').animate({
				scrollTop: 411
			}, 500);
			return false;
		}
	})

	$('#back,#bg').click(function(){
		$('#confirm,#bg').fadeOut(400)
	})

	$('#bg').height($('body').height())
});



