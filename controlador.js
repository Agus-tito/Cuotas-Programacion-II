const Clases = require('./clases.js')
const Modelo = require('./modelo.js')



function nuevoAlum(data){
    console.log(data);
    let unAlumno = new Clases.Alumno(data.nombre, parseInt(data.dni), data.direccion, parseInt(data.grado))
    Modelo.guardar(unAlumno);
}

function obtener(){
    return Modelo.obtener();
}

module.exports = {nuevoAlum, obtener}