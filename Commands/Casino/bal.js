const Discord = require('discord.js');
const numeral = require('numeral');

exports.help = {
  name: 'bal',
  aliases: ['coins', 'balance', 'money', 'bank', 'coin'],
  description: 'Affiche les coins du membre mentionné ou de l\'auteur du message',
  use: 'coins [@user]',
  category: 'Casino'
}

exports.run = async (bot, message, args, config, data) => {
  // Sélectionne le membre mentionné ou le membre qui a envoyé le message
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
  // Si aucun membre n'est trouvé ou si c'est un bot, renvoie une erreur
  if (!member || member.user.bot) {
    return message.reply({ content: ":x: `ERROR:` Pas de membre trouvé !", allowedMentions: { repliedUser: false } });
  }

  // Appelle la fonction pour vérifier les coins du membre
  const req = bot.functions.checkUser(bot, message, args, member.id);

  // Crée un embed pour afficher les informations sur les coins du membre
  const embed = new Discord.EmbedBuilder()
    .setAuthor({name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true })})
    .setDescription(`> **${member.user.username}** a
      :coin: **${JSON.parse(req.coins).coins > 100000 ? numeral(JSON.parse(req.coins).coins).format('0a') : JSON.parse(req.coins).coins}** coins en poche
      :bank: **${JSON.parse(req.coins).bank > 100000 ? numeral(JSON.parse(req.coins).bank).format('0a') : JSON.parse(req.coins).bank}** coins en banque
      :small_red_triangle: **${JSON.parse(req.coins).rep > 100000 ? numeral(JSON.parse(req.coins).rep).format('0a') : JSON.parse(req.coins).rep}** point${req.rep > 1 ? "s" : ""} de réputation\n`)
    .setColor(data.color)
    .setFooter({ text: config.footerText });

  // Envoie l'embed contenant les informations sur les coins du membre
  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
}
