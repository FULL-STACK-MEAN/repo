const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get();


app.listen(port, () => {
    console.log('Servidor escuchando en...');
})