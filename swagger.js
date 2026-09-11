const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Project 1 API',
        description: 'CSE341 Project 1 API'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],   
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);