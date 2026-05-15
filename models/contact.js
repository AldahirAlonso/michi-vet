import { Sequelize } from "sequelize";
import db from '../config/db.js'

export const Contact = db.define('contact', {
    nombre: {
        type: Sequelize.STRING
    },
    nombre_gato: {
        type: Sequelize.STRING
    },
    correo_electronico: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.INTEGER
    },
    mensaje: {
        type: Sequelize.STRING
    }
});