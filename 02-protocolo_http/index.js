import {createServer} from 'http';
import express from 'express';

const app= express();

//metodos a vanilla
const httpServer=createServer((req,res)=>{
    //nos falta el metodo para indicar que quiere el cliente
    //console.log(req.method);
    //nos falta path/ruta para identificar el recurso
    //console.log(req.url);
    //nos faltan las cabeseras
    //console.log(req.headers);
    //nos falta el body y el payload
    let data="";
    let indexR=0;

    req.on("data",(chunk)=>{
        data +=chunk;
        indexR++;
        console.log(indexR);
    })

    req.on("end",()=>{
        console.log(data);
    })

    res.end("Peticion recivida")
});

//metodos con express
app.get("/hola",(req,res)=>{
    res.send("hola")
})
app.listen(3000, ()=>{
    console.log("listen");
})

//iniciar server a vanila
// httpServer.listen(3000,()=>{
//     console.log("server on live");
// } )