const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    email: {
        type: mongoose.Types.ObjectId,
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

module.exports = Message = mongoose.model('message', messageSchema)