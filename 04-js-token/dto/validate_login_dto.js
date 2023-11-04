const Ajv= require('ajv');
const ajv= new Ajv();
const typ=require('@sinclair/typebox');
const DTO_PROPERTY_NAMES=["email","password"]

// const LoginDTOSchema= {
//     type:"object",
//     properties:{
//         email:{type:'string',format:'email'},
//         password:{type:'string'}
//     },
//     required:["email","password"],
//     additionalProperties:false,
// }

const LoginDTOSchema= typ.Type.Object(
    {
        email:typ.Type.String(),
        password:typ.Type.String(),
    },
    {
        additionalProperties:false
    }
);
const validate= ajv.compile(LoginDTOSchema);

const validateLogin=(req, res,next) =>{

    const isDTO=validate(req.body);
    if(!isDTO) return res.status(400).send("el body no es valido")
    next()
}

module.exports= validateLogin;