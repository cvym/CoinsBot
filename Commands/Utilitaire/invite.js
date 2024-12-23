const Discord = require('discord.js');

exports.help = {
  name: 'invite',
  aliases: ['invitation', 'addbot', 'support'],
  description: 'Envois les liens relatifs au bot',
  use: 'Pas d\'utilisation conseillée',
  category: 'Utilitaire'
}
exports.run = async (bot, message, args, config, data) => {
    let embed = new Discord.EmbedBuilder()
    .setColor(data.color)
    .setDescription(`[\`Support du bot\`](https://discord.gg/wazaaa)`)
    return message.reply({ embeds: [embed] })
}
