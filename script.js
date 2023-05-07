$(document).ready(function() {
    $('.dropdown').mouseenter(function() {
        $('.sublinks').stop(false, true).hide();

        var submenu = $(this).parent().next();
        console.log(submenu);

        submenu.css({
            position: 'absolute',
            top: $(this).offset().top + $(this).height() + 'px',
            left: $(this).offset().left + 'px',
            zIndex: 1000
        });
		
        submenu.mouseleave(function(){
            $(this).slideDown(5000);
        });

		$('.dropdown').click(function() {
			$(this).next('.sublinks').slideDown(500);
		  });
    });
});
