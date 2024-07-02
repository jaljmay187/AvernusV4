function handler(m) { 
   const data = global.owner.filter(([isCreator]) => isCreator) 
   conn.sendContact(m.chat, data.map(([name]) => [name]), m) 
   conn.reply(`CONTACTA CON MI CREADOR\n*Nota:* no realize spam a su privado`);
 } 
  
 handler.help = ['creador'] 
 handler.tags = ['main'] 
 handler.command = ['owner', 'creator', 'creador', 'dueño']  
  
 export default handler
