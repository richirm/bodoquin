var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;
var posicionBannerActual = 1;
var intervaloBanner;
var timeoutBanner;
var elementoCarousel = document.querySelector('.carousel_banners');
var chatPopupVisible = false;
var ofertaHoyVisible = true; 
var toastDuracion = 8 * 1000; 
var timeoutToasts = [];
var timeoutChat;

function ocultarOfertaHoy() {
  if(ofertaHoyVisible === true) {
    document.querySelector('.oferta-hoy').style.display = "none";
  }
}

function colapsarExpandirMenu() {  
  if(menuColapsado === true) {
    document.querySelector('nav').classList.remove('colapsado');
    document.querySelector('.nav_backdrop').style.display = 'block';
    menuColapsado = false;
  } else {
    document.querySelector('nav').classList.add('colapsado');
    document.querySelector('.nav_backdrop').style.display = 'none';
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

/*********** CAROUSEL *****************/
function mostrarBanner(posicionBannerSeleccionado) {
  clearInterval(intervaloBanner);
  elementoCarousel.classList.add('carousel_banners--transicion');
  
  document.querySelector(`.carousel_pasos_acceso:nth-child(${posicionBannerActual})`).classList.remove('seleccionado');
  
  var desplazamientoCarousel = (posicionBannerSeleccionado - 1) * -100;
  elementoCarousel.style.left = `${desplazamientoCarousel}%`;
  posicionBannerActual = posicionBannerSeleccionado;
  
  document.querySelector(`.carousel_pasos_acceso:nth-child(${posicionBannerSeleccionado})`).classList.add('seleccionado');
  
  clearTimeout(timeoutBanner);
  
  timeoutBanner = setTimeout(function() {
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
/*****************************************/

/**************** CHAT *******************/
function mostrarOcultarChat() {
  clearTimeout(timeoutChat);
  
  if(chatPopupVisible === true) { 
    document.querySelector('.chat_backdrop').style.display = "none";
    document.querySelector('.chat_popup').classList.remove('chat_popup_in');    
    document.querySelector('.chat_popup').classList.add('chat_popup_out');     
    document.querySelector('.chat_fab').classList.remove('chat_fab_in');
    chatPopupVisible = false;
    
    timeoutChat = setTimeout(() => {
      document.querySelector('.chat_popup').style.height = 0; 
    }, 0.3 * 1000);
  } else {   
    document.querySelector('.chat_popup').style.height = 'auto'; 
    document.querySelector('.chat_backdrop').style.display = "block";
    document.querySelector('.chat_popup').classList.add('chat_popup_in');    
    document.querySelector('.chat_popup').classList.remove('chat_popup_out');  
    document.querySelector('.chat_fab').classList.add('chat_fab_in');
    chatPopupVisible = true;
  }
}

/*****************************************/

/**************** TOAST *******************/
function mostrarToast(numeroToast) {
  document.querySelector(`.toast:nth-child(${numeroToast})`).style.display = 'block'; 
  
  clearTimeout(timeoutToasts[numeroToast - 1]);
  
  var timeoutToast = setTimeout(function() {
    cerrarToast(numeroToast);
  }, toastDuracion);
  
  timeoutToasts[numeroToast - 1] = timeoutToast;
}

function cerrarToast(numeroToast) {
  document.querySelector(`.toast:nth-child(${numeroToast})`).style.display = 'none';
  
  clearTimeout(timeoutToasts[numeroToast - 1]);
}

/*****************************************/


