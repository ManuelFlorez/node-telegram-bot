import { Telegraf, Context } from 'telegraf'
import { actualizarClaveService } from '../services/commonServices/ActualizarClaveService'
import { actualizarCodeService } from '../services/commonServices/ActualizarCodeService'
import { actualizarDocumentoService } from '../services/commonServices/ActualizarDocumentoService'
import { conectarService } from '../services/commonServices/ConectarService'
import { registrarUsuarioService } from '../services/commonServices/RegistrarUsuarioService'
import { Command } from './Command'

export class CommonController {

  bot:Telegraf
  commands: Command[] = []

  constructor(bot:Telegraf) {
    this.bot = bot
    this.commands.push({ name: 'start', text: 'Iniciar asistencia virtual' })
    this.commands.push({ name: 'documento', text: 'Actualice el documento' })
    this.commands.push({ name: 'codigo', text: 'Actualice el codigo' })
    this.commands.push({ name: 'clave', text: 'Actualice la clave' })
    this.commands.push({ name: 'conectar', text: 'Conectar con Divisist2.0' })
    this.commands.push({ name: 'help', text: 'Mostrar las opciones del asistente' })
    this.init();
  }

  init(): void {
    this.bot.start((ctx: Context) => {
      let update: any = ctx.update
      const { message } = update
      registrarUsuarioService(message, (data: string) => ctx.reply(data))      
    })
    this.bot.help((ctx: Context) => this.help(ctx) )
    this.bot.command('documento', this.addDocument)
    this.bot.command('codigo', this.addCode)
    this.bot.command('clave', this.addClave)
    this.bot.command('conectar', this.conectar )
  }

  test(ctx: Context) {
    ctx.reply('Soy un test en TypeScript')
  }

  addDocument(ctx: Context) {
    let update: any = ctx.update
      const { message } = update
    actualizarDocumentoService(message, (data: string) => ctx.reply(data))
  }

  addCode(ctx: Context) {
    let update: any = ctx.update
    const { message } = update
    actualizarCodeService(message, (data: string) => ctx.reply(data))
  }

  addClave(ctx: Context) {
    let update: any = ctx.update
    const { message } = update
    actualizarClaveService(message, (data: string) => ctx.reply(data))
  }

  conectar(ctx: Context) {
    let update: any = ctx.update
    const { message } = update
    conectarService(message, (data: string) => ctx.reply(data))
  }

  help(ctx: Context) {
    let menu = 'Opciones\n\n';
    this.commands.forEach(e => menu += `/${e.name} ${e.text}\n`)
    ctx.reply(menu)
  }

}