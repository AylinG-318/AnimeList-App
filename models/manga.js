// This will be the manga titles themselves. 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Manga = new Schema( 
    {
        manga_title: {type: String, required: true},
        manga_author: {type: String, required: true},
        manga_image: {type: String, required: true}
        // I'll leave it super basic for now. The focus
        // is on the posts this time around. 
    },
    {timestamps: true}
)

module.exports = mongoose.model('manga', Manga);