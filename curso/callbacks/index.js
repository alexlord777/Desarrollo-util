const http = require('http')

const server= http.createServer((req,res)=>{
    console.log('hola');
})


server.listen(3000,()=>{
    console.log("server live");
})