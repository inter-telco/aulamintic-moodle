/**
 *
 * @package   theme_mb2nl
 * @copyright 2017 - 2018 Mariusz Boloz (http://marbol2.com)
 * @license   Commercial https://themeforest.net/licenses
 *
 */


jQuery(document).ready(function($){




	/*-----------------------------------------------------------*/
	/*	OAuth2 buttons
	/*-----------------------------------------------------------*/

	if ($('body').hasClass('pagelayout-login'))
	{
		$('#login').append($('.potentialidps'));
	}


	$('.potentialidp a').each(function(){

		var linkTitle = $(this).attr('title');

		//toLowerCase()
		$(this).attr('class', '');
		$(this).addClass('btn btn-' + linkTitle.toLowerCase());


	});






	/*-----------------------------------------------------------*/
	/*	Sho/hide sidebars
	/*-----------------------------------------------------------*/


	var use_cookie_sidebars = document.cookie.indexOf('mb2nl_sidebars') < 0;
	var use_cookie_sidebars2 = document.cookie.indexOf('mb2nl_sidebars2') < 0;
	var sidebarBtn = $('.theme-hide-sidebar');
	var sidebarBtnShowText = sidebarBtn.data('showtext');
	var sidebarBtnHideText = sidebarBtn.data('hidetext');


	if (!use_cookie_sidebars && !$('body').hasClass('editing'))
	{

		$('body').addClass('hide-sidebars');
		sidebarBtn.text(sidebarBtnShowText);

	}


	if (!use_cookie_sidebars2 || $('body').hasClass('editing'))
	{

		$('body').removeClass('hide-sidebars');
		sidebarBtn.text(sidebarBtnHideText);

	}


	sidebarBtn.click(function(e){


		if (!$('body').hasClass('editing'))
		{


			if($(this).hasClass('mode2'))
			{

				setCookie('mb2nl_sidebars',1,0);

				if ($('body').hasClass('hide-sidebars'))
				{
					setCookie('mb2nl_sidebars2',1,3);
					$('body').removeClass('hide-sidebars');
					$(this).text(sidebarBtnHideText);
				}
				else
				{
					$(this).text(sidebarBtnShowText);
					$('body').addClass('hide-sidebars');
					setCookie('mb2nl_sidebars2',1,0);
				}

			}
			else
			{
				setCookie('mb2nl_sidebars2',1,0);

				if ($('body').hasClass('hide-sidebars'))
				{
					setCookie('mb2nl_sidebars',1,0);
					$('body').removeClass('hide-sidebars');
					$(this).text(sidebarBtnHideText);
				}
				else
				{
					$(this).text(sidebarBtnShowText);
					$('body').addClass('hide-sidebars');
					setCookie('mb2nl_sidebars',1,3);
				}

			}



		}


		e.preventDefault();

	});



	// Set cookies
	function setCookie(name,value,days)
	{
		if (days>0)
		{
			var data = new Date();
			data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = '; expires=' + data.toGMTString();
		} else
		{
			var expires = '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
		}

		document.cookie = name + '=' + value + expires + '; path=/';
	}




	/*-----------------------------------------------------------*/
	/*	Old bootstrap grid fix
	/*-----------------------------------------------------------*/
	$('.row-fluid').each(function(){

		$(this).addClass('row');
		var colDiv = $(this).find('>div');
		var i = 0;

		colDiv.each(function(){

			for (i=0; i<=12; i++)
			{
				if (colDiv.hasClass('span' + i))
				{
					colDiv.removeClass('span' + i);
					colDiv.addClass('col-sm-' + i);
				}
			}

		});

	});




	/*-----------------------------------------------------------*/
	/*	Shortcode carousel
	/*-----------------------------------------------------------*/
	$('.theme-slider,.mb2-pb-content-list.owl-carousel').each(function(){
		slider = $(this);
		theme_slider(slider);
	});


	function theme_slider (slider)
	{

		// Slider options
		isItems = slider.data('items');
		isMargin = slider.data('margin');
		isLoop = slider.data('loop') == 0 ? false : true;
		isNav = slider.data('nav') == 0 ? false : true;
		isDots = slider.data('dots') == 0 ? false : true;
		isAutoplay = slider.data('autoplay') == 0 ? false : true;
		isPauseTime = slider.data('pausetime');
		isAnimTime = slider.data('animtime');


		var is2res = isItems > 2 ? 2 : isItems;
		var is3res = isItems > 3 ? 3 : isItems;
		var is4res = isItems > 5 ? 5 : isItems;
		isRes =  {0:{items:1},600: {items:is2res},780: {items:is3res},1000:{items:is4res}};

		var is_rtl = $('body').hasClass('dir-rtl');
		var isRtl = false;
		var isNavText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];

		if (is_rtl)
		{
			isRtl = true;
			isNavText = ['<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>'];
		}

		slider.owlCarousel({

			items: isItems,
			margin: isMargin,
			loop: isLoop,
			nav: isNav,
			rtl: isRtl,
			dots: isDots,
			autoplay: isAutoplay,
			responsive: isRes,
			autoplayHoverPause: true,
			autoplayTimeout: isPauseTime,
			smartSpeed: isAnimTime,
			navText: isNavText

		});

	}








	/*-----------------------------------------------------------*/
	/*	Scroll to top
	/*-----------------------------------------------------------*/
	var scrollLink = $('.theme-scrolltt');
	var scrollSpeed = scrollLink.data('scrollspeed');

	$(window).on('scroll', function(){

		if ($(this).scrollTop() > 500)
		{
			scrollLink.addClass('active');
		}
		else
		{
			scrollLink.removeClass('active');
		}

	});


	scrollLink.click(function(e){

		e.preventDefault();
		$('html, body').stop().animate({scrollTop : 0}, scrollSpeed);

	});









	/*-----------------------------------------------------------*/
	/*	Theme settings accordion
	/*-----------------------------------------------------------*/

	if ($('body').hasClass('path-admin-setting'))
	{

		$('.mb2tmpl-acc-title').each(function(){

			var heading = $(this);

			heading.click(function(e){

				$(this).toggleClass('active');
				$(this).parent().find('> div').slideToggle(150);

			});

		});

	}




	/*-----------------------------------------------------------*/
	/*	Remove cols and row attributes from textarea form field
	/*-----------------------------------------------------------*/
	$('table').wrap('<div class="theme-table-wrap"></div>');
	$('.generaltable, .forumheaderlist, table.userenrolment').addClass('table table-striped');
	//$('.forumheaderlist').addClass('table table-striped');
	$('table.collection').addClass('table table-bordered');
	$('table.preference-table').addClass('table table-bordered');
	$('table.rolecap').addClass('table table-bordered');
	$('#categoryquestions').addClass('table table-striped');


	theme_mb2nl_table_wrap_cls();
	$(window).on('resize', function(){
		theme_mb2nl_table_wrap_cls();
	});

	function theme_mb2nl_table_wrap_cls()
	{
		$('.theme-table-wrap').each(function(){

			// Check if table inside table wrap div is wider
			var table_el = $(this).find('>table');

			if (table_el.width() > $(this).width())
			{
				$(this).addClass('wider');
			}
			else
			{
				$(this).removeClass('wider');
			}
		});
	}






	/*-----------------------------------------------------------*/
	/*	Play video by click
	/*-----------------------------------------------------------*/

	$('.embed-video-bg').each(function(){

		var imageEl = $(this);
		var clickEl = imageEl.parent().find('>i');


		clickEl.on('click', function(e){

			var video = imageEl.parent().find('iframe');
			video.attr('src',imageEl.data('videourl'));
			$(this).fadeOut(350);
			imageEl.fadeOut(350);
			e.preventDefault();

		});

	});





	/*-----------------------------------------------------------*/
	/*	Add 'danger' class for bootstrap error alert
	/*-----------------------------------------------------------*/
	$('.alert-error').addClass('alert-danger');
	$('.box.notifyproblem').addClass('alert');
	$('.box.notifyproblem').addClass('alert-danger');
	$('.box.notifyproblem').removeClass('notifyproblem');





	/*-----------------------------------------------------------*/
	/*	Add active class for tob item
	/*-----------------------------------------------------------*/
	$('.nav-tabs .nav-link').each(function(){

		if ($(this).hasClass('active'))
		{
			$(this).parent().addClass('active');
		}
	});





	/*-----------------------------------------------------------*/
	/*	Show region name
	/*-----------------------------------------------------------*/
	$('.block-region').each(function(){

		var regionName = '<span class="region-name">' + $(this).data('blockregion') + '</span>';

		if ($('body').hasClass('editing'))
		{
			$(this).append(regionName);
		}

	});







	/*-----------------------------------------------------------*/
	/*	Main menu
	/*-----------------------------------------------------------*/
	$('.theme-ddmenu').each(function(){


		var menuList = $(this);
		var animType = menuList.data('animtype');
		var animSpeed = menuList.data('animspeed');
		var mobileArr = menuList.find('.mobile-arrow');


		function waitForSuperfish() {

			if (typeof menuList.superfish !== 'function')
			{
				setTimeout( waitForSuperfish, 100);
				return false;
			}

			return true;
		}

		var is_superfish = waitForSuperfish();


		if (is_superfish)
		{
			menuList.superfish({
				popUpSelector: 'ul',
				hoverClass: 'mb2ctm-hover',
				animation: animType == 2 ? {height:'show'} : {opacity:'show'},
				speed: animSpeed,
				speedOut: 'fast',
				cssArrows: false
			});
		}


		// Disable sf menu on small screens
		menuOnHover(menuList);
		$(window).on('resize',function(){
			menuOnHover(menuList);
		});




		// Open menu in mobile
		mobileArr.click(function(e){

			e.preventDefault();

			$(this).parent().siblings('ul').slideToggle(250);
			$(this).toggleClass('active');

		});




		function menuOnHover (list) {

			var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

			if (w<=768)
			{
				list.removeClass('sf-js-enabled');
				list.removeClass('desk-menu');
				list.addClass('mobile-menu');
			}
			else
			{
				list.addClass('sf-js-enabled');
				list.removeClass('mobile-menu');
				list.addClass('desk-menu');
				list.find('.mobile-arrow').removeClass('active');
				list.find('.mobile-arrow').parent().siblings('ul').hide();
			}

		}



	});








	/*-----------------------------------------------------------*/
	/*	Main menu - mobile menu
	/*-----------------------------------------------------------*/
	$(document).on('click', '.show-menu', function(e){

		e.preventDefault();
		var menuList = $(this).parent().parent().find('.theme-ddmenu');

		menuList.slideToggle(250);

	});






	/*-----------------------------------------------------------*/
	/*	Get username in sliding panel
	/*-----------------------------------------------------------*/

	var clonedUserName = $('.theme-loginform').find('.usertext');
	var userAvatar =  $('.theme-loginform').find('.welcome_userpicture')
	var userLink =  userAvatar.parent();

	userLink.append(clonedUserName);

	userLink.click(function(e){
		e.preventDefault();
	});






	/*-----------------------------------------------------------*/
	/*	Make fixed navigation
	/*-----------------------------------------------------------*/

	// Make fixed navigation
	setTimeout(function(){
		makeFixedNavigation();
	},10);

	$(window).scroll(function(){
		makeFixedNavigation();
	});


	function makeFixedNavigation()
	{

		// Define basic variables
		var win = $(window);
		var offsetEl = $('.sticky-nav-element-offset');


		// Fixed navigation element
		// Check if body has 'fixed-nav' class
		if (offsetEl.length !=0 && $('body').hasClass('sticky-nav'))
		{

			var fixedEl = $('#main-navigation');
			var fixedElWrap = fixedEl.parent();
			var elOffset = offsetEl.offset().top;
			var fixElHeight = fixedEl.outerHeight(true);


			// Find fixed element
			// If window scrollTp is the same as fixed element offset top
			// add fixed class to the fixed element
			if (win.scrollTop() > elOffset)
			{
				fixedEl.addClass('sticky-nav-element');
				offsetEl.css({'height':fixElHeight});
			}
			else
			{
				fixedEl.removeClass('sticky-nav-element');
				offsetEl.css({'height':0});
			}

		}
	}








	/*-----------------------------------------------------------*/
	/*	Init colorpicker
	/*-----------------------------------------------------------*/
	$('input.mb2color').each(function(){

		$(this).spectrum({
			showInput: true,
			showButtons: false,
			preferredFormat: 'rgb',
			allowEmpty: true,
			color: '',
			showAlpha: true
		});

	});



	/*-----------------------------------------------------------*/
	/*	Icon navigation
	/*-----------------------------------------------------------*/
	var iconNavHeight = $('#theme-iconnav').height();
	$('#theme-iconnav').css({'margin-top':Math.ceil((iconNavHeight/2)*-1)});

	$('#theme-iconnav li').each(function(){

		var linkEl = $(this).find('a');
		var textEl = $(this).find('span.iconnavtext');
		var isRtl = $('body').hasClass('dir-rtl');

		linkEl.hover(
			function(){

				if (isRtl)
				{
					textEl.stop().animate({'left':'100%'},300);
				}
				else
				{
					textEl.stop().animate({'right':'100%'},300);
				}

			},

			function(){

				if (isRtl)
				{
					textEl.stop().animate({'left':-500},150);
				}
				else
				{
					textEl.stop().animate({'right':-500},150);
				}

			}
		);

	});






	/*-----------------------------------------------------------*/
	/*	Page outer min height
	/*-----------------------------------------------------------*/

	setOuterHeight();


	$(window).on('resize',function(){

		setOuterHeight();

	});


	function setOuterHeight()
	{
		$('#page-outer').css({'min-height':$(window).height()});
	}








	/*-----------------------------------------------------------*/
	/*	Sliding panel
	/*-----------------------------------------------------------*/

	//$('.theme-loginform').show();
	//$('.theme-searchform').show();
	//$('.theme-links').show();

	$('.header-tools > a.header-tools-jslink').click(function(e){

		e.preventDefault();

		if ($(this).hasClass('tool-links'))
		{
			$('.theme-loginform').hide();
			$('.theme-searchform').hide();
			$('.theme-links').show();

			$('.tool-search').removeClass('active');
			$('.tool-login').removeClass('active');
		}
		else if ($(this).hasClass('tool-login'))
		{
			$('.theme-loginform').show();
			$('.theme-searchform').hide();
			$('.theme-links').hide();

			$('.tool-links').removeClass('active');
			$('.tool-search').removeClass('active');
		}
		else
		{
			$('.theme-loginform').hide();
			$('.theme-searchform').show();
			$('.theme-links').hide();

			$('.tool-links').removeClass('active');
			$('.tool-login').removeClass('active');
		}

		panelOpen();

		var panel = $('.sliding-panel');

		if (panel.hasClass('open') && $(this).hasClass('active'))
		{
			panelClose();
		}

		if (panel.hasClass('open'))
		{
			$(this).addClass('active');
		}

	});

	var oldW = $(window).width();

	panelMarginTop();
	$(window).on('resize', function(){

		if(oldW != $(window).width())
		{
			panelClose();
			panelMarginTop();
		}


		delete oldW;


	});


	function panelMarginTop()
	{

		var panel = $('.sliding-panel');
		var buttons = panel.find('btn');
		panel.css({'margin-top':Math.ceil((panel.height()+1)*-1)});

	}



	function panelOpen ()
	{

		var panel = $('.sliding-panel');


		if (panel.hasClass('closed'))
		{
			panelMarginTop();

			panel.stop().animate({'margin-top':0}, 350);
			panel.removeClass('closed');
			panel.addClass('open');
		}
	}


	function panelClose ()
	{

		var panel = $('.sliding-panel');


		if (panel.hasClass('open'))
		{

			panel.stop().animate({'margin-top':Math.ceil(($('.sliding-panel').height()+1)*-1)}, 350);
			panel.removeClass('open');
			panel.addClass('closed');
			$('.header-tools a').removeClass('active');

		}

	}



	function name_of_init_function(arr)
	{
		console.log(arr);
	}



});



(function($){$(window).on('load', function(){



	/*-----------------------------------------------------------*/
	/*	Loading screen
	/*-----------------------------------------------------------*/
	var loadingDiv = $('.loading-scr');

	setTimeout(function(){
		loadingDiv.fadeOut(150);
	}, loadingDiv.data('hideafter'));





})})(jQuery);
