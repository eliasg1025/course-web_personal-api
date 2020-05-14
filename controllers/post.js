const Post = require('../models/Post');

function addPost(req, res) {
    const body = req.body;
    const post = new Post(body);

    post.save((err, postStored) => {
    	if (err) {
    		res.status(500).send({ code: 500, message: 'Error del servidor' });
    	} else {
    		if (!postStored) {
    			res.status(400).send({ code: 400, message: 'No se ha podido crear el post' });
    		} else {
    			res.status(200).send({ code: 200, message: 'Post creado correctamente' });
    		}
    	}
    });
}

function getPost(req, res) {
	const { page=1, limit=10 } = req.query;
}

module.exports = {
    addPost,
    getPost
};
