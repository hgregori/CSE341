const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Project 1 API',
        description: 'CSE341 Project 1 API'
    },
    host: 'cse341-mbw6.onrender.com',
    schemes: ['https']
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// swagger generator
swaggerAutogen(outputFile, endpointsFiles, doc);