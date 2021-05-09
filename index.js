const { Telegraf } = require('telegraf')

require('dotenv').config()

const { start } = require('./application/operations/start.js')
const { help } = require('./application/operations/help.js')
const { dolar1 } = require('./application/operations/dolar1.js')

const { infoManuel } = require('./application/route/info.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start( start );

bot.help( help );

bot.hears('admin', infoManuel)

bot.hears('1dolar', dolar1)

bot.hears('date', (ctx) => ctx.reply(new Date().toLocaleString()))


bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

