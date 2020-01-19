const swaggerJSDoc = require('swagger-jsdoc');
const packageJson = require('./package.json');

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Express Service', 
      version: packageJson.version, 
      description: 'Service used to manage users and user login'
    },
    servers: [
      { url: "http://localhost:3000", description: "Local API"},
    ]
  },
  apis: ['./routes/**/*.js'],
};

module.exports = swaggerJSDoc(options);
