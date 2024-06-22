var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
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

await conn.sendFile(m.chat, pp, 'Hola.mp3', smsowner, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
