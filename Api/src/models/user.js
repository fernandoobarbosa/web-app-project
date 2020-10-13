import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/project', 
{useNewUrlParser: true, useUnifiedTopology: true});

const UserModel = mongoose.Schema({
    name:{type:String,require:true},
    password:{type:String,require:true}
})

const User = mongoose.model('User',UserModel)

export default User