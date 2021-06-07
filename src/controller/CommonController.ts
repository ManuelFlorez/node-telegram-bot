import { Telegraf, Context } from 'telegraf'
import { registrarUsuarioService } from '../services/commonServices/RegistrarUsuarioService'
import { Command } from './Command'

export class CommonController {

  bot:Telegraf
  commands: Command[] = []

  constructor(bot:Telegraf) {
    this.bot = bot
    this.commands.push({ name: 'start', text: 'Iniciar asistencia virtual' })
    this.commands.push({ name: 'help', text: 'Mostrar las opciones del asistente' })
    this.commands.push({ name: 'test', text: 'prueba' })
    this.init();
  }

  init(): void {
    this.bot.start((ctx: Context) => {
      let update: any = ctx.update
      const { message } = update
      registrarUsuarioService(message, (data: string) => ctx.reply(data))      
    })
    this.bot.help((ctx: Context) => this.help(ctx) )
    this.bot.command('test', this.test )
  }

  test(ctx: Context) {
    ctx.reply('Soy un test en TypeScript')
  }

  help(ctx: Context) {
    let menu = 'Opciones\n\n';
    this.commands.forEach(e => menu += `/${e.name} ${e.text}\n`)
    ctx.reply(menu)
  }

}