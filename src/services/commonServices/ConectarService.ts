import { Message } from './Message'
import Usuario from '../../models/Usuario'
import { logger } from '../../util/logger'

const conectarService = (message: Message, calback: Function) => {
  Usuario.findOne({ id: message.from.id }).then((usuario) => {
    const msg = `${usuario.get('name')} Se esta conectando con Divisist2.0`
    logger.info(msg)
    calback(msg)
  })
  
}

export { conectarService }