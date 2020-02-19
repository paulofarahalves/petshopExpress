const express = require('express');
const petRotas = require('./routes/pet');

const app = express();

app.listen(3000, () => {
    console.log("Tô ouvindo!");
});

app.use(petRotas);