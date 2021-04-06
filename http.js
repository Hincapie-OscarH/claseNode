const http = require('http');

const PORT = 5000;

const app = http.createServer((req, res) => {
    //Enviarle el estado de la solicitud al usuario
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); //application/json
    res.end('Hola');
});

app.listen(PORT, () => {
    console.log('El aplicativo está corriendo en el puerto', PORT)
});