import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import { Message } from 'discord.js';
import bot from '../index';
import config from '../config.json';

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['pingar', 'ping'],
    });
  }

  exec(msg: Message) {
    const message = new MessageEmbed()
      .setColor(config.colors.success)
      .setTitle('Pong!')
      .setDescription(`A latencia com o Discord é de ${bot.ws.ping}ms`);
    return msg.channel.send(message);
  }
}

export default PingCommand;
