import express from 'express'; //para gerenciar rotas

const app = express();
app.use(express.json()); //adiciona uma funcionalidade ao express, para poder usar formato json no corpo da requisição

const users = [ 
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
    'User 6'
]

app.get('/users', (request, response) => {
    // console.log('Listagem de usuários');
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    // response.send("Hello world!");
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); //converte em número por causa do typescript
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333); //indica a porta onde vai rodar a aplicação

