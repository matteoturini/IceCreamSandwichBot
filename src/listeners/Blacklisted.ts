import { Command, Listener } from 'discord-akairo';
import { Message } from 'discord.js';
import Client from '../index';
import config from '../config.json';

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
        msg.channel.send(`Você foi banido do IceCreamSandwich! Razão: ${reason} no comando ${command.id}. Adicione o ${user.tag} para fazer um appeal!`);
      });
  }
}

export default BlacklistedMessageListener;
