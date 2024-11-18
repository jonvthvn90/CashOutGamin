const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Cash Out Gaming API',
      version: '1.0.0',
      description: 'API documentation for Cash Out Gaming',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;