const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('vote', 'information', []);
  }

   async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;

message.channel.send('Send Messsage.');
try {
  let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
  console.log(msg.first().content);
} catch (err) {
  console.log(err);
}

  }
}