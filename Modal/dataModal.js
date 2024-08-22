const mongoose = require('mongoose')

const dataSchema=new mongoose.Schema({
    name:String,
    email:String,
    photo:String

})

const DATA =mongoose.model('DATA',dataSchema)

module.exports = DATA