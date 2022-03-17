const mongoose = require('mongoose')


const dcSchema = new mongoose.Schema({
    
name: {type: String, required: true},
description: {type: String, required: true},
author: {type: String, required: true},
art: {type: String, required: true},
img: {type: String, required: true},
price: {type: Number, required: true},
qty: {type: Number, required: true},
mc: {type: String, required: true}


})


const Product = mongoose.model('Product', dcSchema)

module.exports = Product