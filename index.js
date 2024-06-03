const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const port = process.env.APP_PORT;

// Import du router :
const routes = require('./src/routers/router.js');

// Nous préfixons le router avec le endpoint /api
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})