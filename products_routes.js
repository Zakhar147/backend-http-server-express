const express = require('express');
const products = require('./products');
const {blockSpecialBrand} = require('./middleware');

const router = express.Router();

router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/:id', blockSpecialBrand, (req, res) => {
    const {id} = req.params;

    const filteredProds = products.filter(prod => prod.id === +id);

    res.json(filteredProds)
});

router.get('/productserror', (req,res) => {
    let err = new Error("processing error");
    err.statusCode = 400;
    throw err;
})

module.exports = router;