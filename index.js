// Importamos Express
import express from 'express';

// Importar Cors
import cors from 'cors';

// Importar Router
import router from './routes/index.js';

// Crear app de Express
const app = express();

// Importar configuracion de bases de datos
import db from './config/db.js';

// Probar conexion a la base de datos
db.authenticate()
    .then(() => console.log('Conexion a la base de datos exitosa'))
    .catch(error => console.log('Error al conectar a la base de datos: ', error));

// Habilitar Cors
app.use(cors());

// Habilitar JSON
app.use(express.json());

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar router
app.use('/', router);

// Inicializar servidor
app.listen(port, () => {
    console.log(`Inicializando servidor desde el puerto: ${port}`);
});