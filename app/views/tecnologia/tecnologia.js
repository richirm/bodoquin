var pedidos = [];
var menuColapsado = true;
var usuarioPopupVisible = false;
var modalInicioSesionVisible = false;
var modalRegistrarseVisible = false;
var modalCerrarSesionVisible = false;
var chatPopupVisible = false;
var modalCategoriaVisible = false;

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
  if(chatPopupVisible === true) {
    document.querySelector('.chat_backdrop').style.display = "none";
    document.querySelector('.chat_popup').classList.remove('chat_popup_in');    
    document.querySelector('.chat_popup').classList.add('chat_popup_out');    
    document.querySelector('.chat_fab').classList.remove('chat_fab_in');
    chatPopupVisible = false;
  } else {
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

