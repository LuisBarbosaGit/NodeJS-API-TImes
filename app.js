import tabela2024 from "./tabela.js";
import express from 'express';

 const app = express();

 app.get('/times', (requisicao, resposta) => {
    resposta.send(tabela2024);
 });

 app.get('/times/nome/:sigla',(requisicao, resposta) =>{
    const sigla = requisicao.params.sigla;
    const time = tabela2024.find(time => time.sigla === sigla);
    if (!time) return resposta.status(404).send('Time não encontrado');
    resposta.send(time);
 })

 app.listen(3000, () => console.log('server is running'));