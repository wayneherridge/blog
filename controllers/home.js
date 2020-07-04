const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    try {
        const blogposts = await BlogPost.find({})
    } catch (err) {
        console.log(err.message)
    }
    res.render('index', {
        blogposts
    });
}