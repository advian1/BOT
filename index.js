const Discord = require('discord.js');

const TOKEN = 'NTYzNzQzNDkyODYyNTA5MDU2.XKgQUg.q0D-QWjqdvZSkR6uT-tl65PbS5A';

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Hai") {
        message.channel.sendMessage("Hai juga!");
    }
    if (message.content == "Asu") {
        message.channel.sendMessage("Jangan begitu");
    }
    if (message.content == "Bngst") {
        message.channel.sendMessage("Astaghfirullah");
    }
    if (message.content == "Bangsat") {
        message.channel.sendMessage("Jaga perkataanmu!");
    }
    if (message.content == "Wkwkwk") {
        message.channel.sendMessage("hahahaha");
    }
    if (message.content == "Halo") {
        message.channel.sendMessage("loha");
    }
    if (message.content == "jancok") {
        message.channel.sendMessage("astaghfirullah");
    }
});

bot.login(TOKEN);