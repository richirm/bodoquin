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
        git checkout -b <nombre-rama>
        git checkout <nombre-rama>
        git fetch
        pull request
  - GITHUB: servidor o repositorio web para proyectos git
  - tortoise git: herramienta de interfaz grafica para ejecutar operaciones con GIT de manera simple
  
4. Metodología del proyecto:
  - SCRUM: es una metodología agil para dividirnos el desarrollo
    - feature => una mejora 
    - pesos: 1, 2, 3, 5, 8
    - Features: (Lista de tareas - tablero KANBAN)      
      - Implementar un header comprimido al bajar el scroll (Vanessa - 5)
        - colocar un logo
        - input de busqueda
        - icono del usuario de sesión
      - Implementar los 4 accesos a las vistas en el header (Ricardo - 2)
      - Implementar un footer con los datos de contactabilidad (Vanessa - 3)
    - backlog => conjunto de tareas o mejoras a realizar (features futuros)
      - Implementar una home (Dani)
        - poner 4 tarjetas descriptivas de las lineas de productos 
        - poner 4 tarjetas de ofertas
      - Implementar en cada vista un panel para información del producto (Yoisi)
        - mostrar imagen
        - titulo
        - precio
        - boton agregar
      - Implementar un formulario de sesión (Ricardo)
      
    - Requerimientos funcionales:
      - poner un logo
    
    - Requerimientos no funcionales:
      - titulos centrados
      - iconos con color
      - 
    

  
        
        
        
   
  