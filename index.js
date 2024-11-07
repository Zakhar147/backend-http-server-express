const express = require('express');

const app = express();

const products = [
    { id: 1, name: 'Product 1', brand: 'brand_a' },
    { id: 2, name: 'Product 2', brand: 'brand_b' },
    { id: 3, name: 'Product 3', brand: 'brand_c' }
  ];

app.get('/', (req, res) => {
    res.send('Response for GET request.')
});

app.get('/products/:brand', (req, res) => {
    const { brand } = req.params;
    const filteredProducts = products.filter(prod => prod.brand == brand);

    res.send(filteredProducts)
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})