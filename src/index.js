const express = require('express');
const app = express();
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
const routes = require ('../rutas')

//Configuraciones
app.set('port',process.env.PORT ||3000);


//Aplicaciones 
app.use(morgan('dev'));


//Conexion MYSQL
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'cliente'
},'single'));

//Rutas  

app.get('/', (req, res)=>{
    res.send('Title Hello World')
}); 
app.use('/api', routes);

 
//Empieza el servidor  
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});