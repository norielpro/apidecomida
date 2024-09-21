import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('¡Hola! Este es un mensaje desde el servidor Express.');
});

const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};


app.get('/canciones', cors(), (req, res) => {
  const data = readData()
  res.json(data.books);
});
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


