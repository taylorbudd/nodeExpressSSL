const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const publicDirPath = express.static(path.join(__dirname, 'public'));

app.use(cors());
app.use(express.json());
app.use(publicDirPath);

app.get('', (req, res) => {
    res.sendFile('index.html');
});

app.get('/api/instructors', (req, res) => {
    const instructors = [
        {
            id: 1,
            firstName: 'Chris',
            lastName: 'Cusack'
        },
        {
            id: 2,
            firstName: 'Delon',
            lastName: 'Van de Venter'
        },
        {
            id: 3,
            firstName: 'Stephen',
            lastName: 'Carter'
        },
        {
            id: 4,
            firstName: 'Dave',
            lastName: 'Burchill'
        },
        {
            id: 5,
            firstName: 'Andre',
            lastName: 'Bourdreau'
        }
    ]

    res.status(200).send(instructors);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});