const Annotations = require('../models/AnnotationData')

module.exports = {

    async read(request, response){
        const annotationList = await Annotations.find()
        return response.json(annotationList)
    },

    //função que cria um registro dentro do banco
    async create(request, response){
        console.log(request.body)
        const {title, notes, priority} = request.body;

        if(!notes || !title){
            return response.status(400).json({ error: "é preciso fazer o preenchimento dos campos!!!!"})
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        })

        return response.json(annotationCreated)        
    },

    async delete(request, response){
        const { id } = request.params

        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id })
        if(annotationDeleted){
            return response.json(annotationDeleted)
        }

        return response.status(401).json({ error: "registro não encontrado na base"})
    }
}