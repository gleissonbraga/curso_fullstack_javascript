const express = require('express')
const postController = require('./controllers/postController')

const router = express.Router()

router.get('/', postController.index)
// Pegando o id enviado via url do user
router.get('/posts/:id', postController.show)

module.exports = router