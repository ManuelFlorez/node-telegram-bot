const {v, coin} = require('../percistence/percistence.js')

exports.dolar1 = (ctx) => {
  const { id, first_name } = ctx.update.message.chat

  if (coin[id+''] == undefined) {
    ctx.reply(`${first_name} debes iniciar con /start`)
    return
  }

  coin[id+''] += 1
  ctx.reply(`${first_name} ahora tienes ${coin[id+'']} USD`)
}