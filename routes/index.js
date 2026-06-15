// Importar Express
import express from 'express';

// Importamos la función desde el controlador
import { guardarContacto } from '../controllers/contactoController.js';

// Crear una instancia Route
const router = express.Router();

// Definiendo rutas

// Ruta Inicio
router.get('/inicio', (req, res) => {
    res.render('inicio', {
        // Agregamos un título dinámico para cada página
        pagina: 'Inicio'
    });
});

// Ruta Nosotros
router.get('/nosotros', (req, res) => {
    res.send("Nosotros");
});

// Ruta Contacto
router.get('/contacto', (req, res) => {
    res.send('Contacto');
});

// Cuando React haga un POST a la ruta raíz de este router, se ejecutará guardarContacto
router.post('/', guardarContacto);

// Exportar router para usarlo en el index principal
export default router;