// Importamos Express
import express from 'express';

// Importar Cors
import cors from 'cors';

// Importar Router
import router from './routes/index.js';

// Crear app de Express
const app = express();

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