import express from 'express'; //para gerenciar rotas

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // response.send("Hello world!");
    response.json(
        [
            'User 1',
            'User 2',
            'User 3',
            'User 4',
            'User 5',
            'User 6'
        ]);
});

app.listen(3333); //indica a porta onde vai rodar a aplicação

