import { Telegraf } from "telegraf";

export class StudentController {

  bot:Telegraf

  constructor(bot:Telegraf) {
    this.bot = bot
  }
}