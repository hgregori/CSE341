const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/professional', (req, res) => {
    res.json({
        professionalName: 'Henrique Missieri',
        base64Image: '',
        nameLink: {
            firstName: 'Henrique',
            url: 'https://github.com'
        },
        primaryDescription: 'Software Development Student',
        workDescription1: 'Aprendendo Express.js',
        workDescription2: 'Aprendendo APIs REST',
        linkTitleText: 'Links',
        linkedInLink: {
            text: 'LinkedIn',
            link: 'https://linkedin.com'
        },
        githubLink: {
            text: 'GitHub',
            link: 'https://github.com'
        }
    });
});

app.listen(PORT, () => {
    console.log("Web server is running on port " + PORT);
});