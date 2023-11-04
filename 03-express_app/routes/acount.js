const express= require('express');
const router= express();
const {USERS_BBDD}= require('../bbdd');

router.get('/:gid',(req,res)=>{
    const gid= req.params.gid;
    const user= USERS_BBDD.find( i => i.guid===gid);

    if(!user) res.status(404).send("not fund");

    res.send(user);
})
//crear una nueva cuenta 
router.post('/',(req,res)=>{
    const {name,guid} = req.body;

    if( !name || !guid) res.status(401).send();

    const user= USERS_BBDD.find( i => guid === i.guid);

    if( user) res.status(401).send()

    USERS_BBDD.push({guid:guid,name:name});

    res.status(201).send()
})
//actualizar una cuenta
router.patch('/:gid',(req,res)=>{
    const gid= req.params.gid;
    const user= USERS_BBDD.find( i => i.guid===gid);
    const name = req.body.name

    if(!name) res.status(404).send()
    if(!user) res.status(404).send("not fund");

    user.name= name;

    res.status(200).send();
})
//Eliminar una cuenta
router.delete('/:gid',(req,res)=>{
    const gid= req.params.gid;
    const user= USERS_BBDD.findIndex( i => i.guid===gid);

    if(user ===-1) res.status(404).send("not fund");

    USERS_BBDD.splice(user,1);

    res.send("detele");
})


module.exports= {router};