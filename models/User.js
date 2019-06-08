const mongoose = require('../config/Mongoose')
const passwordHash = require('password-hash')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: true,
        index: {
            unique: true
        }
    },
    password: {
        type:String,
        default: ''
    }
})

UserSchema.pre('save', (next) => {
    var user = this
    if (!user.isModified('password')) return next()
    user.password = passwordHash.generate(user.password)
    next()
})

UserSchema.methods = {
    
    comparePassword(candidate, cb){
    return passwordHash.verify(candidate, this.password) 
            ? cb(null, true) 
            : cb('password not match')
    }

}

module.exports = mongoose.model('User', UserSchema)