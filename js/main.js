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
	  $('#albumOverview').hide();
	  $('#albumsMenu').css('visibility','visible');
	  $("#"+$(this).data('album')).show();
	});
	$('#albumsMenu .nav-link').click(function() {
		$("#"+$(this).data('album')).show();
	});

});
