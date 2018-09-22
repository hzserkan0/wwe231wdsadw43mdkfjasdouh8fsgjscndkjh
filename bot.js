const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam, '); 
		} else {
		msg.reply('Aleyküm selam, ');
		}
	}
});


client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hacked") {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("⏲ | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487837060326227972/image0.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 2, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

client.on("ready", async message => {
  var Activity = [
      
      "Sitemiz Şuanda Yokdur Daha Sonra Açılacaktır",
      
      "Botumuzu Tavsiye Edenlere Teşekkürler",
      
      "-yardım Aktifff!",

      "Botumu Sunucunuza Davet Etmek İçin -davet",
    
      "Yapımcım KralTakipte#0682",

      ` ${client.guilds.size} Sunucu İçin | Teşekürler..`,

  ];

  setInterval(function() {

      var random = Math.floor(Math.random()*(Activity.length-0+1)+0);

      client.user.setActivity(Activity[random], { type: 'WATCHING' });
      }, 6 * 3000);
})


client.on('message', msg => {
  if (msg.content.toLowerCase() === '-giriş-çıkış') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Öncelikle Sunucu Ayarlarına Girip Yeni Üye Mesajını Hangi Kanala Atacağını Seçin Bot Otomatik Olarak O Kanala Girenleri Çıkanları Bildirecektir. '); 
		} else {
		msg.reply('Öncelikle Sunucu Ayarlarına Girip Yeni Üye Mesajını Hangi Kanala Atacağını Seçin Bot Otomatik Olarak O Kanala Girenleri Çıkanları Bildirecektir.');
		}
	}
});

client.on("guildMemberRemove", (member) => {
let guild = member.guild;
let memberTag = member.user.tag;
if(guild.systemChannel){
    guild.systemChannel.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
    .setTitle("Bir kullanıcı çıktı") // Calling method setTitle on constructor.
    .setDescription(memberTag + " Aramızdan Ayrıldı.") // Setting embed description
    .setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
    .addField("Toplam Kullanıcı", member.guild.memberCount) // Adds a field; First parameter is the title and the second is the value.
    .setTimestamp() // Sets a timestamp at the end of the embed
    );
}
});
client.on("guildMemberAdd", (member) => {
let guild = member.guild;
let memberTag = member.user.tag;
if(guild.systemChannel){
    guild.systemChannel.send(new Discord.RichEmbed()
    .setTitle("Bir kullanıcı katıldı")
    .setDescription(memberTag + " Aramıza Hoş Geldin!")
    .setThumbnail(member.user.displayAvatarURL)
    .addField("Toplam Kullanıcı", member.guild.memberCount)
    .setTimestamp()
    );
}
});



client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(30)
    msg.reply('Küfür Yasak Bunu Bilmiyormusun :rage: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('Küfür Yasak Bunu Bilmiyormusun :rage: ');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'giris-cıkıs');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucuya Katıldı | Hoşgeldin ')
  .setTimestamp()
  channel.sendEmbed(embed);
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
