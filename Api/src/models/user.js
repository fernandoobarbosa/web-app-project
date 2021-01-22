import mongoose from '../config/database'

const GameSchema = mongoose.Schema({
  name: { type: String },
  genre: { type: String }
})

const UserSchema = mongoose.Schema({
  login: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  games: [GameSchema]
})

const User = mongoose.model('User', UserSchema)

export default User
