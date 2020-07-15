const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    const blogpost = await (await BlogPost.findById(req.params.id)).populated('userid')
    console.log(blogpost)
    res.render('post', {
        blogpost
    });
}