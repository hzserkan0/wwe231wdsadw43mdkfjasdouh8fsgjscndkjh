const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: TeenDevelopers - Yazılım Şirketi",
    url: "https://discordapp.com/invite/hQZTxnj",
    description: "Ana sponsorlardan, botun geliştirilmesinde büyük katkı sağlayan firmalardan biri.",
            }});
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":ok_hand: TeenHost - Bilişim Şirketi",
    url: "https://discord.gg/invite/vH44qzg",
    description: "Bot 'umuzun barındırıldıgı bilişim firmasıdır, discord bot geliştiricelerine ücretsiz destek vermekteler.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
