import { Message } from './Message'
import Usuario from '../../models/Usuario'
import { logger } from '../../util/logger'

const actualizarCodeService = (message: Message, calback: Function) => {
  const text = message.text.split(" ")
  let code = (text.length === 2) ? text[1] : null
  let num1 = parseInt(code, 10)
  code = (Number.isNaN(num1)) ? null : num1.toString();

  if (code === null) {
    const msg = `código incorrecto, por favor vualva a intentar: ${code}`
    logger.warn(msg)
    calback(msg)
  } else {
    Usuario.findOne({ id: message.from.id }).then((usuario) => {
      usuario.set('code', code)
      usuario.save().then((usuario2) => {
        const msg = `${usuario2.get('name')} actualizaste tu código: ${usuario2.get('code')}`
        logger.info(msg)
        calback(msg)
      })
    })
  }
}

export { actualizarCodeService }