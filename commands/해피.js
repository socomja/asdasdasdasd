const anime = require('anime-actions');
const Discord = require('discord.js');

module.exports = {
  name: '...',
  description: 'dance dance',
  async run (client, message, args) {
    
        message.channel.send(await anime.confused());
        message.channel.send(await anime.thinking());
}
} 
