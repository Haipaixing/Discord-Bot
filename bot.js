const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
const client = new Discord.Client()


client.on("ready", () => { // bot登入時
    console.log("BOT已開啟ww");
});

client.on("message", async (msg) => {  //監聽訊息事件
    if (msg.content === "(玩家在頻道發送指定的訊息)") {
        await msg.channel.send("(BOT發送訊息)")
    }
});
client.on("guildMemberAdd", async (member) => {//新用戶加入伺服器
    const channel = member.guild.channels.cache.find(ch => ch.id === '816327091146326056');
    if (!channel) return;
    const welcomeembed = new MessageEmbed()
        .setColor('#0099ff')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${member} (你要發送的訊息) 目前伺服器總人數:${client.guilds.cache.get(member.guild.id).memberCount}`)
        .setFooter(`${member.displayName}  加入時間`)
        .setImage("https://images-ext-1.discordapp.net/external/9-GpkebBjNNQaccp_Dr5DZ_00ZbQ8Q2WAyBsqb1oI58/https/media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif")
        .setTimestamp()
    channel.send(welcomeembed);
    await member.send(welcomeembed)
    await member.roles.add(['給予身分組的ID'])
});
client.login("BOT=TOKEN") 