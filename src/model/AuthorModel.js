const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usernew:usernew@casestudyictak.gyjfp.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;