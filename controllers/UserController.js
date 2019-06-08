const User = require('../models/User')
const jwt  = require('jsonwebtoken'); 

module.exports = {
    register(req, res) {
        var user = new User(req.body);

        user.save(err => {
            if (err) throw err;

            res.json(user)
        })
    },

    login(req, res) {
        User.findOne({
            username: req.body.username
        }, (err, user) => {
            if (err) throw err;

            user.comparePassword((err, isMatch) => {
                if (err) throw err
                
                var token = jwt.sign({
                    data: user
                }, process.env.SECRET, {
                    expiresIn: '5h'
                })

                isMatch ? res.json({
                    message: 'sucess',
                    data   : token
                }) : res.json({
                    message: 'failed',
                    data: err
                })

                
            }) 
        })
    }
}