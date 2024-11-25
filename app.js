const express = require ('express');
const mysql = require ('mysql2');
const app = express();

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'projetoice_t'
});

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('conexao efetuada com sucesso!')
});

//servidor
app.listen(8080);