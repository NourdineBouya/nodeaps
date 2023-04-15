const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title   : {
        type: String,
        required: true,
    },
    descreption   : {
        type: String,
        required: true,
    },
    salary   : {
        type: String,
        required: true,
    },
    company   : {
        type: String,
        required: true,
    },
    author   : {
        type: String,
        required: true,
    },
    skils   : {
        type: String,
        required: true,
    },
    categories   : {
        type: String,
        required: true,
    },
    degree   : {
        type: String,
        required: true,
    },
    contrat   : {
        type: String,
        required: true,
    },
    fonction   : {
        type: String,
        required: true,
    },
    location   : {
        type: String,
        required: true,
    },
     

},
{
    timestamps : true
}
)

module.exports = mongoose.model('Products' , productSchema)