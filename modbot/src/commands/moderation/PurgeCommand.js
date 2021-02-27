const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("&807605397526413363")) return message.channel.send("you cannot use this command")
    if (!args[0]) return message.channel.send("you must state the number of messages to purge. \`-purge number\`")
    const amountToDelete = Number(args[0], 10)
    if (isNaN(amountToDelete)) return message.channel.send("sorry that is not a number")
    if (!Number.isInteger(amountToDelete)) return message.channel.send("that is not a whole number")
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send("the number stated has to be between 2 and 100");
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try{
await message.channel.bulkDelete(fetched)
    } catch (err) {
      console.log(err);


    }
  }
}