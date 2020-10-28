import { Command } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';
import config from '../config.json';
import consola from 'consola';

class PingCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help', 'ajuda'],
      category: 'Util',
      description: 'Mostra os comandos disponiveis.',
    });
  }

  exec(msg: Message) {
    const message = new MessageEmbed()
      .setColor(config.colors.success)
      .setTitle('Comandos disponiveis:')
    // consola.log(JSON.stringify(this.handler.categories));
    this.handler.categories.forEach((category) => {
      category.forEach((command) => {
        message.addField(command.id, command.description);
      });
    });
    msg.channel.send(message);
  }
}

export default PingCommand;
