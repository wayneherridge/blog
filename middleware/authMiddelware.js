const User = require('../models/User')

moduke.export = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user)
            return res.redirect('/')

        next()
    })
}