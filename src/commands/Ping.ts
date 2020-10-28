import { Command } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';
import config from '../config.json';

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['pingar', 'ping'],
      category: 'Util',
      description: 'Comando para verificar a latencia do bot com o Discord.'
    });
  }

  exec(msg: Message) {
    const message = new MessageEmbed()
      .setColor(config.colors.success)
      .setTitle('Pong!')
      .setDescription(`A latencia com o Discord é de ${this.client.ws.ping}ms`);
    return msg.channel.send(message);
  }
}

export default PingCommand;
