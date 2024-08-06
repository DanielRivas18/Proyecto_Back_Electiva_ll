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
        
        url: 'https://proyecto-back-electiva-ll.onrender.com/api',
        description: 'Local server 3',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
