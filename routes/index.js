// Importar Express
import express from 'express';

// Crear una instancia Route
const router = express.Router();

// Definiendo rutas

// Ruta Inicio
router.get('/inicio', (req, res) => {
    res.send('Inicio');
});

// Ruta Nosotros
router.get('/nosotros', (req, res) => {
    res.send("Nosotros");
});

// Ruta Contacto
router.get('/contacto', (req, res) => {
    res.send('Contacto');
});

// Exportar router para usarlo en el index principal
export default router;