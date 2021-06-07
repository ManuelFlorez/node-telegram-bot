import { Message } from './Message'
import Usuario from '../../models/Usuario'
import { logger } from '../../util/logger'

const actualizarClaveService = (message: Message, calback: Function) => {
  const text = message.text.split(" ")
  let password = (text.length === 2) ? text[1] : null

  if (password === null || password === '') {
    const msg = `clave incorrecta, por favor vualva a intentar: ${password}`
    logger.warn(msg)
    calback(msg)
  } else {
    Usuario.findOne({ id: message.from.id }).then((usuario) => {
      usuario.set('password', password)
      usuario.save().then((usuario2) => {
        const msg = `${usuario2.get('name')} actualizaste tu clave: ${usuario2.get('password')}`
        logger.info(msg)
        calback(msg)
      })
    })
  }
}

export { actualizarClaveService }