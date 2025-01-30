const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json());


app.listen(3000)
// Datos de ejemplo (simulando una base de datos)
let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  
  
  // Obtener todos los ítems
  app.get("/items", (req, res) => {
    res.json(items);
  });
  
  
  // Obtener un ítem por ID
  app.get("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find((i) => i.id === itemId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Ítem no encontrado" });
    }
  });
  
  
  