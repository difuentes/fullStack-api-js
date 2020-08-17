const express = require('express');
const router = express.Router();
const pacienteContoller = require('../controllers/pacienteControllers');

module.exports = function(){

    //agregar nuevos pacientes via POST
    router.post('/pacientes',
        pacienteContoller.nuevoCliente
    )
    //obtener todos los pacientes de BD
    router.get('/pacientes',
        pacienteContoller.obtenerPacientes
    )
    //obtiene un paciente
    router.get('/pacientes/:id',
        pacienteContoller.obtenerPaciente
    )
    //actualizar un registro por id
    router.put('/pacientes/:id',
        pacienteContoller.actualizarPaciente
    )
    //actualizar un registro por id
    router.delete('/pacientes/:id',
        pacienteContoller.eliminarPaciente
    )

    return router;
}
