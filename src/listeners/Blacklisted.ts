import { Command, Listener } from 'discord-akairo';
import { Message } from 'discord.js';
import Client from '../index';
import config from '../config.json';
import { MessageEmbed } from 'discord.js';

class BlacklistedMessageListener extends Listener {
  constructor() {
    super('commandBlocked', {
      emitter: 'commandHandler',
      event: 'commandBlocked',
    });
  }

  exec(msg: Message, command: Command, reason: string) {
    Client.users.fetch(config.owner)
      .then((user) => {
        const message = new MessageEmbed()
          .setColor(config.colors.error)
          .setTitle('Você foi banido do Ice Cream Sandwich!')
          .setDescription(`Contate o ${user.tag} para fazer seu appeal.`)
          .addField('Razão', reason)
          .addField('Comando executed', command.id);
        msg.channel.send(message);
      });
  }
}

export default BlacklistedMessageListener;
