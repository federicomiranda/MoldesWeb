/* DESLIZAMIENTO */

$(function(){
  $("#in").on("click", function(){
    $("html, body").animate({scrollTop: $("#inicio").offset().top}, 500);
  })
});

$(function(){
  $("#nos").on("click", function(){
    $("html, body").animate({scrollTop: $("#nosotros").offset().top}, 500);
  })
});

$(function(){
  $("#cer").on("click", function(){
    $("html, body").animate({scrollTop: $("#cervezas").offset().top}, 500);
  })
});

$(function(){
  $("#ver").on("click", function(){
    $("html, body").animate({scrollTop: $("#inicio").offset().top}, 500);
  })
});

$(function(){
  $("#co").on("click", function(){
    $("html, body").animate({scrollTop: $("#contacto").offset().top}, 500);
  })
})


/* SLIDER */

$(document).on('ready', function(){
	$('.cervezas-slider').slick({
		autoplay : true,
		autoplaySpeed: 2000,
		mobileFirst: true,
		dots: true
	});
});

/* FACEBOOK O INSTAGRAM */

var lista = document.getElementById('lista-contacto');
var li = document.createElement('li');
var span = document.createElement('span');
var vinculo = document.createElement('a');
	lista.appendChild(li);
	li.appendChild(span);
	li.appendChild(vinculo);

if(window.innerWidth > 1024){
	span.className = 'fa fa-facebook-official';

	vinculo.href = 'https://www.facebook.com/cervezamoldes/';
	vinculo.innerHTML = 'MOLDES Craft Beer';
	vinculo.target = '_blank';
	vinculo.style.marginLeft = '5px';

} else{
	span.className = 'fa fa-instagram';
	vinculo.href = 'https://www.instagram.com/cervezamoldes/';
	vinculo.innerHTML = 'cervezamoldes';
	vinculo.target = '_blank';
	vinculo.style.marginLeft = '5px';
}

/* MAYOR DE EDAD */

$(btnSi).click(function(){
	$(fondo).fadeOut('slow', function() {
		$(this).remove();
	});
});

/* MENOR DE EDAD */

$(btnNo).click(function(){
	$(btnSi).remove();
	$(this).remove();
	pregunta.innerHTML = 'No tenes edad suficiente <br> para ingresar al sitio :(';
	pregunta.style.lineHeight = '40px';
});

/* VALIDAR FORMULARIO */

var inputs = document.querySelectorAll( '[pattern]' );
for(var i = 0; i < inputs.length; i++){
	inputs[i].onblur = function( ){
		if( this.validity.patternMismatch){
			this.setCustomValidity( this.dataset.msj );
			this.style.border = '1px solid red';
		}else{
			this.setCustomValidity('');
			this.style.border = 'none';
			this.style.borderBottom = '1px solid #8e8e8e';
		}
	}
}
