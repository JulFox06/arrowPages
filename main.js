$(function() {
	var tab = ['un', 'deux', 'trois', 'quatre']; // Noms des classes principales
	
	var nb = 0; // Valeur de nb : un=0, deux=1, trois=2, quatre=3
	var sub = 0; // Prend la valeur 0 (haut) ou 1 (bas)

  $('.scroll-left').click (function() {
    $('html, body').animate({scrollLeft: $('.'+tab[nb-1]).offset().left }, 'slow');
    nb--;
  });
  $('.scroll-right').click (function() {
    $('html, body').animate({scrollLeft: $('.'+tab[nb+1]).offset().left }, 'slow');
    nb++;
  });
  $('.scroll-top').click (function() {
  	$('html, body').animate({scrollTop: $('.'+tab[nb]).offset().top }, 'slow');
		sub = 0;
  });
  $('.scroll-down').click (function() {
  	$('html, body').animate({scrollTop: $('.sub-'+tab[nb]).offset().top }, 'slow');
		sub = 1;
  });


  $('.scroll').click (function() {
  	// Si on est dans une partie
  	if (sub == 0) {
  		if (nb == 0) {
  			$('.scroll-left').prop('disabled', true);
  			$('.scroll-right').prop('disabled', false);
  			$('.scroll-down').prop('disabled', true);
				$('.scroll-top').prop('disabled', true);

				// Animation logo et icone présente sur la premiere et deuxieme page
				$( ".logo" ).animate({
			    width: "200px",
			    left: "50%",
			    marginLeft: "-100px"
			  }, 700, function() {
			  });
  		}
  		else if (nb == 1) {
  			$('.scroll-left').prop('disabled', false);
  			$('.scroll-right').prop('disabled', false);
  			$('.scroll-down').prop('disabled', false);
  			$('.scroll-top').prop('disabled', true);

  			// Animation logo et icone présente sur la premiere et deuxieme page
  			$( ".logo" ).animate({
			    width: "80px",
			    left: "50%",
			    marginLeft: "-40px"
			  }, 700, function() {
			  });
  		}
  		else if (nb == 2) {
  			$('.scroll-left').prop('disabled', false);
  			$('.scroll-right').prop('disabled', false);
  			$('.scroll-down').prop('disabled', false);
  			$('.scroll-top').prop('disabled', true);
  		}
  		else {
  			$('.scroll-left').prop('disabled', false);
  			$('.scroll-right').prop('disabled', true);
  			$('.scroll-down').prop('disabled', true);
  			$('.scroll-top').prop('disabled', true);
  		}
  	}
  	// Si on est dans une sous partie
  	else {
			$('.scroll-left').prop('disabled', true);
			$('.scroll-right').prop('disabled', true);
			$('.scroll-down').prop('disabled', true);
			$('.scroll-top').prop('disabled', false);
  	}
	});

  // Initialisation des fleches
	$('.scroll-left').prop('disabled', true);
	$('.scroll-right').prop('disabled', false);
	$('.scroll-down').prop('disabled', true);
	$('.scroll-top').prop('disabled', true);

	// Initialisation de la première page
	$('html, body').animate({scrollTop: $('.un').offset().left }, 'slow');
	$('html, body').animate({scrollLeft: $('.un').offset().left }, 'slow');
	$( ".logo" ).animate({
    width: "200px",
    left: "50%",
    marginLeft: "-100px"
  }, 900, function() {});
  $( ".img-1-2" ).animate({
    right: "-200px"
  }, 1100, function() {});
});