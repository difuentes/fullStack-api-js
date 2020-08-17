const mongoogse = require('mongoose');
const Schema = mongoogse.Schema;

const pacientesSchema = new Schema({
    
    nombre:{ 
     type:String,
     trim:true,
    },
    propietario:{
        type:String,
        trim:true
    },
    fecha:{
        type: String,
        trim:true
    },
    hora:{
        type: String,
        trim:true
    }

})

module.exports  = mongoogse.model('Paciente',pacientesSchema);