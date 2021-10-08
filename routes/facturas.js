const express = require('express');
const app = express();
const logs = require('../middleware/logs');

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Lorem ipsum'
    })
})

app.post('/', (req, res) => {
    res.status(200).json({
        message: 'Lorem ipsum'
    })
})

module.exports = app;