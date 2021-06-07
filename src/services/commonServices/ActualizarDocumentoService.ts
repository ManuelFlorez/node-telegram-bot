import { Message } from './Message'
import Usuario from '../../models/Usuario'
import { logger } from '../../util/logger'

const actualizarDocumentoService = (message: Message, calback: Function) => {
  const text = message.text.split(" ")
  let document = (text.length === 2) ? text[1] : null
  let num1 = parseInt(document, 10)
  document = (Number.isNaN(num1)) ? null : num1.toString();

  if (document === null) {
    const msg = `documento incorrecto, por favor vualva a intentar: ${document}`
    logger.warn(msg)
    calback(msg)
  } else {
    Usuario.findOne({ id: message.from.id }).then((usuario) => {
      usuario.set('document', document)
      usuario.save().then((usuario2) => {
        const msg = `${usuario2.get('name')} actualizaste tu documento: ${usuario2.get('document')}`
        logger.info(msg)
        calback(msg)
      })
    })
  }
  
}

export { actualizarDocumentoService }