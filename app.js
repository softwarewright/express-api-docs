const express = require('express');

const app = express();
const routes = require('./routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger-docs');

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
