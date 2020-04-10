const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({

    name:{
        Type: String,
        trim: true,
        required: true
    },

    email:{
        Type: String,
        trim: true,
        required: true
    },

    hashed_password:{
        Type: String,
        required: true
    },

    salt: String,
    created: {
        type: Date,
        default:Date.now
    },

    update: Date
});


// virtual feild
userSchema.virtual('password')
.set(function(password){
    // create temporary  variable called _passsword
    this._password = password

    // generating time stamp
    this.salt = uuidv1()

    // encryptedpassword
    this.hashed_password = this.encryptpassword(password)
})
.get(function(){
    return this._password
})

//method
userSchema.methods = {
    encryptpassword: function(password){
        if(!password) return"";
        try{
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .dogest('hex');
        } catch(err){

        }
    }
}


module.exports = mongoose.model('User', userSchema);