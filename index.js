require('dotenv').config();

const express = require("express");

const server = express();
const PORT = process.env.PORT || 9000;

server.get('/', (req, res) => {
    res.end('<h1>hello world</h1>');
});

server.listen(PORT, () => {
    console.log(`server is up on Port ${PORT}`);
});