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