import Usuario from '../../models/Usuario';
import { Message } from './Message';
import { logger } from '../../util/logger'

const logError = (err: any) => console.log('err', err)
const logRegisterSuccess = (doc: any) => logger.info('registrar exitoso', doc)
const logRegisterFaile = (doc: any) => logger.info('Ya hay un registro!', doc)

const tengoRegistro = (message: Message): string => {
  logRegisterFaile(message)
  return `${message.from.first_name} usted ya tiene un registro!`
}

const registrar = (message: Message, calback: Function) => {
  const usuario = new Usuario({ name:message.from.first_name, id: message.from.id })
  usuario.save().then(() => {
    logRegisterSuccess(usuario)
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
      logError(err);
      return
    }

    if (doc === null)
      registrar(message, calback)
    else
      calback( tengoRegistro(message) )
 
  })
}

export { registrarUsuarioService }