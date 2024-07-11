const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

//creamos la rutas del crud

router.post('/', proveedorController.agregarProveedor);
router.get('/', proveedorController.mostrarProveedor);
router.get('/:id', proveedorController.buscarProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
router.patch('/:id', proveedorController.modificarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router;
