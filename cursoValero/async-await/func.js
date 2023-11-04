const func=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hols promise")
        },2000)
    })
}

module.exports={func}