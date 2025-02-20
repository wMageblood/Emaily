# <center/>Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.


### Recursos del curso:

    1. Udemy Discussion Threads
    2. Google
    3. Stackoverflow
    4. 

### Diagramas:

    1. Bajemos el archivo y lo extraemos en algún lado de nuestra computadora.
    2. Visitar diagrams.net
    3. Clickear en "Open Existing Diagram" y lo buscamos dentro de nuestra computadora.
    4. Seleccionamos "Open From Device" y utilizamos el file explorer para seleccionar el archivo del diagrama de nuestra computadora.

#
# <center/>Feedback Collection Application

Vamos a targetear **Product Managers** o **Startups** y lo que vamos a hacer es *automatizar el proceso de mejora de ellas*, enviar en masa e-mails en busqueda de feedback y extrapolarlos para que de una manera más fácil podamos ver los resultados y así, posteriormente mejorar la aplicación o el servicio.

Esta aplicación va a tener que resolver **cómo** vamos a envíar en masa los e-mails, o si vamos a trabajar con **direcciones** de los clientes deberíamos de tener un sistema de creación de cuentas, lo que *significaría que necesitamos autentificación*.

Uno pensaría que basta de los diagramas, que empecemos a codear un poco pero, es importante ver el diagrama para entender al máximo lo que tenemos que hacer, cada paso.

#

Cuando un cliente entra a nuestra página web tenemos que resolver, cómo es qué se registran en nuestro sitio, necesitamos que de algúna forma, se identifiquen y que asociemos cierto tipo de cuenta a esos usuarios, normalmente esto se resuelve con ***Google OAuth***, **Google OAuth** es el cartelito que vemos que dice "Sign Up with Google", en muchas páginas webs.

Luego de que ellos loggean a la página web, vamos a pedirles que agreguen un poco de dinero para poder envíar los correos, esto lo vamos a hacer a través de Stripe, no vamos a utilizar un modelo de suscripción, vamos a **utilizar un modelo de créditos**, en el cual el usuario agrega créditos a su cuenta, y de ahí los puede utilizar para mandar "x" cantidad de e-mails.

Cuando agregan créditos a su cuenta, ellos tienen la opción de crear una nueva **"campaign"**, esencialmente ***van a tener la posibilidad de crear una campaña*** para decir: *"Quiero mandar "x" cantidad de e-mails para recolectar feedback sobre "z" cosa."*

Ese usuario va a escribir una lista de todos los clientes del cual él quiere recibir feedback, para dejarlo claro: el *usuario* en este caso son los *Product Managers*, *Startups*, ellos tienen los e-mails de las personas que utilizan su aplicación.

Una vez de que el usuario **nos provee** una lista de e-mails, que puede variar de **n** a **n.length - 1**, vamos a crear un e-mail *que vamos a mandar a toda la lista que anteriormente nos dieron*.

Esos *"surveyees"* van a recibir un e-mail con un **link**, el cual van a clickear para hacer el feedback que el *usuario quiere recibir*.

Posteriormente vamos a *tabular* toda esa información.

Por último, *vamos a entregar esa información al usuario que nos contrató para la recolección de feedback*, para que ellos puedan ver la **información que les interesa**.

Es por esto, que debemos de *tener* **nuestro diagrama** y **entender con fácilidad** qué es lo que vamos a escribir, ya que cuando estemos codificando, <u>todo se va a ir a la mierda, muy rápido</u>.

Para resumirlo, nuestros usuarios se van a inscribir utilizando **Google OAuth**, van a pagar cierta cantidad de dinero para agregar **créditos** a su cuenta para crear una **campaña**, luego nos van a dar la listas de e-mails a la cual nosotros vamos a enviar los mails de **"survey"**, después nosotros mandamos los mails a esos **"surveyees"**, ellos clickean en el boton para hacer feedback, nosotros recibimos la información, la **tabulamos** y después se la **entregamos** a nuestro cliente.

Hablemos sobre las tecnologias que vamos a utilizar para crear nuestro proyecto.

# <center/>Google OAuth

#### Users signs up via Google OAuth

Vamos a utilizar un ***express backend server*** y para guardar la información de los usuarios vamos a hacer uso de ***MongoDB***, para menajar la autotenficiación y el ***proceso de OAuth***, vamos a utilizar una libreria *third party* ***PassportJS***.

**PassportJS** va a hacer la OAuth mucho más fácil de instalar, esto viene con su propio set de desafíos pero más tarde los vamos a ver.

#### User pays for email credits via Stripe

Luego es manejar los pagos, **no vamos a manejar números de tarjetas de crédito directamente**, no vamos a aceptar tarjetas de crédito directamente, lo vamos a hacer a través de **Stripe**, para menajar todo en cuestión de pagos dentro de nuestra aplicación, **esto también viene con su set de desafíos**, qué en casos muy extremos hace difícil la interacción con React.

#### User creates a new 'campaign' & User enters list of emails to send survey to:

Cuando un usuario tiene pensado crear una nueva campaña o una **nueva survey**, como querramos llamarlo, vamos a utilizar **React y Redux**, cuando un *usuario ponga una lista de e-mails o detalles sobre lo que quieren recolectar, ya sea feedback o surveys*, **vamos a utilizar React, Redux y Redux Form**.

Estos dos últimos pasos son mucho mas **frontend**, donde vamos a estar viendo mucho más React, Redux y Redux Form.

#### We send email to list of surveyees:

Después de que recolecta la información sobre esta campaña o de las surveys, vamos a mandarle los mails a todos los usuarios o surveyees, y con eso vamosa utilizar un *third party* e-mail provider, esto va a tomar un poco de integración, realmente esto puede llegar a ser el trabajo más arduo de este curso.

#### Surveyees click on link in email to provide feedback:

Cuando un **surveyee** recibe ese mail pidiendo alguna forma de feedback necesitamos estar seguros que podamos guardar esa feedback que nos está presentando, para eso vamos a usar una combinación entre el *email provider*, *express backend* y la base de datos *mongoDB*.

#### We tabulate feedback:

Toda esa información que vamos a conseguir mediante las campañas o las surveys, las vamos a guardar en **mongoDB** y para cuando nuestro usuario quiera ver esa información, vamos a utilizar **mongo**.

#### User can see report of all survey responses:

Para ver la información que nuestros usuarios ***(PMs, Startups.. etc)*** vamos a utilizar **mongoDB** y para formattearla y presentarla correctamente vamos a utilizar *React* y *Redux*.

Este fue solamente un *sneak peak* sobre las tecnologías que vamos a utilizar en este proyecto y como el usuario va a atravesar nuestra aplicación.

# Arquitectura de la aplicación

Cuando un usuario navega dentro de su explorador a nuestro dominio, nosotros vamos a enviarle un documento HTML con un poco de JavaScript que contiene nuestra aplicación en React.

Entonces cuando un usuario entra a nuestra pagina web, vamos a enviarles algunos archivos que van a tener algun contenido o HTML para que aparezca en la pantalla, ese va a ser el lado React de nuestra aplicacion.

Hasta este punto, nuestra aplicacion de React en realidad no sabe que mostrarle al usuario, necesita una cantidad de data para mostrar la informacion correcta, no?

Como por ejemplo, si queremos mostrarle al usuario, una lista de surveys o campañas que el envio.

La parte de React de nuestra aplicacion tiene que conseguir esta informacion de algun lado dentro de nuestra aplicacion.

Vamos a utilizar MongoDB para guardar y almacenar todas las diferentes surveys y todos los diferentes emails que nosotros le enviaremos a las personas eventualmente.

Uno de los problemas principales dentro de nuestra aplicacion va a ser la comunicacion con la informacion que se esta guardando dentro de MongoDB y como se conecta con nuestra aplicacion de React.

La aplicacion de React que vamos a hacer nunca va a hablar directamente con la base de datos de MongoDB.

Es por eso que vamos a poner una express API entre React y MongoDB, esta Express API va a contener un monton de "business logic" para tomar esos requests de nuestra aplicacion de React, conseguir esa informacion que esta dentro de MongoDB y mandar esa informacion al lado React de nuestra aplicacion.

Esencialmente lo podemos imaginar como que un usuario entra a la pagina web, le mandamos la aplicacion React, la aplicacion React se prende y le pide a la Express API que consiga informacion.

La Express API saca la informacion de la base de datos de MongoDB y le regresa todo a la aplicacion de React, que luego es usada para mostrar el contenido en la pantalla al usuario.

La Express API y la aplicacion de React se van a comunicar totalmente a través de HTTP requests o AJAX requests.

Cada uno de esos requests va a contener una pequeña cantidad de JSON.

La Express API y MongoDB se van a comunicar un poco más por un sistema de comunicación interno que no vamos a estar tocando mucho, pero la vamos a platicar sobre el tiempo.

Entonces, nuestra aplicación de REact no va a hablar directamente con la base de datos de MongoDB y en lugar de eso va a estar esta Express API entre las 2.

# Relación entre Node y Express

### Node: 
Se utiliza para correr código fuera del browser, JavaScript siempre se fue utilizado dentro de algún web browser, porque ahí es donde empezó, era utilizado para correr codigo dentro del browser para darle un poco mas de sentido a la interactivo, o solamente para hacerlo sentir un poco más dinámico.

Sobre el tiempo, las personas se dieron cuenta de que querian utiliar JavaScript en otros lugares fuera de los browsers y así es como nació el proyecto NodeJS

Entonces NodeJS es usado para ejecutar código fuera del browser.

En otras palabras, en cualquier ambiente como mi laptop, o mi computadora de escritorio o en cualquier otro lugar que se te ocurra.

### Express:

Express, en la otra mano, es una librería que es utiliza el runtime de NodeJS. Eso significa que Express no es algo que se pueda utilizar solo.

Podemos imaginar que Express es una pequeña colección de funciones o "helpers" para trabajar con los aspectos HTTP de NodeJS un poco más fácil.

Es una librería que ayuda a que escribamos servidores más fácil.

Todo lo que vayamos a encontrar dentro de la librería Express, en teoría lo podríamos implementar desde 0, utilizando solamente Node, sería como escribir JavaScript plano y utilizando un poco de código que esta incluido en NodeJS

#

Cuando corremos un servidor en nuestra maquina local, el servidor va a estar escuchando o "listening" trafico HTTP en un solo puerto.

Podemos pensar que un puerto es una pequeña puerta, por la cual los requests HTTP pueden ser dirigidos, entonces podriamos tener un request HTTP hecho por nuestro browser, que también está trabajando en nuestra local machine y puede ser que ese request venga en un puerto muy especifico en nuestra computadora.

Vamos a configurar Node y Express para que pueda escuchar ese trafico que esta tratando de acceder a través de un puerto muy especifico en nuestra computadora local.

Ahora, NodeJS especificamente es el que va a estar escuchando por trafico en ese puerto, y espera a que un poco de información fluya a través de él.

Node va a tomar la información que fluye de este request HTTP y lo entrega al lado Express de la aplicación.

Pero recordemos que podemos hacer todo con Node, entonces no necesitariamos Express. Node es lo principal, y es el que maneja todo el trafico HTTP por debajo, pero queremos utilizar Express para hacer nuestra vida un poquito más fácil.

Entonces Node va a tomar el tráfico que viene y se lo va a entregar a Express, luego, Express va a mirar al request y va a decidir que hacer con la poquita lógica que el lado de la aplicación Express va a tener, y responderá de alguna manera a este request.

En Express existen los ***route handlers*** que son utilizados para manejar los distintos requests HTTP que piden un servicio en especifico.

    Por ejemplo:

    1. Un route handler que se dedica a autentificar al usuario.

    2. Un route handler que se dedica a loggear al usuario.

    3. Un route handler que se dedica a crear surveys y campaigns para el usuario.

Entonces, nuevamente. Node va a tomar el tráfico y lo envia a Express, Express se va a dar cuenta a donde va a mandar ese request, nosotros vamos a routear estos requests a nuestros route handlers que van a procesar el request y generar una respuesta.

Esta respuesta va a ser enviada denuevo al proceso de Node y Node va a responder al request que vino y la respuesta que nosotros creamos.

Y asi, eventualmente este objeto al cual nos referimos *RES*, que representa *Response* va a ser enviado a la persona que hizo ese request.

![http](https://i.ibb.co/5GY9CxQ/incoming-http-request.png)

Para concluir la idea: Cuando un poco de trafico llega, es routeado al lado Express de la aplicación, vamos a routear un poco de lógica que se encarga de "handlear" esos request que llegaron y formula una respuesta que después es rerouteada a la persona que hizo el request original.


# Generating Express App

    1. ls
    2. cd Proyectos
    3. cd server
    4. code . ( para iniciar el VSCode en ese directorio)

### package.json 

    Nos muestra la lista de dependencias que actualmente tenemos instalado en nuestro proyecto

### node_modules

    Nos muestran las carpetas las cuales Express depende para funcionar correctamente.

### package-lock.json

    Solamente vamos a ver esto si estamos utilizando npm version >5.

#

Por convención, cuando creamos un archivo o un archivo principal dentro de un proyecto de node, normalmente se le pone le nombre index.js.

```
const express = require('express');
```

Al utilizar la palabra clave **require** para acceder a la libreria Express, en este curso vamos a estar utilizando a lo que es referido como **módulos CommonJS** en el lado de servidor porque en el momento de hacer el curso NodeJS runtime solamente tiene soporte para **módulos CommonJS**.

Cuando decimos **módulos CommonJS**, es un sistema que fue implementado a NodeJS para poder compartir código entre distintos archivos.

Ahora, en el pasado, tal vez importabas librerías utilizando un *import* diferente.

```
import express from 'express';
```

Esta clase de sintaxis de import hace uso de un sistema de módulos diferentes llamados ES2015, al momento de la creación del curso, NodeJS no tenía support para módulos ES2015.

Ahora, hay algunas formas de poder esquivar esta restricción, pero lo unico que hace es que hacer el setup y desarrollar nuestro proyecto sea un poco más complicado.

Entonces en el lado del **servidor** de nuestra aplicación, vamos a **utilizar módulos CommonJS**, pero en el **frontend**, como por ejemplo en la parte de React de nuestra aplicación, **tenemos un acceso mucho mas fácil a lo que serían los módulos**.

En el lado de React, vamos a estar utilizando la sintaxis de *import*.

Ahora que ya dijimos porque se utiliza require en este caso y tenemos nuestra libreria express importada, vamos a crear nuestra primera aplicacion al escribir:

```
const app = express();
```

Dentro de un proyecto de NodeJS podriamos tener diferentes aplicaciones Express, entonces llamando Express como una funcion, genera una nueva aplicacion que representa una aplicacion express.

A lo largo de este curso vamos a utilizar solamente una aplicacion.

Y me sentiria comodo al decir que en la mayoria de los proyectos en los que vamos a trabajar, probablemente solamente van a utilizar una aplicacion dentro de ellos.

Este `app object` es utilizado para escuchar los requests que vienen, que estan siendo routeados al lado Express de la aplicacion, desde el Node side de la aplicacion y routear esos request a los route handlers, todos los route handlers que vamos a crear en algun momento van a estar asociados o registrados con el `app object`.

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);

localhost:5000

//Result
{
  "hi": "there"
}
```
---



> **app**: Express App to register this route handler with.\
> **get**: Watch for incoming requests with this method.\
> **'/'**: Watch for request trying to access **'/'**.\
>**req**: Object representing the incoming request.\
>**res**: Object representing the outgoing response.\
>**res.send({hi: 'there'})**: Immediately send some JSON back to whoever made this request.

#### The request Wants to:

>**get**: get info.\
>**post**: send info.\
>**app - put**: update all the propierties of something\
>**delete**: delete something\
>**patch**: update one or two properties of something.

#

***App***, recordemos que representa el proceso por debajo de nuestro servidor Express, el servidor Express tiene una cantidad de ***route handlers*** asociados con él.

Al llamar la función `app.get`, estamos creando un nuevo ***route handler***, entonces todo este código es un ***route handler***.

```
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});
```

***Get***, esto le dice a Express que queremos crear un ***route handler***, que esta a la espera de un request HTTP con un método muy específico.

Los métodos de request de HTTP son utilizados para indicar el tipo o clase de lo que la solicitud intenta lograr.

Entonces hicimos un ***route handler*** que esta asociado con el método `get`.

Express tiene muchos otros tipos de métodos también, en este caso utilizamos `get`.

`Get` esta asociado a conseguir información sobre algo en específico, también podemos configurar ***route handlers*** que son asociados a otros tipos de métodos también.

```
app.post
app.put
app.delete
app.patch
```

Cada uno de estos métodos de request, estan asociados a una intención especifica.

Ahora, no tenemos que seguir estos explicitamente, son considerados una convención de lo que tenemos que seguir.

Esta bastante claro que es lo que hace cada método, o el objetivo final de cada método mejor dicho.

    
    1. get está tratando de conseguir información.
    2. post está tratando de enviar información al servidor.
    3. put está tratando de actualizar las propiedades de algo.
    4. delete está tratando de borrar algo.
    5. patch está tratando de actualizar 1 o 2 propiedades de algo.

A lo largo del tiempo vamos a estar creando route handlers con estos métodos, que están asociados a diferentes tipos de requests que nos están haciendo.

`'/'` le dice a Express que esté alerta, que se va a intentar acceder a una route particular, entonces nos referimos a este `'/'` como la porción que se encarga de routear al handler. 

Este especificamente le instruye a Express para que si alguien visitó el route `localhost:5000`. Cuando nosotros entramos al localhost:5000 el '/' está implicito.

Tranquilamente podriamos tener un `localhost:5000/greeting` y lo único que tendriamos que modificar para hacer un route handler que vea esa página sería:

```
const express = require('express');
const app  express();

app.get('/greeting', (req, res) => {
    res.send({hi: 'there'});
});
```

Ahora vamos a los argumentos de la `arrow function`, `req` es simplificado de `request`, en JavaScript este es un objecto que representa la solicitud entrante o el *incoming request*.

Entonces tiene un montón de información que dice un poquito sobre quién está haciendo el request y algo de información asociado a ella.

Objeto `res`, `res` es la simplificación de `response` y representa la respuesta o la información que está apunto de devolver a quién sea que haya hecho ese request.

Finalmente está cuerpo de la `arrow function =>`, nosotros pusimos `res.send({hi: 'there'})` , el cual es un objeto plano de JavaScript, que le dice a Express que queremos cerrar el request inmediatamente y enviar una respuesta que contiene data JSON.

El segundo argumento fue una `arrow function`, la `arrow function` es llamada automaticamente por Express, en cualquier momento que llega un request a esta ruta `'/'`, entonces por sobre el tiempo, la funcion puede ser llamada ciento de miles de veces en un dia. Entonces esta funcion va a ser ejecutada cada vez que un request llega.

Por último, el request `app.listen(5000);` se refiere a que Express le dice a Node que quiere que escuche, o esté atento al tráfico del puerto 5000.

Aunque parece que Express es el que está escuchando el tráfico que viene por los puertos, Express lo único que hace es decirle a Node que lo escuche.

#

Vamos a hacerle deploy a nuestra aplicación, utilizando Render en lugar de Heroku, puede ser un poco diferente.

Antes de hacerle deploy, tenemos que solucionar algunas cosas:

    1. Dynamic Port Binding
    2. Specify Node Environment
    3. Specify Start Script
    4. Create .gitignore file

### Dynamic Port Binding:

Cada vez que nosotros hagamos deploy a nuestra aplicacion, Heroku nos va a decir que puerto tenemos que escuchar, entonces en otras palabras, Heroku nos va a dar un puerto muy especifico y nos va a decir que tenemos que escuchar el trafico en ese puerto.

Esto es porque Heroku va a hostear diferentes aplicaciones en un solo servidor o computadora, y quiere tener la habilidad de dinamicamente decirnos de que puerto va a venir.

Ahora para configurar esto dinamicamente, es bastante simple:

```
const PORT = process.env.PORT || 5000;
```

Vamos a poner `PORT` para que sea bastante claro para cualquier otro ingeniero que vaya a leer esto y va a ser igual a `process.env.PORT`

Cuando Heroku corre nuestra aplicacion tiene la habilidad de inyectar lo que se llaman `environment variables`, estas son variables que son configuradas por debajo. Node está arriba y Heroku está abajo con las `environment variables`, cuando nosotros corremos la aplicacion este es el momento perfecto para que Heroku nos diga exactamente donde quiere que deployeemos la aplicacion, esto significa que nosotros no podemos ver desde antes que puerto nos va a tocar, y eso es lo que hace esa linea de codigo.

Basicamente le dice: voy a deployear la app, proveeme del puerto al que tengo que ir, al ultimo segundo. 

Por ultimo, en caso de que lo estemos subiendo a un servidor, o lo tengamos en un environment como el de nuestra computadora, agregando un boolean esto se soluciona facilmente, ` || 5000`, esto indica que si en el caso de que no encuentre un puerto enviado por una third party app, que simplemente lo haga en nuestro `localhost:5000`, en development vamos a utilizar el `localhost:5000` y en production vamos a utilizar el puerto que nos de Heroku.

### Specify Node Environment:

En nuestro `package.json`, debajo de `Main` justo arriba de los `Scripts` es un buen lugar para poner nuestro **Node Environment**

```
  "engines": {
    "node": "20.17.0", //node -v
    "npm": "5.0.3" //npm -v
  },
```

Basicamente cuando Heroku bootea nuestra aplicacion, va a leer nuestro `package.json` y va a saber con que version tiene que levantar la aplicacion, en el caso de que no tenga ninguna instruccion de booteo, va a bootear con la mas alta.

### Specify Start Script:

Entonces cuando nosotros hacemos deploy de nuestra aplicacion, tenemos que decirle a Heroku que es lo que va a correr para iniciar nuestro servidor.

Podemos imaginar de que cuando hay 20 servidores distintos o 20 aplicaciones, puede haber 20 formas distintas de empezarlos y correrlos en produccion.

Para eso, lo que vamos a hacer aca es decirle a Heroku como exactamente tiene que empezar nuestro servidor.

```
  "scripts": {
    "start": "node index.js"
  },
```

Esto lo que va a hacer esdecirle a Heroku, che, entendemos que vas a correr un script llamado START, cuando lo hagas ejecuta este comando de aca.

### Create .gitignore file:

El proposito de este archivo es asegurarnos que no vayamos a hacer commit a alguna de las dependencias que instalamos o creamos.

En nuestra carpeta root, creamos un archivo llamado `.gitignore` y solamente le ponemos `node_modules`, para que ignore todos los modulos de Node.

---

# Google OAuth

¿Qué es Google OAuth? Google OAuth es el botón para loggearte con Google. Las personas normalmente prefieren loggearse rápidamente, y para eso está esto, el problema de Google OAuth es que, supuestamente es un infierno de configurar.

### Passport JS

PassportJS es un middleware de NodeJS que se encarga de hacer más fácil la implementación de la autentificación de varios servicios, actualmente cuentan con mas de 300 estrategías para acoplar PassportJS a tus proyectos Node.

PassportJS requiere unos pequeños boosters en lugares específicos del workflow para asegurar que funcione al máximo.

De nuestro diagrama, passportJS se encarga de: **Forward user's request to Google, Ask user if they grant permission, User grants permission, Put user on hold, take the 'code' from the URL, send request to google with 'code' included, google sees 'code' in URL, replies with details about this user.**

Funciona en base a dos librerías llamadas: *passport* y *passport strategies*.

### Implementación:

```
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
```

El `require('passport-google-oauth20')` importa varias propiedades, la que nos importa aca a nosotros es la propiedad `Strategy`, esto le va a decir a Express como autentificar a nuestros usuarios.

`passport = require('passport')` le da una idea a Express como handlear la autentificación.

`(new GoogleStrategy()` crea una nueva instancia de la estrategia de Google Passport, basicamente le dice a la aplicacion, "quiero de alguna manera autentificar a mis usuarios con google". Dentro de los parametros de la funcion GoogleStrategy() vamos a pasarle una configuracion para decirle a GoogleStrategy como autentificar a los usuarios en nuestra aplicación.

La función `passport.use()` sirve para que nosotros utilicemos passport, ya que passport sabe como manejar la autentificación en general. Utilizar esta funcion es como decir: passport quiero que sepas que hay una nueva estrategia, y acá está.

Antes de hacer uso de la Google Strategy, tenemos que darle dos opciones importantes, clientID y clientSecret

Tanto clientID como clientSecret van a ser proveídos directamente por el servicio de Google OAuth.

Cuando nosotros agarramos un usuario y básicamente se lo tiramos a Google, Google tiene que identificar de donde viene este  usuario, y tiene que decir, "ah, este usuario viene de los que están haciendo una aplicación de email", entonces cuando un usuario le da permiso de leer el profile, nosotros se lo vamos a mandar a las personas de la aplicación.

Para que Google sepa que nuestra aplicación existe, y para hacer ese tipo de conexión, necesitamos inscribirnos en la API de Google OAuth.

Básicamente es registrarnos para que Google sepa que existimos, y que nosotros vamos a tener personas que quieren OAuth con nuestra aplicación.

Registrarse con la API de Google OAuth es un poco complicado, así que empecemos ahora y demosle un buen tiempo para poder hacerlo.

### clientID

Es a lo que nos referimos normalmente como un **token público**, esta totalmente bien si alguien en el mundo tiene acceso a ese **clientID**, no hay ninguna clase de problema, lo único que hace es identificar nuestra aplicación a los servidores de Google y está totalmente ok si compartimos ese token con el resto del mundo.

### clientSecret

Es un pedazo de información muchisimo mas secreta, como evidencia la palabra "secret".

Entonces este ***clientSecret*** es algo que no queremos compartir con nadie, ni apropósito, ni sin querer.

Si alguien tiene acceso a nuestro ***clientSecret*** de la nada van a recibir privilegios elevados dentro de nuestra cuenta de OAuth, que en definitiva seria el peor escenario.

¿Por qué esto es relevante, por qué lo hablamos ahora?

Porque nosotros vamos/estamos utilizando git para hacer source control, entonces si decidimos subir nuestro proyecto a git en este momento, todas las personas que tengan acceso al repositorio van a tener acceso al clientSecret y lo van a poder leer.

En esta seccion vamos a encontrar la manera de asegurar correctamente nuestro clientSecret dentro de nuestro proyecto, para asegurarnos de no pushearlo a GitHub.

Para resguardar nuestro clientSecret, creamos una carpeta aparte en nuestro servidor llamada **config**, que dentro de esta hay un archivo que se llama **keys.js**.
```
modules.exports = {
    googleClientID: 'ewq4321',
    googleClientSecret: '1234qwe'
}
```

Lo que hicimos aca rapidamente fue crear una declaracion `module.exports`, esto creo un objeto y fue asignado al `module.exports` que nos deja utilizar ambas propiedades en otro archivo, como es en el caso de `index.js`.

Entonces la declaracion `module.exports` va a ser vista un par de veces a través del curso que utilizamos para exportar el código y hacerlo que esté disponible para otros archivos en nuestra aplicación.

Para terminar agregamos nuestro `keys.js` a nuestro `.gitignore` file y ahora podemos estar seguros de que nuestras llaves van a estar aseguradas. 

En el objeto que creamos anteriormente podemos ver que las propiedades fueron creadas con el nombre Google, esto significa que nosotros podríamos tener `clientID` y `clientSecret` de Facebook, Spotify, Twitter, etc. `modules.exports` puede abarcar varias estrategías, si tuvieramos solamente `clientID` o `clientSecret` y agregaramos otro `clientID` o `clientSecret` en líneas posteriores esto las sobreescribiría y tendríamos problemas de autentificación.

Ahora que tenemos nuestras llaves, podemos pasarle estas llaves como parametros a la función `GoogleStrategy()` para que Google pueda apropiadamente identificar nuestra aplicación a la API de Google OAuth.

Para importar las keys a nuestro archivo `index.js` necesitamos utilizar la sintaxis de CommonJS y declarar una variable `const keys = require('./config/keys')`, en archivos que terminan con `.js` no hace falta poner la extensión.
```
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
    callbackURL: '/auth/google/callback'
    }, 
    accessToken => {
        console.log(accessToken);
    })
);
```

`callbackURL: '/auth/google/callback'`, esta va a ser la ruta a la cual el usuario va a ser enviado luego de temrinar le proceso de autentificación. Más tarde vamos a agregar un `router handler` para manejar el proceso cuando un usuario vuelve de autentificarse.

---

### Route Handler:
```
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);
```
`app`, dijimos que esto se referencia al objeto de EXpress.
`.get`, es el tipo o método de request que queremos handlear, y como en este caso queremos handlear un request "HTTP".
`first argument` en el path que queremos handlear, que en este caso es `/auth/google`.
`second argument` es un código que queremos que se ejecute cuando un usuario llega a esta ruta, pero esta vez le vamos a decir a Express que involucre a `passport` y básicamente pasar el usuario a `passport` donde van a ser kickeados al flow de autentificación.

Como un segundo arumento vamos a escribir `passport.authenticate`, el primer argumento que le vamos a dar es `'google'`, y el segundo argumento va a ser un `{objeto}`, que va a tener una propiedad `scope`, que va a ser declarado con un array que contenga `profile` e `email`.

Entonces cuando un usuario llega al path `'/auth/google'`, queremos kickearlos al flow de OAuth, que está totalmente manejado por PassportJS, le decimos, ***"che passport, intentá comunicarte con el usuario que viene en esta ruta y utiliza la estrategía llamada Google"***

Ahora, algo confuso con ***Google*** y ***PassportJS*** es que en ningún momento nosotros le dijimos a PassportJS específicamente que utilizará la estrategía llamada ***google***, dentro del metodo `.use`, `GoogleStrategy` internamente tiene un identificador llamado `google`, y passport sabe que este tiene que agarrar este string y pasarlo a esa estrategía que nosotros ya habíamos configurado.

`scope` en este caso le especifica a los servidores de google, qué información queremos tener del usuario, en este caso queremos `profile` e `email`, estos strings no son random, **google internamente tiene diferentes scopes o permisos a los que les podemos pedir información**, en este caso solamente quermeos *profile e email*.

Ahora que configuramos nuestro route handler, podemos probar los cambios que hicimos, nos va a devolver un error `Cannot GET /auth/google/callback`, pero esto es intended.

`redirect URI` es a la dirección que google debe de mandar al usuario después que da permiso a `auth/google/callback`,

`clientID` es pública, esto puede ser un problema ya que las personas podrían utilizar nuestra `clientID` para autentificarse con google y pedrile distintos strings de informacion, o scopes en este caso. Entonces la gente mala podria enganar a los usuarios para que hagan click y piensen que se estan loggeando en un lugar seguro y no lo estan haciendo, es por eso que nosotros tenemos que autorizar ciertas URIs para que google sepa donde redirigir a nuestro usuario.

`Cannot GET /auth/google/callback`, nos devuelve este error porque no tenemos un handler para este path, pero si miramos la URL que nos devolvio dice claramente que `localhost:5000/auth/google/callback` no existe, claramente Google nos devolvió a nuestro servidor.

Aunque, nosotros todavía no tenemos un route handler seteado para manejar un request que vuelve de `auth/google/callback`, si también vemos el query string vamos a ver una propiedad llamada `code`, este es un código especial que podemos utilizar en nuestro servidor para hacer un request a Google para conseguir inforamción sobre el usuario.

```
app.get('/auth/google/callback', passport.authenticate('google'));
```

Cuando el usuario vuelve a `'/auth/google/callback'`, passportJS va a ver que hay un código dentro de la URL, y va a decir "ah, el usuario no está tratando de autentificarse por primera vez, está intentando transformar el código a otra cosa", "no voy a kickear al usuario al OAuth flow, si no que le voy a tratar de devolver la información".

Ahora como tenemos un route handler para `'/auth/google/callback'`, y sabemos que la estrategía de passportJS le va a devolver el token a `GoogleStrategy` y va a hacer un `console.log(accessToken);` que viene de una arrow functio, en este caso me estaba devolviendo un error, pero si estaba printeando el `accessToken` a mi WSL, el problema estaba en que mi función la que me devolvía el `accessToken` no tenia nada más después de eso.

Al agregarle parámetros extra como por ejemplo `accessToken, refreshToken, profile, done` y luego hacer `console.logs()` de cada uno de ellos podemos ver que Google efectivamente nos esta devolviendo la información que pedimos.

Si nosotros hubieramos pedido permiso para leer la lista de contactos del usuario o algo asi, tendriamos que modificar algo de la informacion del usuario. Ese es el proposito del `accessToken`, esencialmente el token es lo que nos deja llegar a Google y decirle "En el pasado este usuario dijo que podriamos leer su informacion, y que podriamos agregar o borrar emails dentro de su casilla de correo, este es el accessToken que lo prueba." El accessToken es algo importante pero realmente no lo estamos usando para nada dentro de nuestra aplicacion, asique no nos preocupa mucho.

Ahora el `refreshToken` nos dejaría actualizar el token. El `accessToken` automaticamente expira despues de una cantidad de tiempo, y podemos darle un `refreshToken` que nos deja automaticamente actualizar el `accessToken` que esencialmente nos deja entrar a la cuenta del usuario por una cantidad de tiempo.

Denuevo, no estamos utilizando el `accessToken`, entonces realmente no nos importa actualizarlo ahora.

Ahora, el profile del cual recien hablamos tiene toda la informacion identificable. Asique eso es loq ue nos importa ahora.

---

### Nodemon

Vamos a instalar un módulo para que cada vez que vayamos a agregar código a nuestro archivo, el servidor se resetee solo y no tengamos que hacerlo nosotros.

`npm install --save nodemon`

Al nosotros agregar `Nodemon` tenemos que agregar en nuestro `package.json`, debajo de nuestros `scripts` un nuevo script llamado `"dev: "nodemon index.js"`, esto lo que va a hacer es que cada vez que hagamos un cambio, nodemon se encargue de reiniciar nuestro servidor para aplicar los cambios.

Esto es de gran ayuda por si viene un programador nuevo y le ahorraríamos el tiempo que le va a llevar apagar y prender el servidor para ver los cambios reflejados.

Para iniciarlo, ahora tendriamos que utilizar:
```
npm run dev
```
Nodemon nos va a mostrar en que archivo esta funcionando.
```
[nodemon] starting `node index.js`
```

Y la próxima vez que guardemos el archivo lo vamos a ver reflejado en la WSL.
```
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
```

---

### Server Structure Refactor

En la comunidad de Express no hay buenas prácticas para acomodar tu proyecto, asique vamos a ver una forma, no es la mejor pero esta forma va a funcionar de una manera correcta para este caso.

![http](https://i.ibb.co/0r7TcHt/image-2024-10-17-124818297.png)

Tenemos nuestro ***servidor*** en general, esto corresponde a la carpeta en donde tenemos nuestro proyecto.

Tenemos la carpeta ***config*** que esta contiene todas las llaves necesarias para que podamos conectarnos con las distintas APIs.

Vamos a agregar la carpeta ***route*** que va a tener los handlers que van a estar agrupados por proposito. En este momento tenemos dos archivos que manejan la autentificación, estos los podemos poner en el mismo archivo, ya que hacen cosas parecidas.



La carpeta ***services***, va a tener un toque de lógica acá que ayuda a que nuestra aplicación de Express se configure de la manera correcta. Y cuando tengamos nuestro directorio de ***services***, se espera que probablemente tengamos un archivo ***passport.js*** donde vamos a poenr toda la configuración de ***passport***, como por ejemplo la declaración de `passport.use(new GoogleStrategy())`
```
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);
```

Esto parecer ser un ***route handler***, pero en realidad es parte de la configuracion de passport. Y passport es una clase de servicio para nuestra aplicacion.

Vamos a tener otras multiples carpetas en el futuro, pero estas nos van a ayudar a settear las bases de la aplicacion.

```
const authRoutes = require('./routes/authRoutes');
authRoutes(app);
```

Esto se puede refactorizar de una manera mas simple. Debido a que nosotros estamos declarando la variable `authRoutes` que se le esta asignando nuestros dos `route handlers` que se encuentran dentro del archivo `authRoutes`, la variable `authRoutes` es superflua, realmente no la necesitamos.

`require('./routes/authRoutes')(app)`

La declaracion `require` importa la funcion que se encuentra dentro de `./routes/authRoutes` y la declaracion `(app)` la ejecuta automaticamente despues de traer las funciones.

### Theory of Authentication

Cuando nosotros hacemos un request a un sitio web para loggearnos, este sitio web utiliza la autentificación adecuada, el problema radica, cuando nosotros queremos hacer otro request, como por ejemplo: ver los posts que hicimos en el pasado. Esto no es tan simple como que, "ah, me loggee hace rato entonces seguramente me va a reconocer", no. La validación de la autentificación está en algo que se llama cookies o mejor llamados tokens. Estos son los que nos proveen de un string único que nosotros utilizamos (por nosotros me refiero a la autentificacion por debajo) para que el servidor nos reconozca. Entonces cuando hacemos el request para entrar al servidor, nos van a asignar un token unico, el cual nosotros despues utilizariamos para acceder a otros request, como ver los posts que hicimos, nuestra listas de amigos, etc.

### Cookie Based Authentication

Dentro de nuestra aplicacion vamos a utiliar algo que se llama ***Cookie Based Authentication***, lo que esto significa es que cuando nos hacen un request a nuestro servidor y se quieran loggear, el cual lo pueden hacer a través de un email y password, o en este caso con Google OAuth. Después que pasan el proceso OAuth, nosotros vamos a generar una pieza de información que ayude a identificar el request. En la respuesta que nosotros envíamos para ese primer request vamos a incluír un ***header***, ***header*** va a tener la propiedad llamada `SetCookie` y va a estar configurada para ser un token random.

Este token es el que va a identificar unicamente al usuario, entonces cuando el browser ve esta respuesta, y ve el header del request, va a ver que tiene la propiedad de `setCookie`, el browser automaticamente va a descomponer el token y lo va a guardar en la memoria del browser, luego el browser automaticamente va a asignar a esa cookie con cualquier request consecuente al servidor.

Y así en los request que sigan, el servidor va a ver la cookie y va a decir, "ah, sos la misma persona a la cual le di este token, seguramente sos la misma", acá están los request que me estas pidiendo.

La mayoría de todo el proceso de las cookies las va a manejar el browser, realmente nosotros no tenemos que hacer mucho, pero si tiene algunas desventajas que todavía no fueron especificadas.
Lo que tenemos que saber es que el lado React de nuestra aplicación tampoco le va a importar mucho las Cookies.

---

### Log in

Cuando nosotros queremos loggearnos a una aplicación nueva tenemos que inscribirnos y proveer de un email y password o tenemos que atravesar un proceso de OAuth.

Vamos a hablar de esto empezando sobre como funciona con email y password.

Vamos a hacer 2 videos, donde la primera mitad va a ser un *high-level overview* en como utilizamos OAuth para loggear a los usuarios y luego vamos a ver todo el proceso en gran, gran detalle y explicar muy bien que vamos a tener que hacer dentro de nuestra aplicación para construir esto.

### Log in with email and password

El usuario llega a nuestra aplicación a registrarse con email y password. Un tiempo pasa y ellos fueron desloggeados automáticamente. Este usuario se loggea con su email y password y al hacer una comparación el servidor detecta que, ya que tanto el email como el password son iguales, esta persona es loggeada. Nosotros tenemos que guardar esas dos piezas de información en algún lado dentro de nuestro servidor.

Al mismo tiempo, la pieza que identifica al usuario en un modo de loggeo con email y password es que ambas credenciales sean iguales.

### Log in with OAuth

La diferencia con un loggeo convencional, es que en este caso al utilizar OAuth, el servidor guarda la información del usuario, pero no tiene como compararla, a diferencia de cuando se loggea con el mismo email. La única forma de compararla es con una especie de token de identificación que está en el google profile del usuario. Detecta que si, es el mismo token, confirma que es la misma persona y te deja loggear.

Entonces lo que nosotros tenemos que lograr, es que en base al request del usuario, que trata de entrar, ese usuario tiene un identificador, o tendra un identificador unico que despues tenemos que utilizar para comparar si es correcto loggear al usuario o no. Es decir: si el token que nos esta entregando el request del usuario coincide con el token que nosotros teniamos de cuando hizo el loggin anteriormente, lo dejamos entrar.

En este caso nosotros podriamos utilizar el email para poder identificar al usuario, y si el email del usuario coincide con el email que tenemos, lo dejaríamos entrar.

Al nosotros ver la información que nos devuelve al solamente hacer un scope de `profile` e `email`, nos devolverá la ID del usuario de google, la cual es única para todos los usuarios y jamás cambiará independientemente de lo que haga el usuario.

Lo que vamos a hacer nosotros es que cuando las personas entran a nuestro sitio, van a ser redirigidas a Google para loggearse con Google OAuth, después esta persona será redirigida a nuestra aplicación junto con el ID del usuario de Google, finalmente para loggearse en nuestra aplicación vamos a tomar el ID por segunda vez y lo vamos a comparar con el ID del usuario que loggeo a esa cuenta anteriormente, si la comparación resulta en iguales, lo dejamos loggear.

Por último, nosotros estamos poniendo la confianza en que google jamás cambiará el ID de cada usuario. En el caso de que esto pase, realmente se rompería la aplicación y ya no se podría loggear a las cuentas.

---

![http](https://i.ibb.co/3dgPYVj/image-2024-10-19-185540541.png)

### Flow

El usuario viene hacia nuestro servidor con un ***Google Profile***, el usuario pide que lo inscribamos en nuestro sitio, luego pasa al lado ***MongoDB*** de la aplicación y vamos a crear un nuevo registro para el nuevo usuario (123). Luego a ese usuario le vamos a asignar una Cookie dentro de su cuenta y esa Cookie será enviada a el browser.

Luego, el usuario puede hacer cualquier request que quiera, y cuando ellos hagan un request, nosotros vamos a poder ver que una cookie que esta asignada al usuario (123) está haciendo un request.

Cuando ellos hacen click en el boton de logout, nosotros vamos a "unsettear", "invalidar" o "expirar" su cookie para desloguearlo.

Lo importante pasa ahora, cuando el usuario intentá entrar nuevamente a la aplicación: el hace click en login y el nos proveerá de su google profile y nosotros lo vamos a comparar con los registros que tenemos en nuestra MongoDB, en caso de encontrar el ID de usuario, lo vamos a loggear y le vamos a settear su cookie que tenia previamente, en el caso de que no, lo inscribimos asignandole una nueva cookie.

Este proceso se condensará en el primer paso, ya que cuando intente loggear, siempre lo vamos a buscar en los registros de nuestra base de datos.

### Mongo DB

Previamente habíamos dicho que la API de Express y de Node se van a comunicar con nuestra base de datos ***MongoDB*** para guardar registros y sacarlos.

La librería llamada ***mongoose.js*** es una libreria opcional que vamos a usar en este curso, el unico objetivo de esta librería es hacernos la vida más fácil cuando trabajamos con MongoDB, generalmente es opcional, pero se recomienda mucho para automatizar ciertos procesos que vamos a estar utilizando al trabajar con ***MongoDB***.

### How Mongo stores records

Nuestra base de datos ***MongoDB*** puede tener muchas colecciones, esas colecciones pueden guardar muchos registros.
En una ***instancia*** de ***MongoDB*** podríamos tener una colección de **users, posts y payments** y dentro de esas, tenemos la información de los usuarios.

Cada pieza de información esencialmente es una pequeña pieza de JSON, un objeto de ***JavaScript plano***.

Una de las caracteristicas que define a MongoDB es el hecho que se le refiere como "schemaless", en otras palabras, dentro de cada colección de datos, cada registro puede tener su propio set de propiedades. Entonces vamos a ver que por ejemplo, el primer record tiene la propiedad de `height` y la segunda coleccion, no la tiene.

Este es un contraste directo a las base de datos tipo SQL o las bases de datos relacionales, donde tradicionalmente cada registro tiene que tener las mismas propiedades.

Entonces, en las SQL o relacionales, deberia de tener definido las mismas propiedades como `ID`, `name`, `height` y `age`.

Entonces esa es ***una de las diferencias que distingue a MongoDB de otras bases de datos***, como ***MySQL*** o ***Postgres***.

Recordemos, tenemos muchas colecciones de datos y cada colección de datos tiene diferentes registros.
Podemos pensarlo en cada registro como un objeto de JavaScript con un par de diferentes valores.

Recién dijimos que en MongoDB tenemos un monton de colecciones diferentes y cada colección tiene diferentes registros que representan este tipo de estrucura en el mundo de JavaScript, o en el mundo de Express o NodeJS que vamos a escribir.

Para eso tenemos dos conceptos importantes que son implementados por ***Mongoose***.

Un `model class` creado por ***Mongoose*** representa en su totalidad una ***colección de MongoDB***, entonces el `model class` es utilizado para acceder a una colección de ***MongoDB***.

Recordemos que las `model instances` son `JavaScript objects` que representan solamente un registro que se encuentra dentro de la colección.

En la práctica terminamos con un `model class` representando una colección dentro de MongoDB y luego terminamos con muchas instancias, cada uno representando los records dentro de la colección de MongoDB.

Entonces: un `model class` dentro de JavaScript/Mongoose es una `collection` para mongoDB.

Cada `model instance` dentro de JavaScript/Mongoose, esto representa uno de los varios registros que tenemos dentro de nuestra base de datos.

Por último, una `class` esta relacionada a una `collection`, tenemos un monton de `instances` de las cuales cada una representa un `individual record`.

Es mucho más fácil conseguir una versión de MongoDB que funcione cuando está hosteada remotamente, que una que trabaje en nuestra propia computadora, vamos a utilizar una third party application para hostear MongoDB.

Y en nuestra computadora vamos a tener nuestra Express API y nuestra aplicación.

---

### Destructuring

```
const mongoose = require('mongoose');
```

Esto puede ser escrito dela siguiente manera, utilizando ES15 destructuración.

```
const { Schema } = mongoose;
```
La linea de arriba explica que el objeto `mongoose` tiene una propiedad llamada `Schema`, eso es lo que indican los `{}`.

Vamos a estar utiliazndo desestructuracion a traves del curso.

---

***Cuando utilizamos MongoDB, dijimos que no es necesario que todas las `model class` tengan las mismas propiedades. Pero, al utilizar `mongoose` digamos que estamos suprimiendo esa caracteristica, por eso requiere que nosotros definamos las propiedades por adelantado, y eso es lo que hace `Schema`***

Vamos a utilizar el objeto `Schema` para crear un esquema para esta nueva `collection`.
```
const userSchema = new Schema({ googleId: String });
```
Antes habiamos visto que la googleID era un set de numeros, pero están wrappeados dentro de un string.

Ahora que tenemos nuestro esquema, tenemos que crear nuestra `model class` y para eso vamos a utilizar: 
```
mongoose.model('users', userSchema);
```

`users` es el nombre de la `collection` y el segundo argumento es el nombre del esquema que acabamos de crear, en este caso `userSchema`

Podemos agregar y sacar facilmente propiedades de nuestro esquema sin preocupacion alguna.

![html](https://i.ibb.co/C6RXxzG/image-2024-10-25-161918279.png)

Cuando utilicemos `mongoose model classes` no necesitamos hacer `require`. Pero puede ser que en algunos ambientes de desarrollo, nosotros tengamos que utilizar varias veces el mismo `model class`, por lo que puede resultar en que mongoose, se confunda y piense que estamos tratando de crear multiples instancias del mismo modelo. Es por eso que vamos a hacer `require`, pero de una manera distinta.

---

Cuando entramos a `localhost:5000/auth/google` más de una vez, en nuestra base de datos se duplica los registros y en este momento hay dos instancias del mismo usuario con el mismo `google id`, generando así un conflicto, lo que nosotros tenemos que hacer un route handler en el caso de que ya esté creado el usuario y  otro para cuando no esté creado.

`user.findOne({ googleId: profile.id })` cada vez que llegamos a nuestra base de datos, hacemos una accion async, nosotros no podemos asignar le valor de `user.findOne({ googleId: profile.id })` a una variable ya que no devuelve un valor, por así decirlo, devuelve una `promise`, una `promise` es una herramienta que nosotros usamos en JavaScript para manejar código `async`, no vamos a estar utilizando mucho las promesas en este curso pero vamos a estar utilizando una caracteristica avanzada de JavaScript que fue creada en ES17 para hacer que las `promises` se vean mejor.

`user.findOne({ googleId: profile.id })` devuelve una señal, o una indicación de que fue completada, vamos a chainear una declaración 
```
.then((existingUser) => {

})
```
La `arrow function` va a ser llamada con cualquier usuario que fue encontrado, si es que existe.

Si es que el método llamado `.findOne({})` no encuentra nada, entonces el método `.then(() => {})`, va a devolver `null`, vamos a preguntar si `existingUser` existe.

```
        user.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                // we already have a record with this profileID
            } else {
                // we dont have a user record with this ID, make a new record!
                new user({ googleId: profile.id }).save();
            }
        })
```
`existingUser` es un `model instance` que representa si el `profileID` fue encontrado, ahroa si no fue encontrado, el argumento `existingUser` va a ser igual a `null`, para ver si existe podemos hacer `if (existingUser){}` *"if existingUser exists"*, significaria que ya tenemos un registro con ese `profileID`, `else` queremos crear un nuevo usuario, lo que significa que no tenemos un usuario con ese `profileID`, y ahora lo que hacemos es mover nuestra declaracion de `new user({ googleId: profile.id}).save` al `else`, para cuando no encuentre el usuario con el `profileID` que nos dieron, se cree automaticamente uno.

```
if (existingUser) {
// we already have a record with this profileID
done(null, existingUser);
```

Para que el workflow continue, y vuelva al proceso de autenticación, tenemos que utilizar algo llamado `done`, luego, le tenemos que pasar dos argumentos a `done`, el cual uno es `null` que representa en caso de que no lo haya encontrado, que eso se espera y que no significa un error, y luego pasarle `existingUser`, que le va a pasar el `profileID` que fue encontrado o que fue creado.

Para el segundo caso, hay que hacer algo un poco mas complejo, cada vez que nosotros guardamos datos a nuestra base de datos Mongo, es una accion `async`, no queremos llamar `done` hasta que sepamos con fundamentos de que el usuario fue creado exitosamente en la base de datos, entonces para tener algo que nos de la confirmacion de que fue creado exitosamente tenemos que chainear una declaracion `.then`, este va a ser llamado con el nuevo usuario que fue recien guardado.

`new user({ googleId: profile.id }).save().then(user => done(null, user));`

`.then(user => done(null, user));` se va a utilizar `user` como parametro de la funcion del usuario que fue recien creado, y luego `done(null, user)`, le pasamos `null` primero y luego el usuario que fue recien guardado `user`.

`new user({ googleId: profile.id })`, esto crea un nuevo `model instance`.
`.save()` guarda la instancia.
`.then(user => done(null, user));` esto es otro `model instance`.

En este momento trabajamos con dos `model instances`, que estos representan el mismo registro dentro de nuestra coleccion, pero siempre utilizamos el que nos proveen dentro de la callback, ya que pudo haber sufrido cambios al llegar.

---

### Serialize User

```
passport.serializeUser((user, done) => {
    done(null, user.id);
});
```

`serializeUser` es una función que viene ya creada con **passport**, al nosotros pasarle una `arrow function` con los parámetros `user` y `done` podemos hacer `return` de `done` como un **callback** con los argumentos `null` que básicamente es para los errores, en caso de que haya alguno y `user.id`.

`user.id` no representa el `profile.id` de **google*, está representando el identificador único que es creado en la base de datos.

Esto se debe a que podemos asumir que no todas las personas van a loggear con **google**, y que todas las personas van a tener un `user.id` único que es asignado automáticamente a través de **mongoDB**.

Nosotros podriamos cambiar el código de arriba y utilizar directamente el `profile.id` que se nos proveerá por **google**, pero en el caso de que alguna persona no loggee con **google**, tendríamos un problema al momento de loggearlo.

---

### Deserialize User
```
passport.deserializeUser((id, done) => {
    user.findById(id)
     .then(user => {
        done(null, user)
     });
});
```

Atento a como escribimos `serialize` y `deserialize` ya que es fácil equivocarnos, en el caso de que nos equivoquemos, el servidor nos arrojará un error que dice ***"serialize/deserialize isn't a function"***.

`deserializeUser()` es una función que el primer argumento que toma, es el token especifico que previamente habiamos asignado a la cookie, que para nosotros en este caso es el `user.id`.

Entonces cuando `deserializeUser()` es llamado, vamos a obtener lo que sea que este en `user.id`, en este caso, la `id`.

Luego, como siempre con **passport** tenemos que utilizar la función callback llamada `done` como segundo argumento.

En el caso anterior `user` era un `model instance`, un modelo de `mongoose`, lo transformamos en `user.id` y ahora estamos haciendo exactamente lo contrario, estamos tomando un `id` y transformandolo en un `model instance`

Entonces queremos buscar en toda nuestra colección de usuario que existe dentro de nuestra base de datos y luego de que encontramos un usuario particular, devolveriamos `done` con ese usuario.

Primero, como queremos buscar algo dentro de nuestra base de datos, tenemos que buscarlo en nuestra `model class`, en este caso `user`.

`user.findById()`, antes habiamos hecho un query asi, pero utilizando `user.findOne()`, esta nos dejo pasarle un criterio de busqueda que devolvio el primer registro que coincidia con esa criterio.

`user.findById(id)`, nos deja pasarle el `id` del registro que queremos encontrar.

Recordemos que acceder a la base de datos siempre es una acción `async`, entonces tenemos que asumir que nos devuelve una `promise` que será resuelta luego de que se encuentra un usuario con la `id` que se nos dió.

Luego, chaineamos una declaración `.then(`, que va a ser llamada con el `model class` `user`, lo que sea que hayamos sacado de la base de datos `=> {})` y vamos a utilizar la `callback function` `done`, con el usuario que acabamos de sacar con `done(null, user);`
```
   .then(user => {
    done(null, user)
});
```

Ahora tenemos la habilidad de tomar el `user model`, `model class`. Poner algún dato identificativo dentro de la cookie, y luego sacarla y transformarla en un usuario para usarla en el futuro.

Para terminar, **no podemos solamente definir serializeUser y deserializeUser**, también le tenemos que instruir a **passport** que queremos que maneje toda la autenticación utilizando cookie.

Recordemos que **passport** es una librería general, muy básica para ayudarnos a manejar la autenticación.

Tiene muchas maneras diferentes de trackear un usuario, una de ellas es haciendo uso de las cookies.

Lo último que tenemos que hacer es indicarle a **passport** que tiene que utilizar cookies para trackear al usuario que esta actualmente loggeado.

----

### Enabling Cookies

Fuera de la caja, Express no tiene la mas remota idea de como manejar las cookies, entonces vamos a instalar una libreria que nos ayuda en esto llamada `CookieSession` para manejar las cookies en nuestra aplicacion.

Para instalarla vamos a matar nuestro servidor con `^C` y escribimos `npm install --save cookie-session`.

Vamos a ir a `index.js`, recordemos que este archivo es donde hacemos el inicio de nuestra aplicación, esta sería un buen lugar para decirle a Express que tiene que utilizar cookies dentro de nuestra app, vamos a requerir dos librerias al principio del archivo.
```
const cookieSession = require('cookie-session');
const passport = require('passport');
```

`const passport = require('passport');`, estuvimos diciendo que tiene que mantener track de nuestro usuario, o el estado de la autenticacion del usuario utilizando cookies, y le vamos a decir que tiene que hacer eso al habilitar las cookies, pero para que le den bola a las cookies primero tenemos que hacer uso de la libreria de `cookieSession` con `const cookieSession = require('cookie-session');`.

Una es para habilitarlas `const cookieSession = require('cookie-session');`.

Otro es para usarlas `const passport = require('passport');`.

Con esta línea, le vamos a decir a Express que tiene que utilizar cookies en nuestra aplicación.

```
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
```

`app.use()` esta es una funcion y le vamos a pasar `cookieSession()`, vamos a llamar `cookieSession` con `()` y le vamos a pasar objetos de configuracion.

En este caso, espera dos objetos: `maxAge` y `keys`

`maxAge` es cuanto tiempo esta cookie puede existir en el browser antes que expire. En este caso vamos a utilizar 30 días, y el único problema aca es que espera el tiempo, en milisegundos. `30 días * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos`

`keys` servira para encriptar nuestra cookie, siempre que mandemos o utilicemos esta cookie, va a estar encriptada para que el usuario no pueda manualmente cambiar el `user.id` y de alguna manera, fakear que son otra persona.

Realmente, siempre que vemos el objeto `keys`, deberiamos tenerlo en un lugar seguro, como en este caso `./config/keys`, y ahi la vamos a agregar.

`cookieSession` nos deja definir multiples `keys` y si lo hacemos, pickeara alguna random para encriptar nuestra cookie, para mas seguridad.

Lo último que tenemos que hacer, es decirle a **passport** que utilice cookies para manejar la autenticacion, y para eso vamos a agregar dos declaraciones debajo de la declaracion de cookies.

```
app.use(passport.initialize());
app.use(passport.session());
```



# A deeper Dive

Primero vamos a hablar de nuestras declaraciones `app.` que pusimos en nuestro archivo `index.js`, asi que tenemos declaraciones con `app.use()` y en cada uno le pasamos un objeto totalmente diferente.

Cada una de estas declaraciones están creando el middleware dentro de nuestra aplicación.

`middleware` son funciones chiquitas que pueden ser usadas para modificar las solicitudes a nuestra aplicación antes que sean enviadas a nuestros `route handlers`.

![html](https://i.ibb.co/ZxsVVzK/image-2024-11-04-155518752.png)

Cada vez que una solicitud llega a nuestra aplicación, esa solicitud es tomada y es enviada al `cookie session middleware`.

Luego, también es pasada por ambos `middlewares` de **passport**

Entonces esos tres `middlewares` van a tomar la solicitud entrante y van a hacer unos ajustes chiquitos.

Anteriormente dijimos que:

`cookie sessions` jala información fuera de la `cookie`, o mejor dicho le saca información a la `cookie`.

Luego, `passport` jala el `userID` de esa `cookie`.

`middlewares` se enfocan en el pre-procesamiento de la solicitud entrante antes de que sean enviadas a los diferentes `route handlers`.

Entonces es un buen lugar para poner un poco de lógica que es normal en varios route handlers.

Para nuestra aplicación, es fácil asumir que queremos autenticar cada `route handler` que tenemos, porque queremos estar informados sobre cada usuario que llega a nuestra aplicación, entonces en lugar de agregar lógica a cada `route handler`, podemos simplemente agregar los `middlewares` una vez y van a ser automaticamente utilizados para cada solicitud que llega a nuestra aplicación.


![html](https://i.ibb.co/Xb2SYBR/image-2024-11-04-161627491.png)

Ahora, la primera pregunta seria, ¿qué pasa sí yo no quiero correr estos middlewares en todos los `route handlers`?

Podemos configurar los `middlewares` de tal manera que solamente van a ser utilizados por una porción de nuestros `route handlers` si es que asi lo deseamos.

Y vamos a ver un ejemplo pronto de esto.

![html](https://i.ibb.co/J7GpMwM/image-2024-11-04-162122744.png)

`request from browser:` solicitud que viene a nuestra aplicación.

`app object:` es creado por la librería Express
el request es enviado a nuestros distintos
***middlewares*** que tenemos en nuestra aplicación.

luego es enviado a los diferentes ***route handlers*** y procesamos lógica, información, u otras cosas, sea lo que sea. Formulamos una respuesta y luego la devolvemos con lo que sea que nos hayan pedido de información.

---

### req.session

    app.get('/api/current_user', (req, res) => {
        // res.send(req.user);
        res.send(req.session);
    });
```
{"passport":{"user":"671c23c1d837f40907f78c28"}}
```

La librería de `cookieSession` extrae la información fuera de la `cookie` y la asigna a propiedad `req.session`.

Entonces `req.session` contiene la información que `passport` está intentando guardar dentro de la `cookie`.

Entonces cuando le pasamos el `request object` a `passport`, en realidad no estamos viendo a la `cookie`, si no que estamos viendo internamente a `req.session`. 

Entonces ve a `req.session` y saca la información relevante y la pasa todo eso a `deserializeUser` y a lo demás.

No es que `passport` esté populando la información de nuestro objeto en `req.session`, si no lo que en realidad sucede es que:

`res.send` con el parametro `req.session` va a llenar de información a la `cookie` y la guarda en nuestro objeto `req.session`.

Para que luego `passport` venga y saque la información de la `cookie` y nos devuelva en este caso la `session` del usuario, que en este caso representa la ID única que está en la base de datos.

```

_id:ObjectID('671c23c1d837f40907f78c28')
googleId:"109371441921135366693"
__v:0
```

La librería que instalamos para manejar toda nuestra información en la `cookie` es llamada `cookieSession`.

Si vamos a la documentación de express y nos fijamos como establecer sesiones dentro de nuestra aplicación express, te van a reocmendar dos librerias diferentes.

Entonces vamos a hablar de la diferencia entre `cookie session` y la otra libreria llamada `express session`.

Ambas librerías hacen lo mismo, pero lo hacen de una manera distinta.

Ya sabemos como `cookie-session` funciona, podemos asignar una cantidad de información a la `cookie session` como middleware, y luego toma toda la informacion de la cookie y la asigna a la propiedad `req.session`.

Ahora vamos a hablar sobre el middleware `express session` y porque es tan diferente.

La diferencia entre `cookie-session` y `express-session` es como se guarda la información dentro de la cookie.

Cuando hacemos uso de la libreria `cookie-session`, decimos que la cookie ES la `session`, esta cookie tiene toda la información con respecto a la sesión.

Contiene la `userID`, entonces en nuestra aplicación: cuando queremos encontrar cual es la ID del usuario actual, buscamos en esa cookie, decodeamos el valor que está ahí y el valor exacto dentro de esa cookie es lo que vimos en el browser que se imprimió al utilizar `req.session`.

### ¿Cómo funciona express-session?

Esta librería se comporta de una manera diferente, express-session funciona guardando una referencia a una sesión dentro de la cookie.

Entonces cuando hacemos uso de una express-session, esta va a guardar dentro de la sesión una ID.

Entonces cada vez que hagamos una solicitud a express-session, esta va a tomar el ID que se encuentra dentro de esa cookie y va a buscar toda la información de la sesión, que puede contener cantidades de información arbitraria.

Entonces para hacerlo más claro: `express-session` va a ver la cookie y solamente va a ver el ID, luego vamos a ir al `session store` y vamos a buscar ese ID particular y nos va a retornar un objeto que contiene toda la información relevante.

La diferencia entre `cookie-session` y `express-session` es que en `cookie-session` toda la información es guardada directamente en la cookie.

`express-session` guarda toda la informacion en un server remoto del lado del servidor.

Entonces cuando una solicitud entra, toma la ID fuera de esa `session` y luego jala toda la informacion relevante del `session store`.

![html](https://i.ibb.co/CJT3N3z/image-2024-11-04-172538919.png)



---


`cookie-session` estamos limitados a 4KB de información.
`express-session` no estamos limitados a ningun tamano de informacion

`cookie-session` lo maneja nuestro servidor, mucho mas simple de implementar.

---

### Dev vs Prod Keys

Hay que tener un set distinto de keys para dev y para prod.

Separar los environments hace que en el caso de que nos roben las credenciales del environment de dev, podamos simplemente borrar el environment y crearlo otra vez con otras credenciales.

En el caso de prod, nosotros guardamos las credenciales en heroku, en nuestro casi  las guardamos en: 

Esto hace que podamos tener dos data bases, y podamos experimentar en la base de datos dev.

No utilizar las mismas credenciales para dev y para prod.

### Authorized JavaScript origins
### Authorized redirect URIs

Como estamos tratando con un ambiente de prod, va a tener que estar linkeado con nuestra RENDER URL.

 Authorized redirect URIs -> está bien que del flow de google Oauth lo redirija acá´.

 Authorized JavaScript origins -> de donde el usuario va a ser redirigido al google oauth flow

git add . -> agrega todo o por archivo especificando path
git status -> lo que esta en cola para commitearse
git commit -m -> commit
git push -> para publicarlo

( si lo hago desde la consola de vs code puede ser que no pida crendeciales)

---

Access Blocked: esto se debe a que en la Google Strategy está utilizando un valor relativo, y cuando pasa a través de un proxy, que este es el caso, tiende a sacarle la "S" de "https", haciendo así que no encuentre la URL.

Podriamos hacer una direccion estatica, podriamos ponerle en el `callbackURL` que nos envie a `localhost:5000/auth/google/callback` en env de dev y podriamos hacer que en env de prod nos envie a `https://emaily-661x.onrender.com/auth/google/callback` y asi no tendriamos problemas, pero tambien esto significaria que nosotros tenemos que agregar nuevos objetos en nuestros archivos de keys para que no puedan conseguir la info de la URI facilmente.

Entonces para solucionar esto simplemente le tenemos que decir a passport, que vamos a pasar a traves de un proxy y que eso esta totalmente bien.

Tenemos que agregar un nuevo objeto a nuestra GoogleStrategy `proxy: true`. 

Con eso render y passport saben que esta OK pasar por un proxy.


# Create React App:

https://github.com/facebook/create-react-app está toda la información necesaria para que podamos utilizar imagenes, fonts, entre otras cosas que queramos para nuestro proyecto.

### ¿Por qué el lado React de la aplicación tiene un servidor?

Ahora tenemos un segundo server de ambiente de desarrollo, el único dolor de cabeza que nos dará esto, es cuando vamos a tratar de entender como funcionan las cosas internamente.

El servidor Express solamente se encarga de jalar datos de mongoDB y expresarlos en formato JSON, o cómo atravesamos el OAuth flow, no hace nada más.

El lado React va a eventualmente tomar un monton de componentes, los va a agrupar a todos utilizando Webpack y Babel y va a escupir un solo archivo `bundle.js` que va a ser cargado al browser.

Entonces lo podemos ver que tenemos un server para el lado frontend, y un segundo server para toda la información diferente dentro de unestra aplicación.

### ¿Por qué no podríamos utilizar Express y React en un mismo server para crear nuestra aplicación?

Tranquilamente podríamos hacer eso. Podríamos decir que tenemos un servidor bien grande de Express y bien configurado y tenemos una pequeña parte de React ahí dentro. No sería lo mejor pero si se podría hacer.

La razón por la cual tenemos dos servidores, es que `create-react-app` es la mejor librería que podemos utilizar para crear nuestras aplicaciones, ya que nos va a salvar de muchísimo tiempo tratando de linkear Webpack, Bable y todas las depedencias, css, etc.

`create-react-app` nos salva muchisimo tiempo, vale absolutamente la pena, por eso tenemos dos servidores, la parte difícil sería nada más hacer que el servidor de Express y React se puedan comunicar fácilmente.

# Running the Client and Server:

Para levantar ambos servidores, tendríamos que utilizar dos ventanas de WSL y hacerlo manualmente, pero con la librería `concurrently` no tenemos esa necesidad.

Esta librería se encarga de ejecutar comandos de nuestro `package.json`, haciendo así que sea mucho más sencillo levantar nuestros servidores.

En nuestro `package.json` del `server` ***no del client react side***, podemos agregar dos `scripts` nuevos:\
```
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""`
```

`client` inicia nuestro servidor del frontend.
`server` inicia nuestro servidor del backend.

`--prefix client` se encarga de decirle al `script` que tiene que iniciar el servidor de `client`.

`dev` se encarga de ejecutar ambos `scripts` con `concurrently`, los `backslash` se utilizan como carácteres de escapes, ya que si no son utilizados con comillas puede ser que el script termine antes y que ejecute cualquier cosa.

`<a href="/auth/google">Sign in with Google bitch</a>`

Este link es relativo, nos va a llevar a el `dominio` + `/auth/google`, es decir que si estamos en `localhost:3000`, nos va a llevar a `localhost:3000/auth/google`, esto se debe a que cuando tenemos un path relativo, siempre se va a agregar al dominio que estamos actualmente.

Ahora, qué pasa cuando queremos ir a ambiente de prod, y de desarrollo?

Podríamos configurarlo manualmente: `https://emaily-332x.onrender.com/auth/google` para prod y `localhost:3000/auth/google` para dev, el problema es que nosotros queremos algo más dinámico, algo que se configure solo y no tengamos que estar cambiando nosotros la URL cada vez que queramos o ir a prod, o ir a dev.

Agregamos `localhost:3000/auth/google` como una URI aceptada en Google OAuth, por eso cuando voy a ese dominio, está todo bien.

En prod, antes de liberar nuestra app, vamos a construir nuestro proyecto de React, React va a construir el proyecto utilizando todos los archivos js, css, todo dentro de src, va a correr `webpack` y `bundle`, para crear un proyecto final de nuestra aplicacion y ponerla en la carpeta `build`

`create-react-app` no existe dentro de produccion.

Cuando utilizamos relative routes, el browser se va a pre-appendear a la route que le dijimos, como puse arriba.

Por features de seguridad del browser, si intentamos accedemos a `localhost:3000`, y posteriormente hacemos un request al mismo domain `localhost:3000`, el browser no va a devolver ningun problema con las cookies, ya que nuestra autenticacion es en base a cookies.

Pero si nosotros estamos en el dominio `localhost:3000` y tratamos de acceder o hacerle un req a el dominio `localhost:5000`, por default no se van a aceptar las cookies y si vamos a tener un problema de autenticacion.

# CORS:

CORS significa ***Cross Origin Resource Sharing***, si nosotros accedemos a `localhost:3000` y hacemos un request a `localhost:3000` no va a haber ningún problema de ***CORS***. Ahora, si nosotros estamos en `localhost:3000` y hacemos un request a `localhost:5000`, se puede decir que estamos haciendo un request ***CORS***. Ya que estamos haciendole un request a otro dominio.

Por cuestiones 100% de seguridad, el browser piensa que si estamos en el dominio `localhost:3000` y tratamos de hacerle un request al dominio `localhost:5000`, lo estamos haciendo con intenciones maliciosas.

En este caso nosotros no nos preocupamos de los request CORS debido al proxy que estamos utilizando.

---

### Dominios en el ambiente de Desarrollo

Nosotros hacemos el request a `localhost:3000` y este va a ser enviado al `proxy`, `proxy` va a enviar el request a `Express API` y el `Express API` va a devolver el mensaje al `proxy` y el `proxy` al browser. El `proxy` nos salva en el ambiente de desarrollo para la comunicación entre dominios.

### Dominios en el ambiente de Prod

Render va a proporcionar la URI y vamos a acceder al dominio correspondiente, en este caso `https://332.renderapp.com/auth/google` y como le estamos haciendo el request al mismo dominio en este caso no va a haber ningún problema CORS


# OAuth Flow + Proxy

### Dev Mode:

Si especificamos un path relativo en cualquier lugar de nuestra aplicacion, el browser se va a pre-añadir a la URL.

![html](https://i.ibb.co/59dgs1r/image-2024-11-14-163243493.png)

Cuando nosotros llegamos al dominio `localhost:3000`, el usuario va a ver un `hyperlink` en el cual puede hacer click y el browser va a saber que como existe un path relativo, lo tiene que mandar a `localhost:3000/auth/google`.

Al hacer el request, entramos al lado `CRA` con el `proxy`, y el `proxy` automaticamente va a buscar en el `package.json` o en el `setupProxy.js` para ver si tiene alguna opcion, en este caso tiene la opcion de `localhost:5000`.

Cuando llega el request, el proxy se hace cargo de el y le dice al browser, ok bro, espera un toque que yo me encargo, ya que en mis opciones tengo que hacer con el.

El proxy copia el request y lo manda a la nueva ruta que especificamos dentro del archivo del proxy.

Este es mandado al lado `Express API`, y para aceptar el request lo manda a google, para que cuando vuelva tenga la `callback` URL que especificamos en nuestro archivo `passport.js`, en la `google strategy`.

Luego lo manda otra vez antes del proxy y le dice que, todo bien.

Cuando el proxy lo devuelve, lo va a devolver a `/auth/google/callback`, y nos va a devolver a `locahost:3000` no al lado del backend.

Luego el usuario nos va a conceder permisos para ver su profile y para que nosotros creemos un usuario con su `profileID`, posteriormente al tener el token que nosotros guardamos en la cookie.

El proxy ve el request, lo copia, y por mas de que tenga `auth/google/callback` nuestra route `auth/google` lo va a tomar. El proxy se hace cargo del request, lo copia, lo envia a la API, la API toma el codigo que esta en la URL y toma el profile, token, etc. Y cuando termina dice: ok, aca estan tus cookies, tu info, etc., estas loggeado.

Express server dice ok, todo bien y te loggea.



# Async Await Syntax

La función `fetch` está disponible en default JavaScript en la standard library.

Podemos hacer utilizar la función `fetch` para hacer requests AJAX a puntos arbitrarios desde cualquier servidor que exista.

```
function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(json => console.log(json));
}


fetchPokemon();
```

En este punto hicimos un tipo de request Async que devuelve una `promise`, si es exitoso podemos chainear un `.then()`, este se va a ejecutar solamente cuando el `call` es exitoso.

`fetch` resuelve la `promise` con un objeto representando el `request`. Y podemos obtener la respuesta real `json` al llamarlo con `.json()`, esto devuelve `otra promise`.

`.then(json => console.log(json));` despues de obtener el `json`, lo printea.

### Await

Primero, tenemos que localizar una función `async`, en nuestro caso la de arriba.

Segundo, tenemos que poner la palabra `async` detras de la función, esto le dice al editor de código, que le vamos a pasar código `async`.

Tercero tenemos que localizar todas las `promises` que son creadas en esa función.

En nuestro caso son dos, `fetch` y `res.json()`, los `.then()` no se cuentan debido a que solamente funcionarían en el caso de que la `promise` sea exitosa.

Ponemos `await` detras del `fetch` y borramos el `.then()` que encapsula el `res.json()` y ponemos otro `await` detrás del `res.json()`.

Finalmente, asignamos el valor de `await fetch` y `await res.json()` a unos valores intermedios.
```
const res = await fetch()
const json = await res.json()

console.log(json);
```

En la parte de atras todo sigue funcionando de la misma manera, la palabra `await` no significa que estemos esperando algo, todo esta funcionando como debería.

Simplemente que en este caso estamos guardando lo que sería un `fetch` exitoso

`.then()` es reemplazado con `await`, normalmente se le designa una variable al `await` el cual el resultado era la variable que captaba el valor del resultado de la `promise`.


# Client React Setup

`index.js` Data Layer Control -- the very root of our application on the client side.

Va a contener el booteo inicial para la logica del lado de React y Redux.

Podemos pensar como este archivo `index.js`, como creando todas las layers de informacion iniciales, en este caso va a ser el lado redux de las cosas, entonces `index.js` va a ser todo sobre `redux`

Vamos a crear un solo componente llamado `app.js`, esta es la rendering layer, o el lado `react`, esto marcará que set de componentes va a mostrar en la pantalla

`index.js` lado redux | `app.js` lado react

Es para separar la logica para que no se haga tan dificil de leer y confuso.

`import` en lugar de `require` ya que estamos en el `frontend` y tenemos `webpack` y `babel` que tienen facilidades para acceder a ES2015

`root.render(<App />, document.querySelector('#root'));`

`('#root')` hace referencia al `index.html` que está en `public`, ese va a ser nuestro div principal en donde van a estar ocurriendo los cambios.

Para hacer referencia a ese `div` tenemos que utilizar `document.querySelector('#root')`.


git add . -> agrega todo o por archivo especificando path
git status -> lo que esta en cola para commitearse
git commit -m -> commit
git push -> para publicarlo

`redux` se encarga de todos los estados, de toda la data dentro de nuestra app.

`redux-store` es en donde nuestros estados existen.

Para determinar o cambiar nuestro estado, llamamos una `action creator` que despacha una action, esta action es enviada a todos los diferentes `reducers` dentro de nuestra aplicacion. Esos `reducers` combinados, combinado con la llamada del `reducer` es lo que utilizamos para actualizar el estado de nuestro `redux store`.

Un `react component` va a llamar una acción al `action creator`, que va a devolver una `action`, que va a ser enviada a `reducers` que va a actualizar el `store`.

`provider tag` es la plastilina que hace el bonding entre redux y react.

`provider` es un componente que hace que el `store` sea accesible a cualquier componente en la aplicacion.

![html](https://i.ibb.co/8zZgdFW/image-2024-11-20-154710064.png)

La idea de tenerlo asi es para que podamos acceder a componentes randoms que se encuentren arbitrariamente en distintos lugares y no tengamos problemas al sacar informaciond e ahi, ya que estaria conectado con el `store` y el `provider` no está dando acceso.

`const store = createStore(() => [], {}, applyMiddleware());`

El `primer argumento` de `createStore` los diferentes `reducers` ( que todavia no hicimos, este es un dummy )
El `segundo argumento` es el estado inicial de nuestra aplicacion, esto es mas importante cuando estamos haceindo server side rendering, por ahora a nosotros no nos importa entonces le vamos a pasar un objeto vacio {}
`El tercer argumento` no tenemos nada entonces vamos a agregar applyMiddleware() e invocarlo.

```
export default function (state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
```
`state` object, responsable del estado de la funcion
`action` object, 
`switch (action.type) {}` ahora mismo no tenemos ningun `type` definido dentro de nuestra app, entonces vamos a asumir que solamente tenemos un `case`, el `default case` del cual solamente vamos a devolver nuestro `state`

`state` object empieza como `undefined`, entonces tenemos que ponerle un valor inicial, que puede ser un objeto `{}`.

`import { BrowserRouter, Route } from 'react-router-dom';`

`BrowserRouter` "brains", le dice a react-router como funcionar, ve la current URL y cambia el set de components que se ven en la pantalla en cualquier momento.

`Route` react-component, es utilizado para crear una regla entre una ruta que el usuario podria llegar a visitar dentro de nuestra aplicacion y un set de componentes que son actualmente visibles en la pantalla

---

`<Route path="/" component={Landing} />`
`<Route path="/surveys" component={Dashboard} />`

Si accedemos al `route` `"/"`, solamente vamos a ver el texto Landing en pantalla.
Pero si accedemos al `route `"/surveys"` vamos a ver Landing y Dashboard, esto se debe a que para react, nosotros estamos accediendo tanto a la ruta `"/"` como a la ruta `"/surveys"`, es por eso que se nos estan printeando dos componentes al mismo tiempo.

Esto lo solucionamos haciendo `<Route exact={true} path="/" component={Landing} />`

La propiedad `exact` es utilizada para que nos mande exactamente al route que estamos configurando.
podemos hacer `exact = {true}` o podemos hacer `exact` solamente, y son tratadas de la misma manera


