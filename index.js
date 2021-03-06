require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'client/')));

console.log(process.env);
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;
const success = process.env.success;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'))
});

server.get('/api', (req, res) => {
    console.log(req);
    res.json({
        message: success,
    })
});

server.use((req, res) => {
    res.json({
        message: 'Sorry, could not serve'
    })
});

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});