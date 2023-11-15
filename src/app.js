import express from 'express';
import cors from 'cors';
import usuarioRuta from '../src/Routes/usuarioRuta.js';

const app = express();

app.use(express.json());
app.use(cors());
const port = 5002 || process.env.port;

app.use('/api', usuarioRuta);

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.post('/adios', (req, res) => {
    res.send('BYE');
});


app.listen(port, () => {
    console.log(`El puerto es : ${port}`);
});
