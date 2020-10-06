const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     //res.send('Hola Mundo')

//     let salida = {

//         nombre: 'Juan Sala',
//         edad: 25,
//         url: req.url
//     }
//     res.send(JSON.stringify(salida))
// })
app.get('/data', (req, res) => {
    res.send('Hola DATA')


})

app.listen(3000, () => {
    console.log('Escuchando to lo que llega al puerto 3000');
})