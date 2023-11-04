const express= require('express');
var cookieParser = require('cookie-parser')
require('dotenv').config();
const {router} = require('./routes/acount');
const routerA= require('./routes/auth');
const routerAS= require('./routes/auth_secion');
const routerAT= require('./routes/auth_token');

const port = process.env.PORT || 3000;

const app= express();

app.use(express.json());
app.use(express.text());
app.use(cookieParser());
//obtener los detalles de una cuenta 
app.use('/acount',router);
app.use('/auth',routerA);

app.use('/auth-sesion',routerAS);
app.use('/auth-token',routerAT);

app.listen(port ,()=>{
    console.log('port :'+port);
})