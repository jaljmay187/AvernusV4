var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let pp = gataImg        
const smsowner = `*---------------------*

◆ *ASISTENCIA:*
_GRACIAS POR USAR AVERNUSBOT-MD SI NECESITAS AYUDA O ASISTENCIA EN LA INSTALACION DEL BOT O SUS COMANDOS O REPORTAR ALGUN ERROR, PUEDES COMUNICAR CON NUESTRO EQUIPO DE SOPORTE_

◆ *ASISTENCIA : TELEGRAM*
> t.me/Avernus_SupportBot

◆ *ASISTENCIA : CORREO*
> *avernusbotwa@gmail.com*

*------------------*

◆ ıllıllı ＡＶＥＲＮＵＳ － ＢＯＴ ıllıllı 

*---------------------*`

await conn.reply(m.chat, pp, smsowner, fakeChannel)
}
handler.help = ['creadorofc']
handler.tags = ['glytmx']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
