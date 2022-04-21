// make a post -- see if you can connect it to manga. 

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Post = new Schema( 
    {
        post_user: {type: Schema.Types.ObjectId, ref: 'user_id'},
        post_manga: {type: String, required: true},
        //Later, I'll connect it to a manga id.
        //so we can get all blog posts associated w/ it.
        post_text: {type: String, required: true},
        post_date: {type: Date, required: true},
        post_image: {type: String}
        //I want the image to be optional. 
    },
    {timestamps: true}
)

module.exports = mongoose.model('post', Post)