//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
//Puedes editar el país,enlaces, los números se editan desde el config.js
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let pp = gataImg
const cat = `*---------------------*

◆ *ASISTENCIA:*
_GRACIAS POR USAR AVERNUSBOT-MD SI NECESITAS AYUDA O ASISTENCIA EN LA INSTALACION DEL BOT O SUS COMANDOS O REPORTAR ALGUN ERROR, PUEDES COMUNICAR CON NUESTRO EQUIPO DE SOPORTE_

◆ *ASISTENCIA : TELEGRAM*
> t.me/Avernus_SupportBot

◆ *ASISTENCIA : CORREO*
> *avernusbotwa@gmail.com*

*------------------*

◆ ıllıllı ＡＶＥＲＮＵＳ － ＢＯＴ ıllıllı 

*---------------------*`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
