const express = require('express');
const app = express();
const PORT = 8080;
const Contenedor = require('./Contenedor.js');

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on("error", error => console.log(`Encontramos el siguiente error en el servidor: ${error}`));

const contenedor = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
  const productos = await contenedor.getAll();
  res.send(productos);
});

app.get('/productoRandom', async (req, res) => {
  const productos = await contenedor.getAll();

  const indiceAleatorio = Math.floor(Math.random() * productos.length);
  const productoRandom = productos[indiceAleatorio];
  res.send(productoRandom);
});
//Pd: ¿Cómo separo las rutas de la configuración del server? No me gusta verlo todo en un mismo archivo
