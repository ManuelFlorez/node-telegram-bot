import { Schema, model } from 'mongoose'

const UsuarioSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  document: {
    type: String,
    require: false
  },
  code: {
    type: String,
    require: false
  },
  password: {
    type: String,
    require: false
  },
  id: {
    type: String,
    require: true
  }
})

export default model('Usuario', UsuarioSchema)