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



/*********** POPUP - CARRITO COMPRA *******/
var maximoPorProducto = 5;
var productosCarrito = [
  // {
    // idProducto: 1001,
    // nombreImg: 'torta_selva_negra.jpg', 
    // nombreCategoria: 'Torta húmeda',
    // nombreProducto: 'Torta de leche de Óreo1',
    // precioProducto: 60.25,
    // cantidadProducto: 3,
  // }
];

function construirProductosEnCarrito() {
  var htmlProductos = '';
  var totalPrecio = 0;
  var cantidadProductos = 0;
  
  productosCarrito.forEach(function(producto) {
    totalPrecio = totalPrecio + (producto.precioProducto * producto.cantidadProducto);
    cantidadProductos = cantidadProductos + producto.cantidadProducto;
    
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
              <span><i class="bi bi-dash-lg" onclick="removeItemInProduct(${producto.idProducto}, event)"></i></span>
              <span><i class="bi bi-plus-lg" onclick="addItemInProduct(${producto.idProducto}, event)"></i></span>
            </div>
            <div class="carrito_producto_contador_cantidad">${producto.cantidadProducto}</div>
          </div>
        </div>
        <i class="bi bi-x icono-accion" onclick="deleteProduct(${producto.idProducto}, event)"></i>
      </div> 
    `;
    
    htmlProductos = htmlProductos + htmlProducto;
  });
  
  document.querySelector('.carrito_productos').innerHTML = htmlProductos;
  document.querySelector('.carrito_total_monto').innerHTML = `S/. ${totalPrecio}`;
  document.querySelector('.header_notificacion').innerHTML = cantidadProductos;
  document.querySelector('.popup_carrito .popup_header b').innerHTML = cantidadProductos;
}

function removeItemInProduct(idProducto, evento) {
  evento.stopPropagation();
  
  productosCarrito.forEach(function(producto) {
    if(producto.idProducto === idProducto && producto.cantidadProducto >= 2) {
      producto.cantidadProducto = producto.cantidadProducto - 1;
    }
  });
  
  construirProductosEnCarrito();
  construirDetalleProducto();
}

function addItemInProduct(idProducto, evento) {
  evento.stopPropagation();
  
  productosCarrito.forEach(function(producto) {
    if(producto.idProducto === idProducto && producto.cantidadProducto < maximoPorProducto) {
      producto.cantidadProducto = producto.cantidadProducto + 1;
    }
  });
  
  construirProductosEnCarrito();
  construirDetalleProducto();
}

function deleteProduct(idProducto, evento) {
  evento.stopPropagation();
  
  var index = productosCarrito.findIndex(function(producto) {
    return producto.idProducto === idProducto;
  });
  
  productosCarrito[index].cantidadProducto = 0;
  productosCarrito.splice(index, 1);
  
  construirProductosEnCarrito();
  construirDetalleProducto();
}

construirProductosEnCarrito();
/*****************************************/

/****** MAIN - DETALLE DEL PRODUCTO ******/
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
    idProducto: 1008,
    nombreImg: 'sombrero.jpg', 
    nombreCategoria: 'Sombrero',
    nombreProducto: 'Sombrero moderno de playa',
    descripcionProducto: 'Lindo sombrero con excelentes acabados',
    precioProducto: 150,
    cantidadProducto: 1,
  };
  
  productosCarrito.push(producto);
  construirProductosEnCarrito();
  
  construirDetalleProducto();
}

obtenerInformacionProducto();

function construirDetalleProducto() {
  var elementoInfoProducto = document.querySelector('.producto-detalle-principal_informacion');
  elementoInfoProducto.querySelector('h3').innerHTML = producto.nombreCategoria;
  elementoInfoProducto.querySelector('h1').innerHTML = producto.nombreProducto;
  elementoInfoProducto.querySelector('p').innerHTML = producto.descripcionProducto;
  elementoInfoProducto.querySelector('.producto-detalle-principal_informacion_precio').innerHTML = `S/. ${producto.precioProducto}`;
  elementoInfoProducto.querySelector('.producto-detalle-principal_informacion_unidades span b').innerHTML = producto.cantidadProducto;
}

function quitarProducto() {
  removeItemInProduct(producto.idProducto, event);
  construirDetalleProducto();
}

function agregarProducto() {
  if(producto.cantidadProducto === 0) {
    productosCarrito.push(producto);
  }
  
  addItemInProduct(producto.idProducto, event);
  construirDetalleProducto();
}
/*****************************************/

/******* MAIN - ZOOM DEL PRODUCTO ********/
var elementoContenedorZoom = document.querySelector('.producto-detalle-principal_imagen--principal');
var elementoImagenZoom = document.querySelector('.producto-detalle-principal_imagen--principal img');

function obtenerMovimientoContenedorZoom(evento) {
  var desplazamientoContenedorX = evento.clientX - elementoContenedorZoom.offsetLeft;
  var porcentajeX = desplazamientoContenedorX/(elementoContenedorZoom.offsetWidth - 2);
  var desplazamientoImagenX = `${-1*elementoImagenZoom.offsetWidth*porcentajeX}px`;
  
  var desplazamientoContenedorY = evento.clientY - elementoContenedorZoom.offsetTop;
  var porcentajeY = desplazamientoContenedorY/(elementoContenedorZoom.offsetHeight - 2);
  var desplazamientoImagenY = `${-1*elementoImagenZoom.offsetHeight*porcentajeY}px`;
  
  elementoImagenZoom.style.transform = `translate(${desplazamientoImagenX}, ${desplazamientoImagenY})`;
  
  function cancelarMovimientoContenedorZoom() {
    elementoImagenZoom.style.transform = 'none';
    
    elementoContenedorZoom.removeEventListener('mouseleave', cancelarMovimientoContenedorZoom);
  }
  
  elementoContenedorZoom.addEventListener('mouseleave', cancelarMovimientoContenedorZoom);
}

elementoContenedorZoom.addEventListener('mousemove', obtenerMovimientoContenedorZoom);
/*****************************************/
