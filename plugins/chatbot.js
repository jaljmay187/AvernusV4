import '../plugins/_content.js'
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*✨ ¡HEY ESTOY AQUI!*`, `*😑 QUE?*`])}`.trim()
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
}
  
return !0 
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
