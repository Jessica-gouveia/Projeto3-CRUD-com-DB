const express = require('express')
const router = express.Router()
const controller = require("../controllers/tituloController")

router.get('/', controller.getAll)

router.get('/pixar', controller.getAllPixar)

router.get('/disney', controller.getAllDisney)

router.get('/dreamworks', controller.getAllDreamworks)

router.get('/marvel', controller.getAllMarvel)

router.post('/', controller.createTitle) 

router.patch('/:id', controller.updateOne)

router.delete('/:id', controller.deleteTitulo)

module.exports = router

