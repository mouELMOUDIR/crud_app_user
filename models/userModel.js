const mongoose = require('mongoose')

const userSchema = mongoose.Model({
    username:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})