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
      .setAuthor({ name: "Page d'aide des commandes", iconURL: "https://cdn.discordapp.com/attachments/1310033382725521488/1320877815725428736/442580f2868f66e09e6c36bbb5e919f2.jpg?ex=676b32d3&is=6769e153&hm=4f98383b61c1ab387eea534fd2fcc584d5453ba8a1c7f2810c8a8f699ebb80d1&" })
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
      .setFooter({ text: config.footerText, iconURL: "https://media.discordapp.net/attachments/1310033382725521488/1320878093832949871/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b3316&is=6769e196&hm=64ee69d973e68d9aad99468ee1cfc9148db308438729ca09596b3c62775f6da5&=&format=webp" })
      .setImage("https://cdn.discordapp.com/attachments/1310033382725521488/1320877815725428736/442580f2868f66e09e6c36bbb5e919f2.jpg?ex=676b32d3&is=6769e153&hm=4f98383b61c1ab387eea534fd2fcc584d5453ba8a1c7f2810c8a8f699ebb80d1&")
      .setTimestamp()

    return message.reply({ embeds: [page1] });
}
