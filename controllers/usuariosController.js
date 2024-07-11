const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.crearUsuario = async(req, res) =>{
    //vamos a revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

const {email, password} = req.body;
try {
   //revisar que el usuario registrado sea unico
let usuario = await Usuario.findOne({email});
if(usuario){
    return res.status(400).json({msg: 'El usuario ya existe'});
}
//creamos el usuaurio
usuario = new Usuario(req.body);

usuario.password = await bcryptjs.hash(password, 10);

//guardamos el usuario en la base de datos
await usuario.save();

//firmar el jwt
const payload ={
    usuario: {id: usuario.id},
};
jwt.sign(
    payload, process.env.SECRETA, 
    {
        expiresIn: 3600// 1 hora
    },
    (error, token) =>{
        if(error)throw error;
        //mensaje de confirmacion 
        res.json({token});
    }
);

}catch (error) {
    console.log("Hubo un error");
    conosole.log(error);
    res.status(400).send("Hubo un error")
    
}
};