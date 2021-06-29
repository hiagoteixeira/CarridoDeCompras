const express = require('express');
const app = express();
const port = 3000;
const { products } = require('../data/Products')

app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products('abaixo'));
});

app.listen(port, () => {
    console.log(`Carrinho Example app listening at http://localhost:${port}`)
})