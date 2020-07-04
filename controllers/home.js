const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({})
        .then(data => {
            return data.json()
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: err.message
            })
        })
    res.render('index', {
        blogposts
    });
}