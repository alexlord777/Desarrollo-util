const express = require('express');
const roterAT = express();
const { validation } = require('../helpers/validation');
const jose = require('jose')
const { USERS_BBDD } = require('../bbdd');
const validateLogin= require('../dto/validate_login_dto')

roterAT.post('/loggin', validateLogin,async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.sendStatus(404);

    try {
        const { guid } = validation(email, password);
        const jwtConstructor = new jose.SignJWT({ guid });
        const encoder= new TextEncoder();
        const jwt= await jwtConstructor.setProtectedHeader({alg:'HS256',typ:'JWT'})
        .setIssuedAt()
        .setExpirationTime('1h').sign(encoder.encode('msk82nwndh21'));

        res.send(jwt)
    } catch (error) {
        res.sendStatus(401)
    }
})

roterAT.get('/profile',async (req, res) => {
   const {authorization}= req.headers;

   if(!authorization) return res.status(401);
   
   try {
    const encoder= new TextEncoder();
    const {payload}=await jose.jwtVerify(authorization,encoder.encode('msk82nwndh21'));

    const user= USERS_BBDD.find( i => i.guid === payload.guid);

    if(!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);

   } catch (error) {
    res.send(error);
   }
})

module.exports = roterAT;