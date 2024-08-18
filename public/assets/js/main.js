$(function() {
	init();
	navbar();
	link_page();
	// custome_scrollbar();
	skrollr.init({});

	var progress = false;
	window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: false,
            barHeight: 0,
            minimumTime: 3000,
            fadeOutTime: 500,
            onProgress : function(data) {
            	if(progress === false){
            		$("#qLoverlay").html(
            			'<section id="loading-page">' +
							'<div class="container-fluid main-box">' +
								'<div class="row box-content">' +
									'<div class="col-md-12 field-loading-page">' +
										'<div class="cloud-loading component-1"></div>' +
										'<div class="cloud-loading component-2"></div>' +
										'<div class="content">' +
											'<h1>Wilujeng Rawuh</h1>' +
											'<h1>Ing Saloka</h1>' +
											'<div class="dragon-component">' +
												'<p>Yuk Ikuti Aku!</p>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</section>'
        			);

        			progress = true;
            	}
         		
         		if(data > 75){
         			$("#qLoverlay").css("background", "none");
         		}
            },

        });
    });
});

var clickX, clickY;

function init() {
	var clicked = false;

	// $('.maps-container img').on({
	//     'mousemove': function(e) {
	//     	clicked && updateScroll(e, clickX, clickY);
	//     	// console.log(e);
	//     },

	//     'mousedown': function(e) {
	//     	clickX = e.pageX;
	//     	clickY = e.pageY;
	//     	clicked = true;
	//     },

	//     'mouseup': function() {
	//     	clicked = false;
	//     },
	// });
}

function updateScroll(e) {
	// e.preventDefault();
	// $('.maps-container').scrollTop($('.maps-container').scrollTop() + (clickY - e.pageY));
	// $('.maps-container').css('cursor', 'grabbing');
	// $('.maps-container').scrollLeft($('.maps-container').scrollLeft() + (clickX - e.pageX));
}

function navbar() {	

	$('#headingOne button').on('click', function() {
		let condition = $('#headingOne .btn-link').attr('aria-expanded');

		if (condition == 'false') {
			$('#headingOne .btn-link .fa-chevron-right').addClass('active-fa-chevron-right');
			$('#headingOne .btn-link .fa-chevron-right').removeClass('non-active-fa-chevron-right');
		} else {
			$('#headingOne .btn-link .fa-chevron-right').removeClass('active-fa-chevron-right');
			$('#headingOne .btn-link .fa-chevron-right').addClass('non-active-fa-chevron-right');
		}
	});

	$('#headingTwo button').on('click', function() {
		let condition = $('#headingTwo .btn-link').attr('aria-expanded');

		if (condition == 'false') {
			$('#headingTwo .btn-link .fa-chevron-right').addClass('active-fa-chevron-right');
			$('#headingTwo .btn-link .fa-chevron-right').removeClass('non-active-fa-chevron-right');
		} else {
			$('#headingTwo .btn-link .fa-chevron-right').removeClass('active-fa-chevron-right');
			$('#headingTwo .btn-link .fa-chevron-right').addClass('non-active-fa-chevron-right');
		}
	});

	$('.close-button').on('click', function() {
		$('#popup-menu .main-box').removeClass('active-menu-popup');
		$('#popup-menu .main-box').addClass('active-close-menu-popup');
		$('#popup-menu').fadeOut(1500)
		// $('#popup-menu').addClass('display-none');
		// alert('ok')
	});

	$('#menu-bar').on('click', function() {
		$('#popup-menu').removeClass('display-none');
		$('#popup-menu').addClass('display-block').fadeIn();
		$('#popup-menu .main-box').removeClass('active-close-menu-popup');
		$('#popup-menu .main-box').addClass('active-menu-popup');

		// $('#menu-popup-new').css('display','block');
		// $('#menu-popup-new .box-content').addClass('add-tr-left');
	});

	$(document).on('keydown', function(event) {
	   if (event.key === 'Escape') {
			$('#popup-menu').removeClass('display-none');
			$('#popup-menu').addClass('display-block').fadeIn();
			$('#popup-menu .main-box').removeClass('active-close-menu-popup');
			$('#popup-menu .main-box').addClass('active-menu-popup');
	   }

	   return;
	});
}

function link_page() {
	$('.logo-content').on('click', function() {
		window.location.href = 'index.php';
	});

	$('#login').on('click', function() {
		window.location.href = 'login.php';
	});

	//  Ticket Page
		$('#reguler-ticket').on('click', function() {
			window.location.href = 'ticket-2.php' + '#reguler';
		})

		$('#annual-ticket').on('click', function() {
			window.location.href = 'ticket-2.php' + '#annual';
		})

		$('#group-ticket').on('click', function() {
			window.location.href = 'ticket-2.php' + '#group';
		})
	//	End Of Ticket Page
}