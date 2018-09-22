const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "HOZ BOT",
            },
			    "thumbnail": {
				 "url": "http://hizliresim.com/vPBV16"
			},
            title: "HOZ BOT KOMUTLAR",
            url: "http://hozbot.com",
            description: "",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: ";**destek**\n;**yardım**\n;**değişiklikler**\n;**istatistikler**\n;**sunucubilgi**\n;**davet**\n;**seviye-sistemi**\n;**ailemiz**"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: ";**temizle**\n;**ban**\n;**duyuruyap**\n;**uyar**\n;**kick**",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: ";**kedi**\n;**köpek**\n;**coolresim**\n;**köpekadı**\n;**kediadı**\n;**randomşifre**\n;**mcödül**\n;**woodie**\n;**emojiyazı**"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: ";**kullanıcıbilgim**\n;**avatarım**\n;**ping**\n;**madencilik**"
              },
              {
                name: "Güncel Sürüm",
                value: "v1 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "© Yeni neslin oyuncağı"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
