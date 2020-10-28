import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import bot from '../index';

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['pingar'],
    });
  }

  exec(msg: Message) {
    return msg.channel.send(`Pong! A latencia com o Discord é de ${bot.ws.ping}ms.`);
  }
}

export default PingCommand;
