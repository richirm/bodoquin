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

      Patrones: Los patrones sirven para estandarizar el código
        - Patron reactivo: Eventos y subscripciones
        - Patron de injección de dependencias: Instanciar los servicios en el constructor
        
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
        git remote set-url origin url_mi_repositorio => para cambiar la url del repositorio
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
      - Proyeccion de contenido: Enviar un contenido HTML de un componente padre hacia un componente hijo
        - ng-template: Envíar una plantilla del padre al hijo
        - ng-content: Enviar el contenido del componente en el padre hacia el hijo
    - Servicios: Nos permite gestionar los datos de la aplicación
      - Servicio para comunicar componentes: Envío de datos entre componentes
      - Servicio para proveer de datos a la vista:
        - Datos provenientes del storage (memoria del navegador) (local storage , session storage)
        - Datos provenientes del backend
        - Datos provenientes de otro componente
    - Observables: Es un objeto que va a transmitir el cambio de flujo de datos
      - Evento: Para detectar envio de datos de un componente de otro
      - Outputs: Para detectar envio de datos de un componente hijo hacia el padre
      - Http: Para detectar envio de datos entre backend y frontend
      
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
    - Pipes:
        Los pipes ayudan a convertir la información de una variable en un formato especial
        - JSON: Convierte visualmente un objeto en formato JSON
  - Jenkins:
    - Herramienta de despliegue continuo o automático de nuestro código en un servidor 
    
4. Metodología del proyecto:
  - SCRUM: es una metodología agil para dividirnos el desarrollo
    - feature => una mejora 
    - pesos: 0.5 1, 2, 3, 5, 8, 13, 21
    - Features: (Lista de tareas - tablero KANBAN) 39
        - Lunes full JS 5
        - Teoría de servicios del frontend 5
        - Teoría de servicio HttpClient y ejemplos practicos 5
        - Integrar el servicio de GET /reposteria con el modulo de reposteria 3
        - Integrar el servicio de GET /jugueteria con el modulo de jugueteria 3 
        - Integrar el servicio de GET /tecnologia con el modulo de tecnologia 3
        - Integrar el servicio de GET /moda con el modulo de moda 3
        - Integrar el servicio de GET /reposteria/id con la pantalla de detalle de reposteria 3
        - Integrar el servicio de GET /jugueteria/id con la pantalla de detalle de jugueteria 3
        - Integrar el servicio de GET /tecnologia/id con la pantalla de detalle de tecnologia 3
        - Integrar el servicio de GET /moda/id con la pantalla de detalle de moda 3
        - directivas: CommonModule
            - *ngSwitch
            - *ngIf
            - *ngFor
            - [class.xxx]="condicion"
            - [ngStyle]
            - (click)
            - ng-template
            - routerLink, routerLinkActivate
        - Uso de pipes: CommonModule
          - json
          - date
          - currency
          - uppercase
          - lowercase
    - backlog => conjunto de tareas o mejoras a realizar (features futuros)      
      - Requerimientos funcionales:
        - crear servicios:
          - servicios para llamar al backend, servicios o apis (endpoint)
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
      
5. Plataformas:
  - zoom: https://us05web.zoom.us/j/88522391492?pwd=UExqSW1vVlFuaXVOZzgxamJkQXo0QT09
  - mural: https://app.mural.co/invitation/mural/bodoquin6992/1631762200451?sender=u4198c20ad998e923de7a2867&key=c4b98edb-4b83-439f-9d62-38ad96539c53
  - trello: https://trello.com/b/0RXHhEKT/bodoquin
  - github: https://github.com/richirm/bodoquin
  - discord: https://discord.com/channels/894803908017414214/894805427689234442
  - Comunicación:
    - Formales:
      - Microsoft team
      - Slack
    - Informales:
      - Whatsapp
      - Google meet (hungout)
    - Mas informal:
      - Discord
  
6. Editores: IDE
  - NotePad++
  - Visual Studio Code (VSC)
  - Webstorm
  
7. Tutoriales:
  - Uso de variables y objetos en javascript https://www.youtube.com/watch?v=ivdTnPl1ND0
    
8. Buenas practicas:
  - Principio SOLID:
    - S: Responsabilidad Unica y Simple
         - Funciones pequeñas
      O:
      L:
      I:
      D: Principio de injeccion de dependencias
  - Patrones:
    - Injeccion de dependencias:
        Para usar un servicio, debemos crear una instancia de ese servicio 
        usando el contructor de la clase donde vamos a utilizar el servicio
  - Nomenclatura de variables y funciones explicita
    
Javascript
------------------------   
   - Están los datos
      - Que provienen del backend
      - Que provienen del storage
      - Que provienen de las constantes del JS
      
   - Logicas de negocio
      - Logicas para manipular los datos
        - creacion de variables, objetos y metodos
        - forEach
        - +, -, *, /
        - split
        - find
        - ...
      - Logicas para actualizacion de la pantalla
        - poner los datos en la pantalla
        - animaciones
      - Logicas para validaciones de datos
        - if else => 
          - 1 condicion if(miVariable > 5) { ... }
          - >1 condicion
            - if(miVariable1 < 5 && miVariable2 === 'Torta Chocolate') { 
                ... 
              } else if (miVariable2 === 'Deli Oreo' || miVariable2 === 'Keke de piña') {
                ...
              } else if () {
                ...
              } else {
                ...
              }
      - Logicas para capturar eventos que realiza el usuario desde la pantalla
        - click
        - keypress
        - mousedown
        - resize
        - scroll
      - Logica para enviar datos hacia los services
        - Enviar hacia el backend
        - Enviar hacia el storage
        - Enviar hacia otro componente
        
   
  