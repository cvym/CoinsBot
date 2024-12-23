const Discord = require('discord.js');

exports.help = {
  name: 'badges',
  aliases: ['badge' , 'bdg'],
  description: 'Affiche les badges d\'un utilisateur',
  use: 'Pas d\'utilisation conseillée',
  category: 'Utilitaire'
}
exports.run = async (bot, message, args, config, data) => {
    const embed = new Discord.EmbedBuilder()
    .setColor(data.color)
    .setTitle(`:mortar_board: Voici vos badges`)
    .setDescription(`Vous n'avez pas de badges !`)
    .setFooter({ text: config.footerText + " | 1/1"})
    .setThumbnail(`https://cdn.discordapp.com/attachments/1310033382725521488/1320877815725428736/442580f2868f66e09e6c36bbb5e919f2.jpg?ex=676b32d3&is=6769e153&hm=4f98383b61c1ab387eea534fd2fcc584d5453ba8a1c7f2810c8a8f699ebb80d1&`)

    message.reply({ embeds: [embed]})
}
