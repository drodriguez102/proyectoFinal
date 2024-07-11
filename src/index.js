const express =require('express');
const  ConectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = 5000;

//Enlazar conexion a la base de datos
ConectarBD();
app.use(cors());

//habilitamos express.json
app.use(express.json({extended: true}));

//rutas de la aplicacion
app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/proveedor', require('../routes/proveedor'));
app.use('/api/auth', require ('../routes/auth'));
app.use('/api/usuarios', require('../routes/usuarios'));
app.use("/api/productos", require('../routes/producto'));

app.get('/', (req, res) =>{
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(port, () => console.log('Esta conectado el servidor con el puerto', port));