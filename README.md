Aplicación bodoquin
-------------------

1. Estructura:
  - assets/ => carpeta donde se van a almacenar recursos que no son de programación
    - img/ => carpeta donde se van a almacenar imagenes
    - fonts/ => carpeta donde se almacena los tipos de fuentes de la aplicación
  - app/ => carpeta donde se va a almacenar los recursos creados por el equipo frontend
    - views/ => carpeta que contiene el conjunto de vistas
      - vistaYYY => carpeta que va a contener el .html, .css y.js para una vista
    
    
2. Lengujes:
  - HTML5 => conjunto de etiquetas que me permiten diseñar el esqueleto o la maqueta de mi aplicación, y por defecto me brinda un estilo y una lógica
  - CSS3 => conjunto de selectores y estilos que me van a permitir diseñar mi aplicación 
    - Nomenclatura BEM: Bloque_Elemento--Modificador
  - Javascript => 
      tipos de datos:
        string => 'hola'
        number => 1
        boolean => true, false
        undefined
        null
        objects => { }
        arrays => [ ]
        
      Operaciones entre variables:
        - operaciones entre numeros (sumas, restas, etc...)
        - operaciones entre textos
          - textos simples (concatenación)
          - textos complejos (reemplazar variables en un texto)  
          - Construir un mensaje del HTML usando javascript        
        
3. Herramientas:
  - GIT: herramienta para sincronizar trabajo y código fuente y nos sirve para ver el historial de cambios de un archivo  
      comandos:
        git --version => me indica la versión instalada del git
        git clone <url>  => descarga todo el repositorio en tu local
        git status =>nos muestra los archivos que han sido modificados        
        git add .      => preconfirmacion de archivos modificados  
        git commit -m "comentario"   => confirmacion final de los archivos     
        git push origin master       => los archivos confirmados se suben al repositorio 
        git pull origin master     => descarga los ultimos cambios del repositorio en tu local.   
        git diff <nombre-archivo> => muestra los cambios realizados en el archivo
        git checkout -b <nombre-rama> => para crear y posicionarme en una nueva rama
        git checkout <nombre-rama> => para posicionarme en una rama
        git fetch => para descargar las ramas que están en el repositorio pero no en mi local
        pull request => para enviar una solicitud de unión de mi rama hacia develop
  - GITHUB: servidor o repositorio web para proyectos git
  - tortoise git: herramienta de interfaz grafica para ejecutar operaciones con GIT de manera simple
  
4. Metodología del proyecto:
  - SCRUM: es una metodología agil para dividirnos el desarrollo
    - feature => una mejora 
    - pesos: 0.5 1, 2, 3, 5, 8, 13
    - Features: (Lista de tareas - tablero KANBAN) 
      - aumentar hasta 9 productos por cada vista 1
      - responsive parte II en las vistas de productos 3
      - identificar (resolver) los bugs del carousel 2
      - el carousel con pasos 5
      - en la vista de inicio: tarjetas de acceso tengan un efecto hover 2
      - implementar maqueta del chat con boton FAB 2
      
    - backlog => conjunto de tareas o mejoras a realizar (features futuros)      
      - Requerimientos funcionales:
        - poner un logo
        - implementar vistas de detalle de producto
          - productos relacionados
        - implementar vista de resumen de la compra
        - en la vista de inicio: implementar mini banners por cada linea de producto con efecto en el hover
        - implementar sección de anuncios y/o publicidad
        - modal de confirmacion de recojo (hubicación)
        - modal de carrito de compra
        - integrarnos con bootstrap
        - en cada vista de producto, al seleccionar un producto, se tiene que mostrar la 
          funcionalidad para seguir agregando o  disminuyendo productos, o eliminar
        - Tarjeta de oferta fija que aparezca al abrir el home 
        - implementar sección de productos en remate en cada pantalla  
        - Implementar opciones de ayuda
        - Pantalla de cambios y devoluciones
        - Pantalla de nuestras tiendas
        - cerrar el menu al dar click afuera de este 
              
      - Requerimientos no funcionales:       
      
5. Plataformas:
  - zoom: https://us05web.zoom.us/j/88522391492?pwd=UExqSW1vVlFuaXVOZzgxamJkQXo0QT09
  - mural: https://app.mural.co/t/bodoquin3213/m/bodoquin3213/1623554095180/58abc96e720510263625d3e7e4bb43151d7faa2f
  - trello: https://trello.com/b/0RXHhEKT/bodoquin
  - github: https://github.com/richirm/bodoquin
  
6. Editores: IDE
  - NotePad++
  - Visual Studio Code (VSC)
  - Webstorm
    
    

  
        
        
        
   
  