$(document).ready(function(){

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.table_box').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box_recent').hide().eq($(this).index()).fadeIn(150);
	})
	
	$(".popup").magnificPopup({type:"inline"});
	
	$('.image_popup').magnificPopup({type: 'image'});
	
	$('#scrollbar1').tinyscrollbar();
	
	$('#scrollbar2').tinyscrollbar();
	
	$('#scrollbar3').tinyscrollbar();
	
	$('select').styler({ selectSearch: true });
	
	function footerToBottom() {
		var browserHeight = $(window).height(),
			footerOuterHeight = $('#footer').outerHeight(true),
			mainHeightMarginPaddingBorder = $('div.container').outerHeight(true) - $('div.container').height();
		$('div.container').css({'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,});
		};
		footerToBottom();
		$(window).resize(function () {
		footerToBottom();
	});	
	
	 var accordion = $(".accordion");
		if(accordion.length){
		  accordion.each(function(){
			var all_panels = $(this).find('.ac_inner').hide();
			var all_titles = $(this).find('.ac_title');
			$(this).find('.ac_inner.active').slideDown();
	
			all_titles.on("click", function() {
			  var acc_title = $(this);
			  var acc_inner =  acc_title.next();
	
			  if(!acc_inner.hasClass('active')){
				 all_panels.removeClass('active').slideUp();
				 acc_inner.addClass('active').slideDown();
				 all_titles.removeClass('active');
				 acc_title.addClass('active');
			  } else {
				all_panels.removeClass('active').slideUp();
				all_titles.removeClass('active');
			  }
			});
		  });
		}
		
});


$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});