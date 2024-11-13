const express = require('express');
const prodRoutes = require('./products_routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.midleware');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(prodRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
    console.log(`Server is on PORT: ${PORT}`)
})