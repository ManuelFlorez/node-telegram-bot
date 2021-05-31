import { Telegraf, Context } from "telegraf";
import Usuario from "../models/Usuario";

export class CommonController {

  bot:Telegraf

  constructor(bot:Telegraf) {
    this.bot = bot
    this.init();
  }

  init(): void {
    this.bot.start((ctx: Context) => {
      this.start(ctx)
    })
    this.bot.help( this.help );
    this.bot.command('test', this.test )
  }

  test(ctx: Context) {
    ctx.reply('Soy un test en TypeScript')
  }

  async start(ctx: Context) {
    let update: any = ctx.update
    const { message } = update
    const user = await this.findUsuario(message.from.id)
    const obj = (user === null) ? await this.addRegister(message) : await this.noRegister(user)
    ctx.reply(obj.resp)
  }

  async findUsuario(id:string) {
    const resp:any = await Usuario.findOne({ 'id':id })
    return resp === null ? null : { usu: resp, name: resp.name }
  }

  async addRegister(message:any) {
    const usu = new Usuario({ name:message.from.first_name, id: message.from.id })
    const usuario = await usu.save()
    return { usu:usuario, resp: 'Se registro exitosamente'}
  }

  noRegister(usu:any) {
    return { usu, resp: `${usu.name} usted ya tiene un registro!` }
  }  


  help(ctx: Context) {
    ctx.reply('Soy un test en help')
  }

}