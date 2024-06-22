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


let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeMY.smsContacto2() : desc2}`

nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : official[4][0] == String(contact[0]) ? official[4][1] : lenguajeMY.smsContacto3() 
description = official[0][0] == String(contact[0]) ? '𝐒𝐎𝐋𝐎 𝐓𝐄𝐌𝐀𝐒 𝐃𝐄 𝐀𝐕𝐄𝐑𝐍𝐔𝐒' : official[1][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeMY.smsContacto4() : desc === '' ? lenguajeMY.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'avernusglobal@gmail.com' : official[1][0] == String(contact[0]) ? 'avernusglobal@gmail.com' : official[2][0] == String(contact[0]) ? lenguajeMY.smsContacto6() : mail === '' ? lenguajeMY.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[1][0] == String(contact[0]) ? '🇨🇴 Colombia' : official[2][0] == String(contact[0]) ? '🇳🇮 Nicaragua' : official[3][0] == String(contact[0]) ? '🇵🇾 Paraguay' : country === '' ? '🇵🇪 Perú' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/glytglobal' : official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : official[2][0] == String(contact[0]) ? 'https://whatsapp.com/channel/0029VadwlhHJuyA8lV8Ept3z' : official[3][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : md 

lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/BlfrM8qGlef5UUMkeLp21T' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeMY.smsContacto8(), mail === '' ? 'avernusglobal@gmail.com' : mail, lenguajeMY.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })

} catch (e) {
await m.reply(lenguajeMY['smsMalError3']() + '\n*' + lenguajeMY.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeMY.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.command = /^(contactos?|owner?|creador?)$/i //['contacto', 'contact']  

export default handler
