import { somar, dobro } from './services.js';


import {Router} from 'express'
const server = Router();



server.get('/ping', (req, resp) => {
    resp.send('pong retornou');
})

server.get('/dobro/:numero', (req, resp) => {
    const numenv = req.params.numero;

    const calcular = dobro(numenv);

    resp.send({
        dobro: calcular
    });
})

server.get('/somar', (req,resp) => {
    const v1 = Number(req.query.valor1);
    const v2 = Number(req.query.valor2);

    const calculo = somar(v1, v2);

    resp.send({
        soma: calculo
    });
})

server.post('/somar', (req, resp) => {

    const {um, dois} = req.body;

    const calc = um + dois ;

    resp.send({
        resultado: calc
    })
})

export default server;