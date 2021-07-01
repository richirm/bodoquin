var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;
var posicionBannerActual = 1;

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
  document.querySelector(`.carousel_banner:nth-child(${posicionBannerActual})`).style.display = 'none';
  document.querySelector(`.carousel_banner:nth-child(${posicionBannerSeleccionado})`).style.display = 'block';
  posicionBannerActual = posicionBannerSeleccionado;
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




