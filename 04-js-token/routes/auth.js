const express = require('express');
const roterA= express();
const {validation} = require('../helpers/validation');

const {USERS_BBDD}= require('../bbdd');


//Endpoint publico (no autentificado y no autorisado)
roterA.get("publico",(req,res)=> res.send("endpoint"))
//endpoint autentificado
roterA.post('/autenticado',(req,res)=>{
    const {email,password}= req.body;
    if(!email || !password) return res.status(404).send('error')
    try {
        const user =validation(email,password);

    res.send(`Usuario ${user.name}`);
    } catch (error) {
        res.status(404).send(error);
    }
})
//endpoint autorizado
roterA.post('/autorizado',(req,res)=>{
    const {email,password}= req.body;
    if(!email || !password) return res.status(404).send('error')
    try {
        const user =validation(email,password);
        if(user.role !== 'admin') return res.status(403).send("you're not admin")

    res.send(`Usuario administradr ${user.name}`);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports =roterA;