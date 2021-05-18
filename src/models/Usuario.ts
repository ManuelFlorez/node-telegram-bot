import { Schema, model } from 'mongoose'

const UsuarioSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  id: {
    type: String,
    require: true
  }
})

export default model('Usuario', UsuarioSchema)