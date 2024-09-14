const { postModel } = require("../models/postModel")

const postController = {
    // GET /
    index: (req, res) => {
        // fez a requisição em models chamando a classe e o metodo
        const posts = postModel.getAllPosts() 

        // renderiz para trazer a informação na view
        res.render('index', { posts }) 
    },

    // GET /posts/:id
    show: (req, res) => {
        const id = req.params.id
        const post = postModel.getPostById(id)

        res.render('post', { post })
    }
}

module.exports = postController