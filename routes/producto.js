const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//creamos la rutas del crud

router.post('/', productoController.agregarProductos);
router.get('/', productoController.mostrarProductos);
router.get('/:id', productoController.buscarProductos);
router.put('/:id', productoController.actualizarProductos);
router.patch('/:id', productoController.modificarProductos);
router.delete('/:id', productoController.eliminarProductos);

module.exports = router;