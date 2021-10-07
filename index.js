const express = require('express');
const ProductsService = require('./services/product.service');
//const faker = require('faker');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hola, este es mi server en express');
});

// app.get('/proyectos', (req, res)=>{
//   res.send('Hola mi server en express para proyectos');
// });

// app.get('/servicios', (req, res)=>{
//   res.json({"name": "Javier", "edad": 34});
// });

routerApi(app);

app.listen(port, () => {
  console.log('Listening in port ' + port)
});
