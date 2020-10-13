import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/project', 
{useNewUrlParser: true, useUnifiedTopology: true});

const PostModel = mongoose.Schema({
    titulo:{type:String,require:true},
    categoria:{type:String,require:true},
    corpo:{type:String,require:true}
})

const Post = mongoose.model('Post',PostModel)

export default Post