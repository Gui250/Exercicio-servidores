import express, { Request, Response  } from 'express'; 
import 'dotenv/config';
 


const servidor = express(); 
 
let numero1 = Number(process.env.NUM_1); 
let numero2 = Number(process.env.NUM_2); 

let soma = numero1 + numero2; 
let subtracao = numero1 - numero2; 
let multiplicacao = numero1 * numero2; 
let divisao = numero1 / numero2;

servidor.get('/soma', (requisicao, resposta) => { 
    return resposta.send(`A soma dos números é ${soma}`);
})

servidor.get('/subtrair', (requisicao, resposta) => { 
    return resposta.send(`A subtração dos números é ${subtracao}`);
})

servidor.get('/multiplicar', (requisicao, resposta) => { 
    return resposta.send(`A multiplicação dos números é ${multiplicacao}`);
})

servidor.get('/dividir', (requisicao, resposta) => { 
    return resposta.send(`A divisão dos números é ${divisao}`);
})



servidor.listen(process.env.PORT);