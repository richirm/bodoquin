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

/*********** POPUP - CARRITO COMPRA *******/
var productos = [
  {
    idProducto: 1001,
    nombreImg: 'torta_selva_negra.jpg', 
    nombreCategoria: 'Torta húmeda',
    nombreProducto: 'Torta de leche de Óreo1',
    precioProducto: 60.25,
    cantidadProducto: 3,
  }, 
  {
    idProducto: 1002,
    nombreImg: 'torta_selva_negra.jpg',
    nombreCategoria: 'Torta húmeda2',
    nombreProducto: 'Torta de leche de Óreo2',
    precioProducto: 70.50,
    cantidadProducto: 4,
  }, 
  {
    idProducto: 1003,
    nombreImg: 'torta_selva_negra.jpg',
    nombreCategoria: 'Torta húmeda3',
    nombreProducto: 'Torta de leche de Óreo3',
    precioProducto: 45.50,
    cantidadProducto: 2,
  }
];

function construirProductosEnCarrito() {
  var htmlProductos = '';
  var totalPrecio = 0;
  
  productos.forEach(function(producto) {
    totalPrecio = totalPrecio + (producto.precioProducto * producto.cantidadProducto);
    
    var htmlProducto = `
      <div class="carrito_producto">
        <div class="carrito_producto_img">
          <img src="../../../assets/img/${producto.nombreImg}">
        </div>
        <div class="carrito_producto_detalle">
          <h2>${producto.nombreCategoria}</h2>
          <h1>${producto.nombreProducto}</h1>
          <span class="carrito_producto_total">S/. ${producto.precioProducto}</span>
          
          <div class="carrito_producto_contador">
            <div class="carrito_producto_contador_agrega">
              <span><i class="bi bi-dash-lg" onclick="removeItemInProduct(${producto.idProducto})"></i></span>
              <span><i class="bi bi-plus-lg" onclick="addItemInProduct(${producto.idProducto})"></i></span>
            </div>
            <div class="carrito_producto_contador_cantidad">${producto.cantidadProducto}</div>
          </div>
        </div>
        <i class="bi bi-x icono-accion" onclick="deleteProduct(${producto.idProducto})"></i>
      </div> 
    `;
    
    htmlProductos = htmlProductos + htmlProducto;
  });
  
  document.querySelector('.carrito_productos').innerHTML = htmlProductos;
  document.querySelector('.carrito_total_monto').innerHTML = `S/. ${totalPrecio}`;
  document.querySelector('.header_notificacion').innerHTML = productos.length;
}

function removeItemInProduct(idProducto) {
  productos.forEach(function(producto) {
    if(producto.idProducto === idProducto && producto.cantidadProducto > 0) {
      producto.cantidadProducto = producto.cantidadProducto - 1;
    }
  });
  
  construirProductosEnCarrito();
}

function addItemInProduct(idProducto) {
  productos.forEach(function(producto) {
    if(producto.idProducto === idProducto) {
      producto.cantidadProducto = producto.cantidadProducto + 1;
    }
  });
  
  construirProductosEnCarrito();
}

function deleteProduct(idProducto) { 
  var index = productos.findIndex(function(producto) {
    return producto.idProducto === idProducto;
  });
  
  productos.splice(index, 1);
  construirProductosEnCarrito();
}

construirProductosEnCarrito();
/*****************************************/





