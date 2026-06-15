// Importamos nuestro modelo (Ajusta la ruta según tu estructura)
import { Contact } from '../models/Contact.js';

// Función para procesar y guardar un nuevo mensaje de contacto
const guardarContacto = async (req, res) => {
    // req.body contiene los datos exactos que React envió mediante JSON.stringify(formData)
    const { nombre, nombreGato, email, telefono, mensaje } = req.body;

    try {
        // Guardamos en la base de datos usando el modelo de Sequelize.
        // Hacemos coincidir las variables del Frontend con las columnas de tu Base de Datos:
        await Contact.create({
            nombre: nombre,
            nombre_gato: nombreGato,
            correo_electronico: email,
            telefono: telefono,
            mensaje: mensaje
        });

        // Respondemos a React con un JSON indicando que todo salió bien
        // Esto hace que el "resultado.success" en React sea verdadero
        res.status(201).json({
            success: true,
            message: '¡Mensaje guardado correctamente en michi_vet!'
        });

    } catch (error) {
        console.error('Error al guardar el contacto:', error);
        // Si algo falla, le avisamos a React enviando un success en false
        res.status(500).json({
            success: false,
            message: 'Hubo un error en el servidor al intentar guardar el mensaje'
        });
    }
};

// Exportamos las funciones para poder usarlas en el router
export {
    guardarContacto
}