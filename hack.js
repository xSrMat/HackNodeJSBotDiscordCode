const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hack",
  alias: ["hacking", "doxing", "doxeo", "hackear"],
  
  async execute (client, message, args){

    let ending = ["**EXITO**\n pudiste hackear y vender toda la información de", "**FAILED**\n error 53, intenta hackear de nuevo a", "**FAILED**\n error 41, intenta hackear de nuevo a", "**FAILED**\n error 303, intenta hackear de nuevo a", "**FAILED**\n error 404, estas intentando hackear sin internet, alto bobi, conectate a internet e intenta hackear de nuevo a", "**BAD ENDING**\n te busca el FBI por intentar hackear a"]

    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send(" ok, estás hackeando elige a otra persona")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("¿A quién vas a hackear? Por favor mencionalo");
}
const prompt = await message.channel.send(`Hackeando a ${user ? hacked.username : hacked}...`);
    
   await wait(2700);
     await  prompt.edit('Buscando informacion de Discord...');
     await wait(2700);
     await  prompt.edit(`¡Información encontrada!:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
     await  wait(3700);
     await  prompt.edit('Obteniendo mensajes privados...');
     await  wait(3700);
     await prompt.edit('Listado de palabras más comunes...');
     await  wait(2700);
     await  prompt.edit(`Inyectando virus en su discriminador #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('Virus inyectado');
     await  wait(3700);
    
   await prompt.edit('Buscando direción IP...');
    await wait(5000);
   await  prompt.edit('¡Direción IP encontrada!');
    await wait(5000);
   await  prompt.edit('Spameando email...');
   await wait(6700);
   await  prompt.edit('Vendiendo datos a facebook...');
    await wait(6700);
   await  prompt.edit('Esperando resultados.');
    await   wait(1000);
    await  prompt.edit('Esperando resultados..');
      await   wait(1000);
    await  prompt.edit('Esperando resultados...');
    await   wait(1000);
    await  prompt.edit('Esperando resultados.');
    await   wait(1000);
    await  prompt.edit('Esperando resultados..');
    await   wait(1000);
    await  prompt.edit('Esperando resultados...');
    await   wait(2000);
    await  prompt.edit('**Resultado:**');
    await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`${ending[Math.floor(Math.random() * ending.length)]} **${user ? hacked.username : hacked}**`)
  .setImage("https://c.tenor.com/epHCkLzYdTsAAAAd/hacker-hack.gif");
  await prompt.delete
   await  message.channel.send(embed);
    

  }
}
