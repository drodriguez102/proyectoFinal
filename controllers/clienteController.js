const Cliente = require('../models/Cliente');

// Función para agregar clientes
exports.agregarClientes = async (req, res) => {
    try {
        let cliente = new Cliente(req.body);
        await cliente.save();
        res.send(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

// Función que nos va a mostrar todos los clientes
exports.mostrarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);  // Error tipográfico corregido
        res.status(500).send('Hubo un error al mostrar los clientes');
    }
}

// Función para buscar un cliente por ID
exports.buscarClientes = async (req, res) => {  // Nombre de función corregido
    try {
        let cliente = await Cliente.findById(req.params.id);  // Corrección en Cliente.findById
        if (!cliente) {
            return res.status(404).json({ msg: 'No se encuentra el cliente' });
        }
    else{
        res.send(cliente); }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el cliente');
    }
}

exports.actualizarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
            {_id: req.params.id}, req.body);
            if (!cliente) res.status(404).send("Cliente no encontrado");
            else
            res.json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send("Huboun error al actualizar el cliente");
    }
};

exports.modificarClientes = async(req, res)  =>{

    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!cliente){
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}

exports.eliminarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id); // Cambié 'clientes' por 'cliente'
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        } else {
            await Cliente.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "El cliente ha sido eliminado" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el cliente');
    }
}
