const Discord = require('discord.js');
const image = new Discord.MessageAttachment("./images/1.png");

module.exports = {
    name: '이미지출력',
    run: async (client, message, args) => {
    
    message.channel.send(image)
    
}}
