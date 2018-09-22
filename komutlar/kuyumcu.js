const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "Selamun aleyküm bro ben kuyumcu köksal baba ne isterdiniz ?\nbilezik --> 15g altın\nyüzük --> 20g altın\n**Hacı şimdilik bu kadar satıyorum belki daha fazla satarım**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kuyumcu',
  description: 'kuyumcu gösterir.',
  usage: 'kuyumcu'
};
