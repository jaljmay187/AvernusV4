let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `𝐏𝐔𝐄𝐃𝐄𝐒 𝐔𝐓𝐈𝐋𝐈𝐙𝐀𝐑 𝐀𝐕𝐄𝐑𝐍𝐔𝐒𝐁𝐎𝐓-𝐌𝐃 𝐄𝐍 𝐋𝐎𝐒 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒\n\n𝐓𝐄 𝐈𝐍𝐕𝐈𝐓𝐎 𝐀 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐑 𝐃𝐄 𝐄𝐒𝐓𝐀 𝐇𝐄𝐑𝐌𝐎𝐒𝐀 𝐘 𝐏𝐄𝐐𝐔𝐄Ñ𝐀 𝐀𝐕𝐄𝐍𝐓𝐔𝐑𝐀\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *ACTUALIZACIONES!!!*
➥ *${canal1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐀𝐯𝐞𝐫𝐧𝐮𝐬
➥ *${soporteAV}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
➥ *${grupo1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟐
➥ *${grupo2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟑
➥ *${grupo3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌟 *COLABORACIÓN CON AVERNUS*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🌹 𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭 × 𝐁𝐚𝐢𝐥𝐞𝐲𝐁𝐨𝐭 🌹
*${grupo_collab1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌹 𝐀𝐯𝐞𝐫𝐧𝐮𝐬𝐁𝐨𝐭 × 𝐊𝐢𝐫𝐚𝐁𝐨𝐭 🌹
*${grupo_collab2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\n\n_POR FAVOR NO ENTRAR CON NUMEROS DE OTROS TIPOS DE BOTS DE WHATSAPP Y EVITAR HACER SPAM, SIGUE EL REGLAMENTO DADO POR LOS ADMINISTRADORES Y LA DESCRIPCION_`
await conn.sendButton(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, [
['𝐂𝐮𝐞𝐧𝐭𝐚𝐬 𝐎𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬', '.cuentasgb'],
['𝐑𝐞𝐚𝐥𝐢𝐳𝐚𝐫 𝐃𝐨𝐧𝐚𝐜𝐢𝐨𝐧', '.donar'],
['𝐄𝐧𝐯𝐢𝐚𝐫 𝐌𝐞𝐧𝐮', '/menu']], null, [
['𝐃𝐞𝐣𝐚𝐫 𝐄𝐬𝐭𝐫𝐞𝐥𝐥𝐢𝐭𝐚', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
