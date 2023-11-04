
const func=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hols promise")
        },2000)
    })
}


fun()

// const show=async()=>{
//     const data=await func();
//     console.log("init");
//     console.log(data);
//     console.log("fin");
// }

// show();