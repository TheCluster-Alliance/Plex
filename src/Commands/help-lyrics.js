const Discord = require('discord.js');
const {
    Client,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'help-lyrics',
    aliases: ['hl'],

    execute(client, message, args) {

        const hlEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('How to use lyrics command')
            .setDescription('Here is a tutorial on how to use the lyrics command, The GIF might look blur, coloured or it might take time to load, If that happens, Please click on the GIF!')
            .setImage('https://media.discordapp.net/attachments/785928047559180360/831507553795440681/ezgif.com-gif-maker.gif?width=450&height=346')
            .setFooter('© 2021 TheCluster | www.theclusterdiscord.com');

        message.channel.send(hlEmbed);

    }
}