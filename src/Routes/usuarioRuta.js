import express from "express";

const router = express.Router();

import {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
} from '../Controllers/UsuarioController.js';

router.get('/listUsuario', listUsuario);
router.get('/:id', getUsuario);
router.put('/update/:id', updateUsuario);
router.post('/', saveUsuario);
router.delete('/:id', deleteUsuario);

export default router;