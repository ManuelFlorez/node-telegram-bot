const {v, coin} = require('../percistence/percistence.js')

const start = (ctx) => {
  const { id, first_name } = ctx.update.message.chat
  const auxV = v.filter(obj => obj.id == id)

  if (auxV.length == 0) {
    v.push({ id, first_name })
    coin[id+'']=1
    ctx.reply(`${first_name} recibiste 1 USD`)
  } else {
    ctx.reply(`${first_name} ya ha iniciado una sesión`)
  }
}

exports.start = start;