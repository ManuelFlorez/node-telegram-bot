import Usuario from '../../models/Usuario';
import { Message } from './Message';
import { logger } from '../../util/logger'

const tengoRegistro = (message: Message): string => {
  logger.info('Ya hay un registro!')
  return `${message.from.first_name} usted ya tiene un registro!`
}

const registrar = (message: Message, calback: Function) => {
  const usuario = new Usuario({ name:message.from.first_name, id: message.from.id })
  usuario.save().then(() => {
    logger.info('registrar exitoso')
    calback('Se registro exitosamente')
  },
    (reason) => {
      logger.warn('reason: esto no devio pasar', reason)
      calback('reason: esto no devio pasar')
    }
  )
}

const registrarUsuarioService = (message: Message, calback: Function) => {
  Usuario.findOne({ 'id':message.from.id }, (err: any, doc: any) => {
    if (err) {
      logger.error('Error al tratar de buscar un usuario')
      console.log('err', err)
      return
    }

    if (doc === null)
      registrar(message, calback)
    else
      calback( tengoRegistro(message) )
 
  })
}

export { registrarUsuarioService }