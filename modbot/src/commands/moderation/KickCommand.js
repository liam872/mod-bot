const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

   async run(client, message, args) {
    if (!message.member.hasPermission("&807605397526413363")) return message.channel.send("you dont have permissions to use this command")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given"
    const KickEmbed = new Discord.MessageEmbed()
    .setTitle(`you were kicked from ${message.guild.name}`)
    .setDescription(`Reason: ${reason}`)
    .setColor("#00ced1")
    .setTimestamp()

if (!args[0]) return message.channel.send("you need to state a user to kick. \`!kick @user reason\`");
if (!mentionedMember) return message.channel.send("the member mentioned member is not in the sevver");
try {
await mentionedMember.send(KickEmbed);
} catch (err) {
 console.log(err)
}
try {
mentionedMember.kick(reason)
} catch (err) {
console.log(err);
return message.channel.send("not able to kick the player")
    }
  }
}