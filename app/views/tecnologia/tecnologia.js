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
    // nombreImg: 'laptophp15.jpg', 
    // nombreCategoria: 'HP',
    // nombreProducto: 'Laptop hp 15"',
    // precioProducto: 2600,
    // cantidadProducto: 3,
  // }, 
  // {
    // idProducto: 1002,
    // nombreImg: 'samsungtv70.jpg',
    // nombreCategoria: 'Samsung',
    // nombreProducto: 'Samsung tv 70"',
    // precioProducto: 2699,
    // cantidadProducto: 4,
  // }, 
  // {
    // idProducto: 1003,
    // nombreImg: 'galaxys10.jpg',
    // nombreCategoria: 'Samsung',
    // nombreProducto: 'Samsung galaxy S10',
    // precioProducto: 1599,
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
    nombreImg: 'galaxys10.jpg', 
    nombreCategoria: 'Samsung',
    nombreProducto: 'Samsung galaxy s10',
    descripcionProducto: '6 GB RAM + 128 gb almacenamiento + 5000 mah + full hd',
    precioProducto: 1599,
  }, 
  {
    idProducto: 1002,
    nombreImg: 'galaxynote20.jpg', 
    nombreCategoria: 'Samsung',
    nombreProducto: 'Samsung galaxy note20',
    descripcionProducto: '8 GB RAM + 256 gb almacenamiento + 6000 mah + full hd',
    precioProducto: 2499,
  }, 
  {
    idProducto: 1003,
    nombreImg: 'motog9.jpg', 
    nombreCategoria: 'Motorola',
    nombreProducto: 'Motorola g9 plus',
    descripcionProducto: '3 GB RAM + 64 gb almacenamiento + 3500 mah + full hd',
    precioProducto: 999,
  }, 
  {
    idProducto: 1004,
    nombreImg: 'motog7power.jpg', 
    nombreCategoria: 'Motorola',
    nombreProducto: 'Motorola g7 power',
    descripcionProducto: '3 GB RAM + 64 gb almacenamiento + 4500 mah + hd',
    precioProducto: 899,
  }, 
  {
    idProducto: 1005,
    nombreImg: 'samsungtv50.jpg', 
    nombreCategoria: 'Samsung tv',
    nombreProducto: 'Samsung tv 50"',
    descripcionProducto: 'Full hd + puerto hdmi + magic control',
    precioProducto: 1899,
  }, 
  {
    idProducto: 1006,
    nombreImg: 'samsungtv65.jpg', 
    nombreCategoria: 'SamsungTv',
    nombreProducto: 'Samsung tv 65"',
    descripcionProducto: 'Ultra hd 4k + pantalla cristal + magic control',
    precioProducto: 2899,
  }, 
  {
    idProducto: 1007,
    nombreImg: 'samsungtv70.jpg', 
    nombreCategoria: 'SamsungTv',
    nombreProducto: 'Samsung tv 70"',
    descripcionProducto: 'Ultra hd + 2 puertos hdmi + conxion bluetooh',
    precioProducto: 2659,
  }, 
  {
    idProducto: 1008,
    nombreImg: 'daeewotv.jpg', 
    nombreCategoria: 'DaeewooTv',
    nombreProducto: 'Daeewoo tv 49"',
    descripcionProducto: 'Pantalla full hd + wifi + samart tv',
    precioProducto: 899,
  }, 
  {
    idProducto: 1009,
    nombreImg: 'laptophpgaming.jpg', 
    nombreCategoria: 'Asus',
    nombreProducto: 'Laptop gaming asus',
    descripcionProducto: '16gb ram + 1tb ssd + full hd',
    precioProducto: 7999,
  }, 
  {
    idProducto: 1010,
    nombreImg: 'macbookair.jpg', 
    nombreCategoria: 'Apple',
    nombreProducto: 'Macbook air ',
    descripcionProducto: '8 gb ram + 500 ssd + bluetooh',
    precioProducto: 1899,
  }, 
  {
    idProducto: 1011,
    nombreImg: 'laptophp15.jpg"', 
    nombreCategoria: 'HP',
    nombreProducto: 'Laptop hp 15"',
    descripcionProducto: '8gb ram + 1 tb ssd + full hd',
    precioProducto: 2600,
  }, 
  {
    idProducto: 1012,
    nombreImg: 'laptoplg.jpg', 
    nombreCategoria: 'LG',
    nombreProducto: 'Laptop lg',
    descripcionProducto: '12 GB RAM + 528 gb almacenamiento + uhd 4k',
    precioProducto: 2589,
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

