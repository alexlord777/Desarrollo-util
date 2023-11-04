const express= require('express');
require('dotenv').config();
const {USERS_BBDD}= require('./bbdd')
const {router} = require('./routes/acount');


const port = process.env.PORT || 3000;

const app= express();

app.use(express.json());
app.use(express.text());
//obtener los detalles de una cuenta 
app.use('/acount',router);

app.listen(port ,()=>{
    console.log('port :'+port);
})