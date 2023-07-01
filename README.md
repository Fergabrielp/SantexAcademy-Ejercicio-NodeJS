# API Rest XAcademy - Libros

Esta API Rest fue desarrollada en "Node" con el framework "Express" y con "Sequelize" como ORM para facilitar la comunicacion con la base de datos en memoria "SQLite3". También se utilizó "Passport" como middleware externo de autenticación y JSON Web Token (JWT) como token de seguridad para los usuarios registrados. También se utilizó la dependencia "Nodemon" para la actualización automática del servidor cuando se realizan cambios.

## ¿Que hace nuestra API?

Este trabajo tiene como objetivo realizar un CRUD con todo lo aprendido en XAcademy de Santex y Technology with Purpose.

Nuestra API Rest se encargá de manejar Usuarios, Libros y Bibliotecas. Tendremos un usuario Administrador que será el encargado de crear Nuevos Usuarios. Tanto los Nuevos Usuarios como el Administrador serán capaces de Crear, modificar, leer y eliminar Libros y Bibliotecas. Los usuarios que no estan registrados o no son Administradores solamente podran leer la informacion de un Libro o Biblioteca en particular o todo el listado de los mismos. Los libros podrán pertenecer o no a una Biblioteca y éstas a su vez podran tener cero o muchos Libros.

## Instalación de Dependencias

Node (En mi caso la version instalada fue la 18.14.1, es recomendable el uso de NVM para el manejo de versiones de Node). Inicialicé el proyecto para crear los archivos "package.json" y "package-lock.json" que mostrarán toda la configuración, y sus dependencias instaldas con sus versiones (hasta el momento ninguna).

```bash
  npm init
  npm install
```

Instalamos Nodemon para que nuestro servidor se reinicie automaticamente cuando detecte algún cambio. Esto es muy útil porque nos ahorra mucho tiempo. Sin embargo solo la instalaremos como una dependencia de desarrollo, ya que no la necesitarrmos en produccion, solo será una ayuda para nosotros.

```bash
  npm install --save-dev nodemon
```

Instalamos Express como nuestro framework de Node, esto nos brinda muchas herramientas que harán nuestro trabajo mas simple, legible y escalable. (Muy utilizado en la arquitectura API Rest).

```bash
  npm install express
```

Instalamos Sequelize, que será nuestro ORM que facilitará la comunicación con la base de datos. Nos permite utilizar funciones de javascript para el manejo de la base de datos en vez de utilizar el lenguaje nativo de nuestra base de datos (En este caso SQL). Existen otros ORM por ejemplo para base de datos NoSQL se suele utilizar Mongoose.

```bash
  npm install sequelize
```

Instalamos SQLite3 como nuestra base de datos. Esta base de datos tiene la particularidad de ser una base de datos en memoria, es decir que será ligera y es destinada para desarrollos con poca información. Para un trabajo integrador nos viene muy bien.

```bash
  npm install sqlite3
```

Instalamos Passport, Passport-jwt y JWT (json web token) para el manejo de nuestras autenticación de usuarios. Passport es un middleware externo que nos facilita el armado de nuestra autenticación y JWT será el token que se utilizará para el registro de usuarios.

```bash
  npm install passport passport-jwt jsonwebtoken
```

## Arquitectura

Nuestra API Rest utilizará esta estructura de carpetas y arhivos:

![App Screenshot](https://i.postimg.cc/vTVSLgFz/Arquitectura.png)

Se utilizará como buena práctica el uso de archivos barril o barrel files. Esto quiere decir que se utilizará el archivo "index.js" dentro de nuestras carpetas, como primer referencia a los archivos que dichas carpetas contengan. Esto simplifica el uso de de los "import" en nuestra aplicación y permitirá que cuando tengamos que cuando se realice algun cambio, no tendremos que actualizar todo en cada archivo relacionado, sino que solamente se hará en nuestro index. Este es un ejemplo de archivo barril en nuestra carpeta de controllers:

![App Screenshot](https://i.postimg.cc/1RnTZTnq/Barril.png)

## Desarrollo

#### 1- 🏠 App.js

Nuestro archivo principal donde se creara nuestra app mediante express, el puerto que escuchara, el momento donde llamaremos a iniciar nuestra base de datos. Acá podemos ver el manejo de middlewares de aplicacion que son "express.json" y el ruteo. El primero nos facilita el uso de las solicitudes en formato JSON transformandolas en un objeto Javascript, y el segundo nos permite manejar y agrupar las diferentes rutas en archivos aparte para un manejo ordenado de las mismas.

![App Screenshot](https://i.postimg.cc/Jng2k3g0/App.png)

#### 2- 🔧 Config

Creación de nuestra carpeta "config" que contendra nuestro archivo de configuración de nuesta base de datos. Acá instanciaremos a la clase Sequelize y le diremos con que dialecto tiene que comunicarse con nuestra base de datos y en que lugar se almacenará. Luego se inicializará nuestra base de datos y se exportará junto con la instancia de Sequelize para luego ser utilizados dentro de nuestra app.

![App Screenshot](https://i.postimg.cc/59hr93Lk/Config.png)

#### 3-📗 Models

Nuestra carpeta "models" contendrá nuestros tres modelos o entidades (book, library, user). Acá se definirá el tipo de datos que tendran nuestros campos, sus claves primarias y las relaciones entre los modelos. Por convención nuestros modelos serán llamados como una clase, es decir con la primer inicial en mayuscula (User, Library, Book).

![App Screenshot](https://i.postimg.cc/P5hFY56W/Models.png)

#### 4- 🚘 Routes

El ruteo de nuestra aplicación será diferente para cada entidad, pero a su vez todas trabajaran bajo el estandard de peticiones http para un CRUD (POST, GET, PUT, DELETE). Estas rutas podrían trabajar directamente sobre nuestro modelo de negocio pero en nuestra arquitectura decidimos dividirlo en subcarpetas para un mejor manejo de responsabilidades y haciendolo mas escalable. Por lo tanto nuestras rutas tendran un middleware externo (passport) que le dirá si estas autorizado a realizar esa petición; y nuestro controllador que recibirá dicha petición y cuya función describiremos mas adelante.

![App Screenshot](https://i.postimg.cc/BQ2VjKCZ/Routes.png)

#### 5- 🚫 Middlewares

En esta carpeta esta almacenado nuestro middleware externo de autenticación. Si bien no tiene mucho sentido utilizar un index cuando solo tenemos un solo middleware, en un futuro podriamos tener mas y sería de mucha ayuda seguir con nuestra buena practica de archivo barril. Nuestro archivo auth.js contendrá la estrategia que utilizará password mediante nuestro JWT enviado como un bearer token al header y el secret o key que está a fines de ejemplo en el mismo archivo (lo ideal sería manejar esto con variables de entorno). También esta definida la restricción para los usuarios que no son "admin" la cual se utilizará en nuestro ruteo para decir que no podrán crear usuarios nuevos, pero las personas autenticadas (admin y usuarios creados por admin) podrán crear books y libraries.

![App Screenshot](https://i.postimg.cc/s2g6H0C1/Middlewares.png)

#### 6- 📠 Controllers

Los controladores van a recibir las request para acceder al body o en otros casos a params (cuando enviamos datos por la URI) y utilizarán response para la comunicación con el usuario enviando sus respectivos status code y el mensaje que se desee en casos donde sea una peticion exitosa o cuando contenga algun error. En pocas palabras, nuestro controlador será el encargado de la comunicación con el usuario.

![App Screenshot](https://i.postimg.cc/1tgWsntQ/Controllers.png)

#### 7- 📣 Providers

El provider es el encargado de realizar llamadas a servicios externos, en nuestro caso el servicio externo al que llamaremos será sequelize a travez de sus funciones (create, update, dinfByPk, update, destroy, etc...)

![App Screenshot](https://i.postimg.cc/Z5csczg1/Providers.png)

#### 8- ✒️ Services

Los servicios tendrán nuestra lógica de negocio y manejarán las llamadas a los servicios externos realizada por nuestros Providers.

![App Screenshot](https://i.postimg.cc/4328DbXP/Services.png)

## Autor

⚡ Fernando Gabriel Pérez - perezfernando95@gmail.com ⚡
