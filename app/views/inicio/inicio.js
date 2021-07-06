var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;
var posicionBannerActual = 1;
var intervaloBanner;
var elementoCarousel = document.querySelector('.carousel_banners');

function colapsarExpandirMenu() {  
  if(menuColapsado === true) {
    document.querySelector('nav').classList.remove('colapsado');
    menuColapsado = false;
  } else {
    document.querySelector('nav').classList.add('colapsado');
    menuColapsado = true;
  }
}

function detectarScroll() {
  if(window.pageYOffset === 0) {
    document.querySelector('body').classList.remove('con-scroll');
  } else {
    document.querySelector('body').classList.add('con-scroll');
  }
}

function mostrarOcultarUsuarioPopup() {
  if(usuarioPopupVisible === true) {
    document.querySelector('.header_acciones_usuario_backdrop').style.display = "none";
    document.querySelector('.header_acciones_usuario_flecha').style.display = "none";
    document.querySelector('.header_acciones_usuario_popup').style.display = "none";
    usuarioPopupVisible = false;
  } else {
    document.querySelector('.header_acciones_usuario_backdrop').style.display = "block";
    document.querySelector('.header_acciones_usuario_flecha').style.display = "block";
    document.querySelector('.header_acciones_usuario_popup').style.display = "block";
    usuarioPopupVisible = true;
  }
}

function mostrarOcultarModalInicioSesion() {
  if(modalInicioSesionVisible === true) {
    document.querySelector('.modal_inicio_sesion').style.display = "none";
    modalInicioSesionVisible = false;
  } else {
    document.querySelector('.modal_inicio_sesion').style.display = "block";
    modalInicioSesionVisible = true;
  }
}

function mostrarOcultarModalRegistrarse() {
  if(modalRegistrarseVisible === true) {
    document.querySelector('.modal_registrarse').style.display = "none";
    modalRegistrarseVisible = false;
  } else {
    document.querySelector('.modal_registrarse').style.display = "block";
    modalRegistrarseVisible = true;
  }
}

function mostrarOcultarModalCerrarSesion() {
  if(modalCerrarSesionVisible === true) {
    document.querySelector('.modal_cerrar_sesion').style.display = "none";
    modalCerrarSesionVisible = false;
  } else {
    document.querySelector('.modal_cerrar_sesion').style.display = "block";
    modalCerrarSesionVisible = true;
  }
}

function mostrarBanner(posicionBannerSeleccionado) {
  clearInterval(intervaloBanner);
  elementoCarousel.classList.add('carousel_banners--transicion');
  
  var desplazamientoCarousel = (posicionBannerSeleccionado - 1) * -100;
  elementoCarousel.style.left = `${desplazamientoCarousel}%`;
  posicionBannerActual = posicionBannerSeleccionado;
  
  setTimeout(function() {
    elementoCarousel.classList.remove('carousel_banners--transicion');
    contruirJobBanner();
  }, 0.5 * 1000);
}

function mostrarSiguienteBanner() {
  if(posicionBannerActual === 4) {
    mostrarBanner(1);
  } else {
    mostrarBanner(posicionBannerActual + 1);
  }
}

function mostrarAnteriorBanner() {
  if(posicionBannerActual === 1) {
    mostrarBanner(4);
  } else {
    mostrarBanner(posicionBannerActual - 1);
  }
}

function contruirJobBanner() {
  intervaloBanner = setInterval(mostrarSiguienteBanner, 3 * 1000);
}

function iniciarDesplazamientoCarousel(evento) {
  clearInterval(intervaloBanner);
  
  var posicionInicial = evento.clientX;
  
  function moverCarousel(evento) {
    var posicionFinal = evento.clientX;
    var desplazamientoCursor = posicionFinal - posicionInicial;
    var desplazamientoCarousel = (posicionBannerActual - 1) * -100;
    elementoCarousel.style.left = `calc(${desplazamientoCarousel}% + ${desplazamientoCursor}px)`;
  }
  
  function finalizarDesplazamientoCarousel(evento) {
    var posicionFinal = evento.clientX;
    var desplazamientoCursor = posicionFinal - posicionInicial;
    
    if(desplazamientoCursor > 300) {
      mostrarAnteriorBanner();
    } else if(desplazamientoCursor < -300) {
      mostrarSiguienteBanner();
    } else {
      mostrarBanner(posicionBannerActual);
    }
    
    elementoCarousel.removeEventListener('mousemove', moverCarousel);
    elementoCarousel.removeEventListener('mouseup', finalizarDesplazamientoCarousel);
    elementoCarousel.removeEventListener('mouseleave', finalizarDesplazamientoCarousel);
  }
  
  elementoCarousel.addEventListener('mousemove', moverCarousel);
  elementoCarousel.addEventListener('mouseup', finalizarDesplazamientoCarousel);
  elementoCarousel.addEventListener('mouseleave', finalizarDesplazamientoCarousel);
}

elementoCarousel.addEventListener('dragstart', function(evento) {
  evento.preventDefault();
});

elementoCarousel.addEventListener('mousedown', iniciarDesplazamientoCarousel);

contruirJobBanner();


