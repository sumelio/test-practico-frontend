const express = require('express');
const routes = require('./src/routes');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

// ROUTES
app.use('/api', routes());

// Puerto
const port = process.env.PORT || 4011;
// iniciar App
app.listen(port, () => {
    console.log(`Backend express MercadoLibre listening on port ${port}`)
})

