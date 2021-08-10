Aplicación bodoquin
-------------------

1. Estructura:
  - assets/ => carpeta donde se van a almacenar recursos que no son de programación
    - img/ => carpeta donde se van a almacenar imagenes
    - fonts/ => carpeta donde se almacena los tipos de fuentes de la aplicación
    - libs/ => carpeta donde se almace las librerias de terceros
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
  - commits:
      feat(componente): descripcion
      fix(componente): descripcion
  
4. Metodología del proyecto:
  - SCRUM: es una metodología agil para dividirnos el desarrollo
    - feature => una mejora 
    - pesos: 0.5 1, 2, 3, 5, 8, 13
    - Features: (Lista de tareas - tablero KANBAN) 26
      - implementar componente de tabs 5
      - implementar vistas de detalle de producto 13
        - construir la estructura principal de la vista -  layout (header, footer, nav, main)
        - construir el contenido de la vista:
          - zoom de la imagen
          - lógica para disminuir o aumentar las unidades del producto
        - integrarse con el carrito de compras
        - integrar con el componente de tabs para crear la sección del detalle adicional del producto
          - especificaciones
          - descripcion
      - Introducción a Angular 8
        - ¿que es framework?
        - ¿que es Angular?
        - cómo instalar Angular
        - como crear componentes
        - manejo de los datps (data binding)
        - comunicacion entre componentes
    - backlog => conjunto de tareas o mejoras a realizar (features futuros)      
      - Requerimientos funcionales:
        - poner un logo
        - implementar sección de anuncios y/o publicidad en el top
        - modal de tiendas de recojo (ubicación)
        - Implementar popup de ayuda
        - Pantalla de cambios y devoluciones
        - Pantalla de nuestras tiendas
        - integrar el responsive en la pantalla de inicio
        - correcciones del menu en responsive
        - mejorar pantalla de carrito:
          - redirigir a la pantalla de carrito desde las otras vistas
          - cambiar titulo
          - quitar el buscador
          - quitar menu seleccionado en el header
          - sincronizar con carrito de compras
        - integrar las notificaciones o toast en donde corresponda
      - Requerimientos no funcionales:   
        - migrar todas las vistas a Angular
      
5. Plataformas:
  - zoom: https://us05web.zoom.us/j/88522391492?pwd=UExqSW1vVlFuaXVOZzgxamJkQXo0QT09
  - mural: https://app.mural.co/invitation/mural/bodoquin6992/1628440329733?sender=u4198c20ad998e923de7a2867&key=6ff731e3-5eb2-4d6d-97f5-3c0f3ac2e12a
  - trello: https://trello.com/b/0RXHhEKT/bodoquin
  - github: https://github.com/richirm/bodoquin
  
6. Editores: IDE
  - NotePad++
  - Visual Studio Code (VSC)
  - Webstorm
    
    

  
        
        
        
   
  