// Importamos Express
const express = require('express');

// Crear app de Express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Inicializar servidor
app.listen(() => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})