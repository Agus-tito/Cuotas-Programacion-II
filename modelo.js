const fs = require('fs')

function guardar(data){
    console.log(data)

    let str_alumno = fs.readFileSync('./db.txt','utf-8')
    let Alumnos = []
    if(str_alumno){
        Alumnos = JSON.parse(str_alumno)
    }
    
    Alumnos.push(data)
    fs.writeFileSync('./db.txt',JSON.stringify(Alumnos))
}

function obtener(){
    let str_alumno = fs.readFileSync('./db.txt','utf-8')
    let Alumnos = []
    if(str_alumno){
        Alumnos = JSON.parse(str_alumno)
    }
    return Alumnos;

}

module.exports = {guardar, obtener}