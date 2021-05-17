import { Telegraf, Context } from "telegraf";

export class CommonController {

  bot:Telegraf

  constructor(bot:Telegraf) {
    this.bot = bot
    this.init();
  }

  init(): void {
    this.bot.start( this.start );
    this.bot.help( this.help );
    this.bot.command('test', this.test )
  }

  test(ctx: Context) {
    ctx.reply('Soy un test en TypeScript')
  }

  start(ctx: Context) {
    ctx.reply('Soy un test en start')
  }

  help(ctx: Context) {
    ctx.reply('Soy un test en help')
  }

}