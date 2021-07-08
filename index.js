require('dotenv').config();
const express = require('express');
const server = express();
console.log(process.env.PORT);
PORT = process.env.PORT || 5000;

server.get('/api', (req, res) => {
    console.log(req);
    res.json({
        message: "web43 is working and ready to serve",
    })
})

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
}) 