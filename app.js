const express = require('express')
//const { send } = require('express/lib/response')
const app = express()
const port = process.env.PORT || 3000;

// Seteando motor de plantillas EJS 
app.set('view engine', 'ejs')
// las vistas están en la carpeta view
app.set('views', __dirname + '/view')

//Es para poner la carpeta public de manera dinamica para cuando se suba al un hosting
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) =>{
    res.render("index")
})

app.get(('/Examen3erParcial'), (req, res) => {
    res.render(("Examen3erParcial"))
})

//Se pone hasta abajo para evitar conflicto con las rigast get dadas anteriormente
//En caso de errores de escritura en las URL se presponde con la paguina de error 404
app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () =>{

    console.log('servidor a su servicio en el puerto: ', port)
})