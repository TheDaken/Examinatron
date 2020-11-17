const express = require('express')
const router = new express.Router()
const Preguntas = require('../models/preguntas')

router.post('/preguntas', async (req, res) => {
    const preguntas = new Preguntas(req.body)

    try {
        await preguntas.save()
        res.status(201).send(preguntas)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/preguntas', async (req, res) => {
    try {
        const preguntas = await Preguntas.find({})
        res.send(preguntas)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/preguntas/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const preguntas = await Preguntas.findById(_id)

        if (!preguntas) {
            return res.status(404).send()
        }

        res.send(preguntas)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/preguntas/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['artista', 'cancion','anyo']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const preguntas = await Preguntas.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!preguntas) {
            return res.status(404).send()
        }

        res.send(preguntas)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/preguntas/:id', async (req, res) => {
    try {
        const preguntas = await Preguntas.findByIdAndDelete(req.params.id)

        if (!preguntas) {
            res.status(404).send()
        }

        res.send(preguntas)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router


