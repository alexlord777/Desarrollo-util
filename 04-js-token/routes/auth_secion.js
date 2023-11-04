const express = require('express');
const roterAS= express();
const {validation} = require('../helpers/validation');
const shortid = require('shortid');
const {USERS_BBDD}= require('../bbdd');

const secions= [];

roterAS.post('/loggin',(req,res)=>{
    const {email,password}= req.body;

    if(!email || !password) return res.sendStatus(404);

    try {
        const {guid}= validation(email,password);
        const secionId= shortid.generate();
        secions.push({secionId,guid});
        res.cookie("secionId",secionId,{
            httpOnly:true
        })
        res.send()
    } catch (error) {
        res.sendStatus(401)
    }
})

roterAS.get('/profile',(req,res)=>{
    const {cookies}=req
    if(!cookies.secionId)return res.sendStatus(401);
    const userSession=secions.find( i => i.secionId==cookies.secionId);

    if(!userSession) return res.sendStatus(401);

    const user= USERS_BBDD.find( i => i.guid === userSession.guid);

    if(!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);
})

module.exports =roterAS;