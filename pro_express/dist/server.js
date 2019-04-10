"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var cidades = [];
var app = express();
cidades.push({
    id: 1,
    name: "Jaraguá do Sul"
}, {
    id: 2,
    name: "Corupá"
}, {
    id: 3,
    name: "Guaramirim"
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.get('/teste', function (request, response) {
    response.send(cidades);
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
