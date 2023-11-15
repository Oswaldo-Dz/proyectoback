
import { pool } from '../db.js';
import bcrypt  from 'bcrypt';
const getUsuario = async (req, res) => {
    try {
        console.log("Hola NUEVO")
        const { id } = req.params
        const usuario = await pool.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
        res.json((usuario.rows));
    } catch (e) {
        console.log(e);
    }
};

const saveUsuario = async (req, res) => {
        try {
            const { nombre, password, email } = req.body;
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                await pool.query('INSERT INTO USUARIO(NOMBRE, PASSWORD, EMAIL, ACTIVO) VALUES($1, $2, $3, True)', [nombre, hash, email]);
                res.send("Usuario guardado correctamente!");
                console.log(hash);
            });
            }
            catch (e) {
                console.log(e)
                console.log("ENTRO");
        }
    };

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(    (req.body));
        const { nombre, password, email } = req.body;
        await pool.query(`UPDATE USUARIO SET NOMBRE = '${nombre}', PASSWORD = '${password}', EMAIL = '${email}' WHERE ID = '${id}'`);
        res.send("Usuario actualizado");
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
        //console.log("Trae Usuarios");
        const list = await pool.query('SELECT * FROM USUARIO');
        res.json(list.rows);
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