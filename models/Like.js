const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List = new Schema( 
    {
    user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
    //Above MUST be changed to reference the user.
    anime_id: {type: Number, required: true},
    //Remember, the mal_id for our anime is stored as a number. Check the API call. 

    //Now, what else do we need?
     
    }

)
