import { Telegraf, Context } from "telegraf"

import { registrarUsuarioService } from "../services/commonServices/RegistrarUsuarioService"

export class CommonController {

  bot:Telegraf

  constructor(bot:Telegraf) {
    this.bot = bot
    this.init();
  }

  init(): void {
    this.bot.start((ctx: Context) => {
      let update: any = ctx.update
      const { message } = update
      registrarUsuarioService(message, (data: string) => ctx.reply(data))      
    })
    this.bot.help( this.help )
    this.bot.command('test', this.test )
  }

  test(ctx: Context) {
    ctx.reply('Soy un test en TypeScript')
  }

  help(ctx: Context) {
    ctx.reply('Soy un test en help')
  }

}