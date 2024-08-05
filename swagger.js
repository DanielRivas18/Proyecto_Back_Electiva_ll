const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Veterinary Clinic API',
      version: '1.0.0',
      description: 'API documentation for the Veterinary Clinic system',
    },
    servers: [
      {
        url1: 'http://localhost:3000/api',
        description1: 'Local server',
        url: 'http://localhost:3000/api',
        description: 'Local server 3',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
