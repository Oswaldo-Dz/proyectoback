
import { pool } from '../db.js';

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await pool.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
        res.json((usuario.rows));
        //res.send("Dame un usuario");
    } catch (e) {
        console.log(e);
    }
};

const saveUsuario = ((req, res) => {
    res.send("Guarda un usuario");
});

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(    (req.body));
        const { nombre, password, email } = req.body;
        await pool.query(`UPDATE USUARIO SET NOMBRE = '${nombre}', PASSWORD = '${password}', EMAIL = '${email}' WHERE ID = '${id}'`);
        res.send("Usuario actualizado");
        //res.send("Dame un usuario");
    } catch (e) {
        console.log(e);
    }
};

const deleteUsuario = async (req, res) => {
    const { id } = req.params
    const usuario = await pool.query(`DELETE FROM USUARIO WHERE ID = ${id}`);
    res.send("Borrar un usuario");
};

const listUsuario = async (req, res) => {
    try {
        const list = await pool.query('SELECT * FROM USUARIO');
        res.json(list.rows);
        //res.send("Dame un usuario");
    } catch (e) {
        console.log(e);
    }
};

export {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
};