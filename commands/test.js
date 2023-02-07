const Discord = require('discord.js');
const image = new Discord.MessageAttachment("./images/2.png");

module.exports = {
    name: '카논',
    run: async (client, message, args) => {
    
    message.channel.send(image)
    
}}
