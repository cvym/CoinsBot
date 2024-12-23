const Discord = require('discord.js');

exports.help = {
  name: 'helpall',
  aliases: ['help-all'],
  description: 'Affiche l\'ensemble des commandes en une page',
  use: 'Pas d\'utilisation conseillée',
  category: 'Utilitaire'
}
exports.run = async (bot, message, args, config, data) => {
    let gains = JSON.parse(data.gain)
    let voicegain = gains.voicegain
    let streamgain = gains.streamgain
    let camgain = gains.camgain

    const page1 = new Discord.EmbedBuilder()
      .setAuthor({ name: "Page d'aide des commandes", iconURL: "https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp" })
      .setColor(data.color)
      .setDescription(`Prefix du serveur: \`${data.prefix}\`
Utilisez \`${data.prefix}help [commande]\` pour obtenir des informations sur une commande

:coin: **• Gestion des coins :**
coins, profil, top, pay, with, dep, rep
:game_die: **• Jeux**
work, daily, slut, gift, mine, rob
:rocket: **• Mini-jeux**
roulette, blackjack, gunfight, slots, pfc, power4, quetes
:black_joker: **• Cartes**
cards, duel
⌚️ **• Récompenses**
buy, data.color, cshop
:key: **• Job**
job, braquage, kill, juge, cambriolage, hack, arrest, shop, batiment, wagon
⚔️ **• Team**
tcreate, tedit, tbuy, ttop, tinvite, tinfos, tdep, twith, tleave, tkick, tpromote, tdemote, tarmy, tattack, tarmysend, tspy
:pill: **• Illégal**
mobil, recolt
:small_orange_diamond: • Palier
xp
:beginner: **• Administration**
*WHITELIST:* add, remove, setgain, settime, setprice, setxp, setlogs, setmax, setleaderboard, start, drop, course, bingo
*OWNER:* reset, mybot, wl, unwl, block, unblock, tdelete, command, guilds, items, carddrop, update
*ADMINISTRATEUR:* setprefix
:information_source: **• Utilitaire**
help, helpall, vocal, mails, apikey, badges, tutoriel
✋ **• Propriétaires**
owner, unowner, setprofil, leave
 
    
     [\`Support du bot\`](https://discord.gg/wazaaa)  |
     \n> Vous gagnez actuellement \`${voicegain} coins\` toutes les 15 minutes lorsque vous êtes en vocal, \`${streamgain} coins\` lorsque vous êtes en stream  et \`${camgain} coins\` lorsque vous activez votre caméra !`)
      .setFooter({ text: config.footerText, iconURL: "https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp" })
      .setImage("https://media.discordapp.net/attachments/1249042420163674153/1250167077378195526/10056.gif?ex=6669f452&is=6668a2d2&hm=435b6f81e5461dc8259ed9a78e8e2245f07fdb48540ad861ab2ef705b8a15cf1&=&width=764&height=35")
      .setTimestamp()

    return message.reply({ embeds: [page1] });
}
