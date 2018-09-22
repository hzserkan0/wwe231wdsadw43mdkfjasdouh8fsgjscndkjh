const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, msg, args) => {
  var game = args.join("Botumuz Yazım Aşamasında.").trim();
  if(!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
  msg.delete().catch(console.error);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["game"],
  permLevel: 4
};

exports.help = {
  name: 'oynuyor',
  description: 'Changes the "Playing" status (game).',
  usage: 'oynuyor'
};
