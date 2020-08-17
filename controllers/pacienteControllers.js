const Paciente = require('../models/Paciente');


//cuando se crea un nuevo cliente
exports.nuevoCliente = async(req,res,next) =>{
    //TODO: insertar en la bse de datos

    //crear datos de pacientes cpm datos req.body
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({msg: 'El Cliente se agrego correctamente'});

    } catch (error) {
        
        console.log(error);
        next();
    }
}
//obtener pacientes
exports.obtenerPacientes =async(req,res,nex) =>{

    try {
        
        const pacientes = await Paciente.find({});
        res.json(pacientes);
        
    } catch (error) {
        console.log(error);
        next();
    }
}
//obtener un paciente por id
exports.obtenerPaciente = async (req,res,next)=>{
    try {
        const paciente = await Paciente.findById(req.params.id);

        res.json(paciente);
    } catch (error) {
        console.log(error);
    }
}

//actualizar pacientes
exports.actualizarPaciente = async(req,res,next)=>{
    try {
        const paciente = await Paciente.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true
        });
        res.json(paciente);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarPaciente = async (req,res,next)=>{

        try {
            const eliminado = await Paciente.findOneAndDelete({_id:req.params.id});
            res.json({msg:`El paciente fue eliminado ${eliminado}`});

        } catch (error) {
            console.log(error);
        }
}