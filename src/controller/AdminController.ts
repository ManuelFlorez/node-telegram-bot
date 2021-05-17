import { Telegraf } from "telegraf";

export class AdminController {

  bot:Telegraf

  constructor(bot:Telegraf) {
    this.bot = bot
  }
}