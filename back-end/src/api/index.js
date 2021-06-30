const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const { products } = require('../data/Products')

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products(req.query["type"]));
});

app.listen(port, () => {
    console.log(`Carrinho Example app listening at http://localhost:${port}`)
})

