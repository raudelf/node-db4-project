const express = require('express');

const CookingRouter = require('./endpoints/cooking-router.js');

const server = express();

server.use(express.json());
server.use('/api', CookingRouter);

module.exports = server;
