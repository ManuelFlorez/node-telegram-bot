import { Message } from './Message'

const notificacionService = (message: Message, calback: Function) => {
  calback('Esta funcionalidad notificacion estara disponible muy pronto')
}

export { notificacionService }