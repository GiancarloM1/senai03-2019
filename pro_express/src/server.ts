import express = require("express");
import { request } from "http";
var cors = require('cors');
var bodyParser = require('body-parser');
let cidades : any = [];

const app: express.Application = express();

cidades.push(
    {
        id : 1,
        name : "Jaraguá do Sul"
    },
    {
        id : 2,
        name : "Corupá"
    },
    {
        id : 3,
        name : "Guaramirim"
    }
   );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.get('/teste', (request, response) =>{
    response.send(cidades);

});

const port: number = 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});


