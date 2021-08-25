const Titulo = require('../models/titulo')
const mongoose = require('mongoose')
const estudio = require('../models/estudio')

const getAll = async (req,res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
}

const getAllPixar = async (req,res) => {
    const titulos = await Titulo.find().populate('estudio') //o populate vai preencher autom. o nome do estudio
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == 'Pixar')
    res.status(200).json(titulosFiltrados)
}

const getAllDisney = async (req,res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == 'Disney')
    res.status(200).json(titulosFiltrados)
}

const getAllDreamworks = async (req,res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "DreamWorks")
    res.status(200).json(titulosFiltrados)
}

const getAllMarvel = async (req,res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    res.status(200).json(titulosFiltrados)
}


const createTitle = async (req,res) => {
    const titulo = new Titulo ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm

    })

    const tituloJaExiste = await estudio.findOne({nome: req.body.nome})
    if(estudioJaExiste) {
        return res.status(404).json({error: "Título já cadastrado"})
    }
    try{
      const novoTitulo = await titulo.save()
      res.status(200).json(novoTitulo)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
}

const updateOne = async (req,res) => {
    try{
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null) {
            return res.status(404).json({'message': 'Título não encontrado'})
        }

        if(req.body.nome != null) {
            titulo.nome = req.body.nome
        }
        //depois de verificar que o body tem um novo titulo, agora vamos salvar nessa const p aparecer o novo titulo
        const tituloAtualizado = await titulo.save()
        res.status(200).json(tituloAtualizado)

    } catch(err) {
        res.status(500).json({'message': err.message})

    }
}

const deleteTitulo = async (req,res) => {
    const titulo = await Titulo.findById(req.params.id)
    if(titulo == null) {
        return res.status(404).json({'message': 'Título não encontrado'})  
    }

    try{
        await titulo.remove()
        res.status(200).json({'message': 'Título deletado com sucesso!!'})

    } catch(err){
        res.status(500).json({'message': err.message})

    }

}









module.exports = {
    getAll,
    getAllPixar,
    getAllDisney,
    getAllDreamworks,
    getAllMarvel,
    createTitle,
    updateOne,
    deleteTitulo
}