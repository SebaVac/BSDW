const express = require('express');
const mysql=require("mysql");
const app=express();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
const cors=require('cors');
app.use(cors());

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database : 'Tienda'
});

connection.connect(function(err:any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
    return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

//creamos servidor
const configuracion={
    hostname:"127.0.0.1",
    port:3000,
}

app.listen(configuracion,() => {
    console.log(`Conectando al servidor https://localhost:${configuracion.port}`);
})

//Tabla Admin
app.get("",(req:any, res:any) =>{
    connection.query("select * form Administrador",function(error:any, results:any,fields:any){
        res.send(JSON.stringify(results));
    });
});