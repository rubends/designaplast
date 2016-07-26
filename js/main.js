$(document).ready(function() {
    $('#fullpage').fullpage({
		scrollOverflow: true,
		anchors: ['home', 'references', 'about', 'albums', 'contact'],
		menu: '#main-menu',
		afterLoad: function(anchorLink, index){
			if(anchorLink == 'extra'){
				//need white menu
				$('#dewaplast-menu').addClass('inverse');
			} else {
				$('#dewaplast-menu').removeClass('inverse');
			}
		},
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 3){
				//need white menu
				$('#dewaplast-menu').addClass('inverse');
			} else {
				$('#dewaplast-menu').removeClass('inverse');
			}
		}
	});

	$('button#next-slide').click(function(){
		$('#fullpage').fullpage.moveSectionDown();
	});

	$('#albumsMenu').css('visibility','hidden');
	$('.album').hide();
	$('.albumImage').click(function() {
	  $('#albumOverview').fadeOut(500);
	  $("#"+$(this).data('album')).fadeIn(1000);
	  $(".twentytwenty-container").twentytwenty();
	  $('#albumsMenu').css('visibility','visible');
	  $("#albumsMenu .nav").find(".activeAlbum").removeClass("activeAlbum");
	  $("#albumsMenu a[data-album="+$(this).data('album')+"]").addClass("activeAlbum");
	});
	$('#albumsMenu .nav-link').click(function() {
		$('.album').fadeOut(500);
		$("#"+$(this).data('album')).fadeIn(500);
		$(".twentytwenty-container").twentytwenty();
	});
	$('#albumsTitle').click(function() {
		$('.album').fadeOut(500,function(){
			$('#albumOverview').fadeIn(500);
		});
		$('#albumsMenu').css('visibility','hidden');
	});
	$("#albumsMenu a").on("click", function(){
	   $("#albumsMenu .nav").find(".activeAlbum").removeClass("activeAlbum");
	   $(this).addClass("activeAlbum");
	});


});
