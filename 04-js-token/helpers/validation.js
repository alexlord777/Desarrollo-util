const {USERS_BBDD}=require('../bbdd')

const validation= (email,password)=>{

    const user= USERS_BBDD.find( i => i.email === email)
    if(!user) throw new Error();
    if(user.password !== password) throw new Error();

    return user;
}

module.exports = {
    validation
}