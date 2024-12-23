const Discord = require('discord.js');

exports.help = {
  name: 'mails',
  aliases: ['mail' , 'mylogs'],
  description: 'Liste vos dernières transactions',
  use: 'Pas d\'utilisation conseillée',
  category: 'Utilitaire'
}
exports.run = async (bot, message, args, config, data) => {
    let page = 1
    let arrayMailsUser = JSON.parse(bot.functions.checkUser(bot, message, args, message.author.id).mails).reverse()
    if(arrayMailsUser.length == 0) {
        const embed = new Discord.EmbedBuilder()
        .setColor(data.color)
        .setDescription(`Vous n'avez pas de mails !`)
        .setTitle(`📩 Voici votre boite mail (0)`)
        .setFooter({ text: config.footerText + " | Page 1/1"})
        .setThumbnail(`https://cdn.discordapp.com/attachments/1310033382725521488/1320877815725428736/442580f2868f66e09e6c36bbb5e919f2.jpg?ex=676b32d3&is=6769e153&hm=4f98383b61c1ab387eea534fd2fcc584d5453ba8a1c7f2810c8a8f699ebb80d1&`)

        return message.reply({ embeds: [embed]})
    } else {   
        const ArrayDescription = arrayMailsUser.map(i => `<t:${i.timestamp}:d>) ${i.message}`)
        const pageTotal = Math.ceil(arrayMailsUser.length / 10);
        const allEmbed = (page) => {
            const start = (page - 1) * 10;
            const end = page * 10;
            const currentArray = ArrayDescription.slice(start, end);
    
            const embed = new Discord.EmbedBuilder()
            .setColor(data.color)
            .setDescription(currentArray.join('\n'))
            .setTitle(`📩 Voici votre boite mail (${ArrayDescription.length})`)
            .setFooter({ text: config.footerText + ` | Page ${page}/${pageTotal}`})
            .setThumbnail(`https://cdn.discordapp.com/attachments/1310033382725521488/1320877815725428736/442580f2868f66e09e6c36bbb5e919f2.jpg?ex=676b32d3&is=6769e153&hm=4f98383b61c1ab387eea534fd2fcc584d5453ba8a1c7f2810c8a8f699ebb80d1&`)
            return embed;
        }

        const row = new Discord.ActionRowBuilder().addComponents([
            new Discord.ButtonBuilder()
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji('⬅️')
                .setCustomId('pageBefore'),

            new Discord.ButtonBuilder()
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji('➡️')
                .setCustomId('pageAfter'),
        ])

        const msg = await message.reply({ embeds: [allEmbed(page)], components: arrayMailsUser.length > 10 ? [row] : [] })

        const filter = (i) => {
            if(i.user.id == message.author.id) {
                return true;
            } else {
                return i.reply({ content: "Vous n'avez pas la permission !", ephemeral: true })
            }
        }
        const collector = msg.createMessageComponentCollector({ filter, time: 60000 });
    
        collector.on('collect', async (i) => {
            if(i.user.id !== message.author.id) return
            if(i.customId == 'pageBefore') {
                if(page == 1) page = pageTotal + 1
                page--;

                await i.update({ embeds: [allEmbed(page)] })
            } else if(i.customId == 'pageAfter') {
                if(page == pageTotal) page = 0
                page++;
    
                await i.update({ embeds: [allEmbed(page)] })
            }
        })
    
        collector.on('end', async () => {
            msg.edit({ components: [] })
        })
    }
}
