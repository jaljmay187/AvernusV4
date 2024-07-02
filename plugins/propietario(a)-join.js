let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `*⛔️ AGREGAR ENLACE ⛔️*\nDEBE AGREGAR UN ENLACE DE UN GRUPO DE WHATSAPP\n\n*EJEMPLO:* https://chat.whatsapp.com/Lb1iaTkpIip7aMG6PEuIJ9\n`
if ( isMods || isOwner || m.fromMe) {
m.reply(`*✨️ ¡HOLA! INGRESE A TU GRUPO EN EXITO.*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*✨️ SOLICITUD PARA UN GRUPO ✨️*\n\n*SOLICITADO POR:*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*ENLACE RECIBIDO:*\n ' + link, jid)

m.reply(`${ag}*✨️ TU ENLACE SE ENVIO A MI PROPIETARIO CON EXITO*\n\n*ASEGURESE QUE SU GRUPO NO CONTENGA CONTENIDO PORNOGRAFICO O TEMAS ILEGALES COMO TAL*\n\n*EL EQUIPO DE AVERNUSBOT NO SE HACE RESPONSABLE DE LOS ACTOS COMETIDOS EN SU GRUPO DE WHATSAPP Y LO QUE EL BOT REALIZE O NO*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
