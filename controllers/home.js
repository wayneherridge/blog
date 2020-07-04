const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    let blogposts
    try {
        blogposts = await BlogPost.find({})
    } catch (err) {
        console.log(err.message)
    }
    res.render('index', {
        blogposts
    });
}