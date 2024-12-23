const Discord = require('discord.js');

const cooldownsReputation = new Map();

exports.help = {
  name: 'kill',
  aliases: [],
  description: 'Commande du métier tueur',
  use: 'Pas d\'utilisation conseillée',
  category: 'Metier'
}
exports.run = async (bot, message, args, config, data) => {
    const cooldownTime = JSON.parse(data.time).kill;
    let memberDB = bot.functions.checkUser(bot, message, args, message.author.id)
    if (memberDB.metier === "tueur") {
        if (cooldownsReputation.has(message.author.id)) {
            const cooldownExpiration = cooldownsReputation.get(message.author.id) + cooldownTime;
            const remainingCooldown = cooldownExpiration - Math.floor(Date.now() / 1000);
    
            if (remainingCooldown > 0) {
                const hours = Math.floor(remainingCooldown / 3600);
                const minutes = Math.floor((remainingCooldown % 3600) / 60);
                const seconds = Math.floor(remainingCooldown % 60);
    
                const CouldownEmbed = new Discord.EmbedBuilder()
                .setDescription(`🕐 Vous avez déjà \`braquage\` récemment\n\nRéessayez dans${hours > 0 ? ` ${hours} heures` : ""}${minutes > 0 ? ` ${minutes} minutes`: ""}${seconds > 0 ? ` ${seconds} secondes` : ""}`)
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                .setColor(data.color)
    
                return message.reply({ embeds: [CouldownEmbed] });
            }
        }
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user || user.user.bot) return message.reply({ content: ":x: `ERROR:` Pas de membre trouvé !", allowedMentions: { repliedUser: false } })

        let targetuser = bot.functions.checkUser(user.id)
        let cool = await setCooldown(message, data.color, user.id, message.guild.id, "antirob", 7200000, true, true)
            if (targetuser.antirob > Date.now()) {
                
                let timeEmbed = new Discord.EmbedBuilder()
                    .setColor(data.color)
                    .setDescription(`:shield: Vous ne pouvez pas tuer cet utilisateur\n\n Son anti-rob prendra fin dans <t:${Math.floor(targetuser.antirob / 1000)}:R> `)
                    .setFooter({ text: `${message.member.user.username}`, iconURL: message.member.user.displayAvatarURL({ dynamic: true }) })
                return message.reply({ embeds: [timeEmbed], allowedMentions: { repliedUser: false } })
            } else {


                let moneyEmbed2 = new Discord.EmbedBuilder()
                    .setColor(data.color)
                    .setDescription(`:x: **${user.user.username}** vous ne gagnerez rien si vous tuez cette personne !`)
                    .setFooter({ text: `${message.member.user.username}`, iconURL: `${message.member.user.displayAvatarURL({ dynamic: true })}` });

                if (!JSON.parse(targetuser.coins).rep || parseInt(JSON.parse(targetuser.coins).rep) <= 2) return message.channel.send({ embeds: [moneyEmbed2] })

                const checkif = between(1, 2)
                if (checkif === 2) {
                    return message.channel.send({
                        embeds: [new Discord.EmbedBuilder()
                            .setColor(data.color)
                            .setDescription(`:bank: Vous n'avez pas réussi à tuer **${user.user.username}** !`)
                            .setImage('https://cdn.discordapp.com/attachments/1310338898706300960/1320874799098101800/f7bdeac7712bed5295ca8706357edd6b.jpg?ex=676b3004&is=6769de84&hm=812fb2aaf561c72245ddf8eaf760aebb9bc12de46961f4b998123be472907483&')
                            .setFooter({ text: `${message.member.user.username}`, iconURL: `${message.member.user.displayAvatarURL({ dynamic: true })}` })]
                    })
                }




                let random = between(1, 2)


                let embed = new Discord.EmbedBuilder()
                    .setDescription(`:white_check_mark: Vous avez tué ${user} et repartez avec \`${random} rep\` en plus`)
                    .setColor(data.color)
                    .setImage('https://cdn.discordapp.com/attachments/1310338898706300960/1320874799098101800/f7bdeac7712bed5295ca8706357edd6b.jpg?ex=676b3004&is=6769de84&hm=812fb2aaf561c72245ddf8eaf760aebb9bc12de46961f4b998123be472907483&')
                    .setFooter({ text: `${message.member.user.username}`, iconURL: `${message.member.user.displayAvatarURL({ dynamic: true })}` });
                message.channel.send({ embeds: [embed] })
                bot.functions.removeCoins(bot, message, args, user.id, random, 'rep')
                bot.functions.addCoins(bot, message, args, message.author.id, random, 'rep')

            };
    } else {
        return message.channel.send({
            embeds: [new Discord.EmbedBuilder()
                .setColor(data.color)
                .setDescription(`:x: Vous devez être **tueur** pour utiliser cette commande !`)]
        })
    }
}

function between(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
