Aplicación bodoquin
-------------------

1. Estructura:
  - assets/ => carpeta donde se van a almacenar recursos que no son de programación
    - img/ => carpeta donde se van a almacenar imagenes
    - fonts/ => carpeta donde se almacena los tipos de fuentes de la aplicación
    - libs/ => carpeta donde se almace las librerias de terceros
  - app/ => carpeta donde se va a almacenar los recursos creados por el equipo frontend
    - components/ => carpeta que contiene a los componentes normales
    - views/ => carpeta que contiene el conjunto de vistas (componentes)
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
  - nodejs y npm:
    - node --version
    - npm --version
  - Angular:
    - Es un framework para creación de proyectos web usando web components
    - SPA: Single page application (index.html)
    - Instalacion:
      - npm install -g @angular/cli(@version)
      - ng version
    - Crear un proyecto
      - ng new bodoquin-pruebita
      - npm start
      - http://localhost:4200
    - Components:
      - Un componente es una parte o bloque de la pantalla que tiene su propio html, css, y ts
      - Ciclo de vida de un componente: es el conjunto de etapas por los que pasa un componente
        desde que se inicializa en la pantalla hasta que se destruye el componente en la pantalla
        - ngOnInit (inicializando el componente)
        - ngOnChanges (inputs están cambiando)
        - ...
        - ...
        - ngOnDestroy (destruyendo el componente)
      - Exiten componentes tipo vistas y componentes normales
      - Comunicacion entre componentes:
        - Inputs => Son entradas de variables hacia el interior del componente (del padre al hijo)
        - Outputs => Son eventos que se emiten para avisar al exterior (del hijo al padre) que algo ha ocurrido, algún cambio
      - Criterios para crear un componente:
        - Una sección o div de debe utilizar en varias parte de otras o de la misma vista
        - Una vista u componente es muy extenso y se necesita dividirlo en pequeñas partes para que sea de facil entendimiento y mantenimiento
    - Routing:
      - La forma en la que Angular asocia una ruta de la url a un componente (vista)
    - Databinding:
      - Interpolacion {{ variable }}: la forma en la que Angular reemplaza una variable en el template
      - Propiedad o input [variable]: la forma para enviar un dato de una variable de un componente padre a un componente hijo
      - evento u output (xxx): la forma para detectar eventos que ocurren en el componente hijo hacia el componente padre 
      - doble bindeo de datos [(xxx)]: la forma para sincronizar una variable que está en el componente hijo con una variable que está en el componente padre
    - Compilar:
      Angular convierte el código de nuestra aplicacion en codigo que puede entender el
      navegador => html, css y js
    - Typescript: => js (transpilar)
      Es un super conjunto de nuevas funcionalidades de javascript de tal forma que 
      simule que el javascript es un lenguaje orientado a objetos    
    - Sass: => css
      Es un super conjunto de nuevas funcionalidades de css de tal forma que simule 
      ser un lenguaje orientado a objetos
      - anidación de clases css
    - Directivas (estructurales):
      (click): Directiva tipo evento que me permite saber cuando se ha dado click en un elemento, y me ejecuta un metodo
      [class.xxx]="true" : Directiva que permite colocar una clase xxx al elemento si la condición es true
      *ngIf="true": Directiva que permite mostrar o destruir un elemento del DOM si la condición es true
      *ngFor="let objeto of arreglo": Directiva para repetir una sección del html de acuerdo a los elementos de un arreglo
    
4. Metodología del proyecto:
  - SCRUM: es una metodología agil para dividirnos el desarrollo
    - feature => una mejora 
    - pesos: 0.5 1, 2, 3, 5, 8, 13, 21
    - Features: (Lista de tareas - tablero KANBAN) 28
      - Migrar bodoquin a Angular 20
        - tecnicas para identifcar componentes 2
        - directivas: 3
            -(click)
            -[class.xxx]
            -*ngIf
            -*ngFor
            -*ngSwitch
            -[ngStyle]="{}"
            -[hidden]="true"
        - crear vista reposteria 3
        - crear vista moda 3
        - crear vista tecnologia 3
        - crear vista jugueteria 3
        - componente de tarjetas de producto 5
        - 
    - backlog => conjunto de tareas o mejoras a realizar (features futuros)      
      - Requerimientos funcionales:
        - Migrar bodoquin a Angular 20
          - componente popup 5
          - componente modal 5
          - componente modal inicio sesion 2
          - componente modal registrase 2
          - componente modal cerrar sesion 2
          - componente buscador 2
          - crear componente chat 3
          - crear componente carrito 3
          - crear componente usuario 3
          - crear vista reposteria-detalle 3
          - crear vista jugueteria-detalle 3
          - crear vista moda-detalle 3
          - crear vista tecnologia-detalle 3       
          - crear vista inicio (home) 3   
          - crear componente carousel 3
          - crear componente tabs 3
          - integrar los componentes a las vistas 3
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
    
    
        
   
  