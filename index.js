const express = require('express');
//conexion con mongoDB
const conectarDB = require('./config/db.js');
//importar rutas
const routes = require('./routes');
const bodyParser = require('body-parser');

//crear el servidor 
const app = express();

//conectar a MongoDB
conectarDB();

//habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//habilitar routing
app.use('/',routes())

//asignar puerto dispo si no encuentra por defecto 
const port = process.env.PORT || 4000;

//arrancar la app
app.listen(port,'0.0.0.0' ,()=>{
    console.log(`Express Funcionando con el puerto ${port}`);
})