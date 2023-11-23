const express = require("express");
const app = express();
const path = require('path')

const Controlador = require('./controlador');

app.use(express.json());
app.use(express.urlencoded({extended : false}))

const port = 3000;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./static/menu.html'))
})

app.post('/nuevo', (req,res)=>{
    console.log(req.body);
    Controlador.nuevoAlum(req.body);
    res.sendFile(path.join(__dirname,'./static/menu.html'))
})
app.get('/nuevoAlumn', (request, response)=>{
    response.sendFile(path.join(__dirname, './static/nuevoAlumn.html'))
})

app.get('/obtener', (req, res) => {
    console.log(req.body)

    let data = Controlador.obtener();

    let str = "";
    str += "<div class='container'>";
    str += "<h5>Lista de Alumnos</h5>";
    str += "<table class='table table-bordered'>";
    str += "<thead class='thead-dark'>";
    str += "<tr>";
    str += "<th scope='col'>Nombre</th>";
    str += "<th scope='col'>DNI</th>";
    str += "<th scope='col'>Dirección</th>";
    str += "<th scope='col'>Grado</th>";
    str += "</tr>";
    str += "</thead>";
    str += "<tbody>";

    for (var i = 0; i < data.length; i++) {
        str += "<tr>";
        str += "<td>" + data[i].nombre + "</td>";
        str += "<td>" + data[i].dni + "</td>";
        str += "<td>" + data[i].direccion + "</td>";
        str += "<td>" + data[i].grado + "</td>";
        str += "</tr>";
    }

    str += "</tbody>";
    str += "</table>";
    str += "</div>";

    res.send(str);
})

app.listen(port, ()=>{
    console.log('Escuchando en el puerto ${port}')
});