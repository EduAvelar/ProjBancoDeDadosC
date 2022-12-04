const mongoose = require('mongoose')

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
    /*fabricante: String,
    modelo: String,
    ano: String,
    descricao: String*/
})

module.exports = mongoose.model('Annotations', AnnotationDataSchema)