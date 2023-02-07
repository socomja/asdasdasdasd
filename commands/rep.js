module.exports = {
	
			name: 'replay',
			description: 'Starts the song from the beginning.',
			cooldown: '4',
			inVoiceChannel: true,
			sameVoiceChannel: true,
			playing: true,
	
	async run(client, message) {
		const player = client.music.players.get(message.guild.id);

		player.seek(0);
		return message.channel.send('Replayed song...');
	}
};