const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({  // creating schema for user
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
    },
    title:{
        type: String,
        // required: true
        default: "title"
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: String,
        default: Date.now
    },

  });

  module.exports = mongoose.model('notes', NotesSchema); 