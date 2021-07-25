var pedidos = [];
var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;
var chatPopupVisible = false;
var modalCategoriaVisible = false;
var timeoutChat;

function sumarYAlertarValores(campo1, campo2) {
  var sumaDeValores = campo1 + campo2;
  alert(sumaDeValores);
  return sumaDeValores;
}

function multiplicarYAlertarValores(campo1, campo2) {
  var productoValores = campo1 * campo2;
  confirm(productoValores);
  return productoValores;
}
                                       
function sumarYMultiplicarYAlertarValores(campo1, campo2, campo3) {
  var sumaDeValores = sumarYAlertarValores(campo1, campo2);
  var productoValores = multiplicarYAlertarValores(sumaDeValores, campo3);
  return productoValores;
}

function realizarPedido() {
  var nombrePostre = document.querySelector('[name="nombre_postre"]').value;
  var cantidad = document.querySelector('[name="cantidad"]').value;
  var correo = document.querySelector('[name="correo"]').value;
  var departamento = document.querySelector('[name="departamento"]').value;
  var provincia = document.querySelector('[name="provincia"]').value;
  var distrito = document.querySelector('[name="distrito"]').value;
  var comentario = document.querySelector('[name="comentario"]').value;
  
  var pedido = {
    nombrePostre: nombrePostre,
    cantidad: cantidad,
    correo: correo,
    departamento: departamento,
    provincia: provincia,
    distrito: distrito,
    comentario: comentario,
  };
  
  console.log(pedido);
}

function agregarPedido() {
  var nombrePostre = document.querySelector('[name="nombre_postre"]').value;
  var cantidad = document.querySelector('[name="cantidad"]').value;
  var correo = document.querySelector('[name="correo"]').value;
  var departamento = document.querySelector('[name="departamento"]').value;
  var provincia = document.querySelector('[name="provincia"]').value;
  var distrito = document.querySelector('[name="distrito"]').value;
  var comentario = document.querySelector('[name="comentario"]').value;
  
  var pedido = {
    nombrePostre: nombrePostre,
    cantidad: cantidad,
    correo: correo,
    departamento: departamento,
    provincia: provincia,
    distrito: distrito,
    comentario: comentario,
  };
  
  pedidos.push(pedido);
  
  console.log(pedidos);
}

function construirOferta(desProducto, desRegalo) {
  var cantProductos = document.querySelector('[name="cantidad"]').value;
  var cantRegalos = cantProductos / 2;
  
  var desOferta = `Compra ${cantProductos} ${desProducto} y te ganas ${cantRegalos} ${desRegalo}`;
  
  document.querySelector('.oferta').innerHTML = desOferta;
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

/*********************CATEGORIAS**************/
function mostrarOcultarModalCategoria(nombreImagen) {
  if(modalCategoriaVisible === false){
    document.querySelector('.modal_categorias img').setAttribute('src', '../../../assets/img/' + nombreImagen);
    document.querySelector('.modal_categorias').style.display = "block";
    modalCategoriaVisible = true;
  } else {
    document.querySelector('.modal_categorias').style.display = "none";
    modalCategoriaVisible = false;
  }
}
/********************************************/

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
var maximoPorProducto = 5;
var productos = [
  // {
    // idProducto: 1001,
    // nombreImg: 'torta_selva_negra.jpg', 
    // nombreCategoria: 'Torta húmeda',
    // nombreProducto: 'Torta de leche de Óreo1',
    // precioProducto: 60.25,
    // cantidadProducto: 3,
  // }, 
  // {
    // idProducto: 1002,
    // nombreImg: 'torta_selva_negra.jpg',
    // nombreCategoria: 'Torta húmeda2',
    // nombreProducto: 'Torta de leche de Óreo2',
    // precioProducto: 70.50,
    // cantidadProducto: 4,
  // }, 
  // {
    // idProducto: 1003,
    // nombreImg: 'torta_selva_negra.jpg',
    // nombreCategoria: 'Torta húmeda3',
    // nombreProducto: 'Torta de leche de Óreo3',
    // precioProducto: 45.50,
    // cantidadProducto: 2,
  // }
];

function construirProductosEnCarrito() {
  var htmlProductos = '';
  var totalPrecio = 0;
  var cantidadProductos = 0;
  
  productos.forEach(function(producto) {
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
  document.querySelector('.header_notificacion').innerHTML = cantidadProductos;
  document.querySelector('.popup_carrito .popup_header b').innerHTML = cantidadProductos;
}

function removeItemInProduct(idProducto) {
  productos.forEach(function(producto) {
    if(producto.idProducto === idProducto && producto.cantidadProducto >= 2) {
      producto.cantidadProducto = producto.cantidadProducto - 1;
    }
  });
  
  construirProductosEnCarrito();
}

function addItemInProduct(idProducto) {
  productos.forEach(function(producto) {
    if(producto.idProducto === idProducto && producto.cantidadProducto < maximoPorProducto) {
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

/***** TARJETAS PRODUCTOS **********/
var productosTarjeta = [
  {
    idProducto: 1001,
    nombreImg: 'piano.jpg', 
    nombreCategoria: '0-2',
    nombreProducto: 'Juguetes',
    descripcionProducto: 'Piano para bebes de deferentes colores para un mejor aprendizaje',
    precioProducto: 50.00,
  },
  {
    idProducto: 1002,
    nombreImg: 'tortuga.jpg', 
    nombreCategoria: '0-2',
    nombreProducto: 'Juguetes',
    descripcionProducto: 'Totuga musical con canciones en ingles y español',
    precioProducto: 40.25,
  },
  {
    idProducto: 1003,
    nombreImg: 'coche.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Coche',
    descripcionProducto: 'coche para niñas con diferentes diseños',
    precioProducto: 80.25,
  },
  {
    idProducto: 1005,
    nombreImg: 'muñeco.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Juguetes',
    descripcionProducto: 'muñeca con chupon que llora y habla y remeda',
    precioProducto:  45.75,
  },
  {
    idProducto: 1007,
    nombreImg: 'caballo.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Caballito',
    descripcionProducto: 'Caballo para montar y también es musical',
    precioProducto: 90.75,
  },
  {
    idProducto: 1009,
    nombreImg: 'carro.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Carrito',
    descripcionProducto: 'Aprenderás a dar tus primeros pasitos jugando',
    precioProducto: 65.45,
  },
  {
    idProducto: 1011,
    nombreImg: 'dinosaurios.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'Dino',
    descripcionProducto: 'Jalaras a un carrito de dino divertido',
    precioProducto: 80.75,
  },
  {
    idProducto: 1012,
    nombreImg: 'figuras.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'figuras',
    descripcionProducto: 'juago dinamicos pra niños y niñas',
    precioProducto: 25.80,
  },
  {
    idProducto: 1004,
    nombreImg: 'payaso.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'payasitos',
    descripcionProducto: 'payasitos de madera para armar y elegir',
    precioProducto: 30.40,
  },
  {
    idProducto: 1006,
    nombreImg: 'pelotas.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'pelotas',
    descripcionProducto: 'pelotas de juguete muy modernas y coloridas',
    precioProducto: 15.75,
  },
  {
    idProducto: 1008,
    nombreImg: 'cuadro.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'cuadritos',
    descripcionProducto: 'cuadritos de madera de colores para armar',
    precioProducto: 55.75
,
  },
  {
    idProducto: 1010,
    nombreImg: 'lonchera.jpg', 
    nombreCategoria: '2-4',
    nombreProducto: 'lonchera',
    descripcionProducto: 'lonchera de madera para llevar tus juguetes',
    precioProducto: 65.75,
  },
];

function construirProductosEnTarjetas() {
  var htmlTarjetas = '';

  productosTarjeta.forEach(function(producto) {
    var htmlTarjeta = `
      <div class="tarjeta2 col-xl-3 col-lg-4 col-md-6 col-sm-12">             
        <div class="tarjeta2_header">         
          <img src="../../../assets/img/${producto.nombreImg}">
        </div>
        <div class="tarjeta2_body">      
          <span>${producto.nombreCategoria}</span><br>
          <span><b>${producto.nombreProducto}</b></span>
          <p>${producto.descripcionProducto}</p>
          <span class="tarjeta2_body_precio">S/. ${producto.precioProducto}</span>
        </div>
        
        <div class="tarjeta2_footer">
          <button type="button">AGREGAR</button>
        </div>
      </div>
    `;

    htmlTarjetas = htmlTarjetas + htmlTarjeta;
  });

  document.querySelector('.tarjetas').innerHTML = htmlTarjetas;
}

construirProductosEnTarjetas();
/***********************************/