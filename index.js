const Discord = require('discord.js');

const TOKEN = 'NTYzNzQzNDkyODYyNTA5MDU2.XKgQUg.q0D-QWjqdvZSkR6uT-tl65PbS5A';

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Hai") {
        message.channel.sendMessage("Hai juga :blush: ");
    }
    if (message.content == "hai") {
        message.channel.sendMessage("Hai juga :blush: ");
    }
    if (message.content == "Hello") {
        message.channel.sendMessage("Hello :grin: ");
    }
    if (message.content == "hello") {
        message.channel.sendMessage("Hello :grin: ");
    }
    if (message.content == "Halo") {
        message.channel.sendMessage("Halo juga :blush: ");
    }
     if (message.content == "halo") {
        message.channel.sendMessage("Halo juga :blush: ");
    }
    if (message.content == "Anjing") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "anjing") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "Anjeng") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "anjeng") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
    if (message.content == "Jancok") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
    if (message.content == "jancok") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "Kontol") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "kontol") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "KONTOL") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "Memek") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "memek") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "MEMEK") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
      if (message.content == "Asu") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
          if (message.content == "asu") {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
          if (message.content == "ASU) {
        message.channel.sendMessage("Lapor @Kanu !ada yang berkata kasar !");
    }
    if (message.content == "Help") {
        message.channel.sendMessage("Silahkan tulis pertanyaan di #help ya :wink: ");
    }
    if (message.content == "help") {
        message.channel.sendMessage("Silahkan tulis pertanyaan di #help ya :wink: ");
    }
    if (message.content == "Caranya") {
        message.channel.sendMessage("Silahkan tulis pertanyaan di #help ya :wink: ");
    }
    if (message.content == "caranya") {
        message.channel.sendMessage("Silahkan tulis pertanyaan di #help ya :wink: ");
    }
});

bot.login(TOKEN);
