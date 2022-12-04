//mongodb+srv://eduavelar:9483Eduh@projbancodedadosc.jdlizlx.mongodb.net/?retryWrites=true&w=majority
//logo após o mongodb+srv...mongodb.net/<nome do database>?... => vamos indiciar o nosso database que será usado, para que ele faça a conexão com o MongoDB que está na web
//e também aparaça no insomnia quando testar


const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://eduavelar:9483Eduh@projbancodedadosc.jdlizlx.mongodb.net/annotations?retryWrites=true&w=majority'

//variavel para fazer a conexão com o mongo
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection
