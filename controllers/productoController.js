const Producto = require('../models/Producto');

// Función para agregar producto
exports.agregarProductos = async (req, res) => {
    try {
        let producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

// Función que nos va a mostrar todos los productos
exports.mostrarProductos = async (req, res) => {
    try {
        const producto = await Producto.find();
        res.json({producto});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

// Función para buscar un producto por ID
exports.buscarProductos = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ msg: 'No se encuentra el producto' });
        }
    else{
        res.send(producto); }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el producto');
    }
}

exports.actualizarProductos = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate(
            {_id: req.params.id}, req.body);
            if (!producto) res.status(404).send("Producto no encontrado");
            else
            res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Huboun error al actualizar el producto");
    }
};

exports.modificarProductos = async(req, res)  =>{

    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!producto){
            return res.status(404).send('Producto no encontrado');
        }
        res.json(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto');
    }
}

exports.eliminarProductos = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        } else {
            await Producto.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "El producto ha sido eliminado" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
}