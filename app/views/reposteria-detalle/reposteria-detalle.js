var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;

function colapsarExpandirMenu() {  
  if(menuColapsado === true) {
    document.querySelector('.nav_menu').classList.remove('colapsado');
    document.querySelector('.nav_backdrop').style.display = 'block';
    menuColapsado = false;
  } else {
    document.querySelector('.nav_menu').classList.add('colapsado');
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

/************* POPUP *********************/
function mostrarOcultarPopup(selectorPopup) {
  var popupDisplay = document.querySelector(selectorPopup).style.display;

  if(popupDisplay === 'inline-block') {
    document.querySelector(`${selectorPopup}`).style.display = 'none';
  } else {
    document.querySelector(`${selectorPopup}`).style.display = 'inline-block';
  }
}
/*****************************************/

/************** MAIN *********************/
var idProducto;
var producto;

function obtenerInformacionProducto() {
  location.search.substring(1).split('&').forEach(function(parametro) {
    var atributo = parametro.split('=');
    var nombreAtributo = atributo[0];
    var valorAtributo = atributo[1];
    
    if(nombreAtributo === 'idProducto') {
      idProducto = valorAtributo;
    }
  });
  
  // Aquí se llamaría al backend para obtener la información del producto en base a su idProducto
  
  producto = {
    idProducto: 1001,
    nombreImg: 'torta_chocolate_fresa.jpg', 
    nombreCategoria: 'Torta húmeda',
    nombreProducto: 'Torta de leche de Óreo',
    descripcionProducto: 'Torta rica en su sabor, ha ganado el premio internacional, hecha con agua manantial',
    precioProducto: 60.25,
    cantidadProducto: 0,
  };
}

obtenerInformacionProducto();
/*****************************************/

/*************** TABS ********************/
var numeroTabSeleccionado = 1;

function mostrarTab(numeroTab) {
  document.querySelector(`.tabs .tabs_header .tab:nth-child(${numeroTab})`).classList.add('tab--seleccionado');
  document.querySelector(`.tabs .tabs_header .tab:nth-child(${numeroTabSeleccionado})`).classList.remove('tab--seleccionado');
  
  document.querySelector(`.tabs .tabs_body .tab:nth-child(${numeroTab})`).classList.add('tab--seleccionado');
  document.querySelector(`.tabs .tabs_body .tab:nth-child(${numeroTabSeleccionado})`).classList.remove('tab--seleccionado');
  
  numeroTabSeleccionado = numeroTab;
}

function calcularAnchoTab() {
  var tabs = document.querySelectorAll('.tabs .tabs_header .tab');
  var cantidadTabs = tabs.length;
  var anchoTab = 100/cantidadTabs;
  
  tabs.forEach(function(tab) {
    tab.style.width = `calc(${anchoTab}% - ${cantidadTabs}px)`;
  });
}

calcularAnchoTab();
/****************************************/