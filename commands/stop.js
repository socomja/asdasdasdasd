const { MessageEmbed } = require("discord.js");


module.exports = {
  
    name: "나가",
    description: "To stop the music and clearing the queue",
    usage: "",
    aliases: ["sp"],
  

  run: async function (client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!song) {
       
        let thing = new MessageEmbed()
    .setColor("#1de9b6");
    queue.textChannel.send(thing);
        
        message.guild.me.voice.channel.leave(); 
        message.client.queue.delete(message.guild.id);
        return;
    }
    message.react("✅");
  },
};