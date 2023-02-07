const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "첫메세지",
  description: "Get the first message in a channel",
  category: "server",
  run: async (client, message, args) => {
    const fetchmessages = await message.channel.messages.fetch({ limit: 1, after: 1 })
    const msg = fetchmessages.first()

    const embed1 = new MessageEmbed()
      .setDescription(`
      **해당 서버의 첫 메세지:** ${msg.content}
      **쓴사람:** ${msg.author}
      **시간:** <t:${parseInt(msg.createdTimestamp / 1000)}:R>
      **URL:** [클릭](${msg.url})
      `)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor(client.randomColor)
      .setTimestamp()
      .setColor("#1de9b6");
    message.reply(embed1)
  },
};
