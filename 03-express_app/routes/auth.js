const express = require('express');
const { router } = require('./acount');
const roter= express();

const {USERS_BBDD}= require('../bbdd');

//Endpoint publico (no autentificado y no autorisado)
roter.get("publico",(req,res)=> res.send("endpoint"))
//endpoint autentificado
router.post('publico',(req,res)=>{
    const {email,password}= req.body;

    if(!email || !password) return res.status(404).send("error")

    const user= USERS_BBDD.filter( i => i.email== email)

    if(!user) return res.status(401).send("error");;
    if(user.password !== password) return res.status(401).send("error");

    res.send(`Usuario ${user.name} autentificado`);
})
//endpoint autorizado

module.exports =roter;