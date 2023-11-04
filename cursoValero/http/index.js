const http = require('http')

const ser=http.createServer((req,res)=>{
    console.log("peticion r");

    res.end("enviado get ");
})


ser.listen(3000,()=>{
    console.log("server listen");
});