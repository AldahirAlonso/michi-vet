// Importamos Express
import express from 'express';

// Importar Router
import router from './routes/index.js';

// Crear app de Express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar router
app.use('/', router);

// Inicializar servidor
app.listen(port, () => {
    console.log(`Inicializando servidor desde el puerto: ${port}`);
});