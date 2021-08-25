const mongoose = require('mongoose')   //criando minha conexao com a database

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/filmes-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

    .then(console.log('Database conectada com sucesso!'))  //promessa de retorno de sucesso ou falha na conexão da minha database
    .catch(err => console.err)
}

module.exports = {connect}
