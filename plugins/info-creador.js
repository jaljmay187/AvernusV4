let handler  = async (m, { conn, usedPrefix, command }) => {
let picture = './media/menus/Menu1.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 AvernusBot (⁠◠⁠‿⁠◕⁠)`
await 
//conn.sendFile(m.chat, gataImg, 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 🌹 AvernusBot 💥 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb }}})}
conn.sendButton(m.chat, gata, `*Proximamente AvernusBot💥*\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], 'termux-setup-storage\n\napt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/gata.sh | bash', fkontak)}
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler



/* const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*_GRACIAS POR USAR ESTE BOT_*\n\n• Creador: Gabriel Ofc\n• Bot: AvernusBot-MD\n• Tipo: WhatsAppBot\n• Libreria: Baileys\n• Entorno: NodeJS\n\n> SOPORTE : SUPPORT\n\n◆ *ASISTENCIA : TELEGRAM\n> t.me/Avernus_SupportBot\n◆ *ASISTENCIA : CORREO*\n> *avernusbotwa@gmail.com*\n\n*------------------*\n\n◆ ıllıllı ＡＶＥＲＮＵＳ － ＢＯＴ ıllıllı\n\n*---------------------*``.trim();
  const buttonMessage= {
    'document': {url: `https://whatsapp.com/channel/0029VaiYqsM90x2u3k4WuA29`},
    'mimetype': `application/${document}`,
    'fileName': `「${mdk}」`,
    'fileLength': 99999999999999,
    'pageCount': 600000,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://whatsapp.com/channel/0029VaiYqsM90x2u3k4WuA29',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'NUMEROS OFICIALES',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/Lb1iaTkpIip7aMG6PEuIJ9'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;

/*var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
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

export default handler*/
