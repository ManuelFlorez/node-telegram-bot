import { AdminController } from './controller/AdminController'
import { CommonController } from './controller/CommonController'
import { StudentController } from './controller/StudentController'
import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
import { connect } from './persistence/database'
import { logger } from './util/logger'

dotenv.config()
connect()

const bot:Telegraf = new Telegraf(process.env.BOT_TOKEN)

const commonController = new CommonController(bot)
const adminController = new AdminController(bot)
const studentController = new StudentController(bot)

logger.info('bot inicializado');

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))