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

/************ DETALLE PRODUCTOS **********/
var detalleProductos = [
  {
    idProducto: 1001,
    nombreImg: 'torta_chocolate_fresa.jpg', 
    nombreCategoria: 'Torta húmeda',
    nombreProducto: 'Torta de leche de Óreo',
    descripcionProducto: 'Torta rica en su sabor, ha ganado el premio internacional, hecha con agua manantial',
    precioProducto: 60.25,
    cantidadProducto: 1,
  },
  {
    idProducto: 1002,
    nombreImg: 'galaxys10.jpg', 
    nombreCategoria: 'Samsung',
    nombreProducto: 'Samsung galaxy s10',
    descripcionProducto: '6 GB RAM + 128 gb almacenamiento + 5000 mah + full hd',
    precioProducto: 1599,
    cantidadProducto: 1,
  },
  {
    idProducto: 1003,
    nombreImg: 'nars.jpg', 
    nombreCategoria: 'Base',
    nombreProducto: 'Nars',
    descripcionProducto: 'Base de maquillaje de larga duracion con alta cobertura',
    precioProducto: 100,
    cantidadProducto: 1,
  },
  {
    idProducto: 1004,
    nombreImg: 'muñeco.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Juguetes',
    descripcionProducto: 'muñeca con chupon que llora y habla y remeda',
    precioProducto: 45.75,
    cantidadProducto: 1,
  },
];

function construirCarritoDetalleProductos() {
  var htmlDetalleProductos = '';
  
  detalleProductos.forEach(function(producto) {
    var htmlProducto = `
      <tr class="carrito_detalle_producto">
        <td width="50%">
          <img src="../../../assets/img/${producto.nombreImg}" />
          <div class="carrito_detalle_producto_titulo">
            <h3>${producto.nombreCategoria}</h3>
            <h1>${producto.nombreProducto}</h1>
          </div>
        </td>
        
        <td width="15%" class="texto-derecha">S/. ${producto.precioProducto}</td>
        
        <td width="15%" class="texto-centrado">
          <div class="carrito_detalle_producto_contador">        
            <div class="carrito_detalle_producto_contador_agregar">
              <i class="bi bi-dash-lg"></i>
            </div>
          
            <div class="carrito_detalle_producto_contador_unidades">
              <span><b>${producto.cantidadProducto}</b> un</span>
            </div>
            
            <div class="carrito_detalle_producto_contador_agregar">
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </td>
        
        <td width="15%" class="texto-derecha">S/. ${producto.cantidadProducto * producto.precioProducto}</td>
        
        <td width="5%" class="texto-centrado">
          <i class="bi bi-trash"></i>
        </td>
      </tr>
    `;
    
    htmlDetalleProductos = htmlDetalleProductos + htmlProducto;
  });
  
  document.querySelector('.carrito_detalle_productos table tbody').innerHTML = htmlDetalleProductos;
}

construirCarritoDetalleProductos();
/*****************************************/


