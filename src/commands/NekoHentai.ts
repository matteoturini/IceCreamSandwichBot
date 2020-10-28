import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import { TextChannel } from 'discord.js';
import { Message } from 'discord.js';
import fetch from 'node-fetch';
import config from '../config.json';

class NekoHentaiCommand extends Command {
  constructor() {
    super('nekohentai', {
      aliases: ['nekonsfw', 'nekohentai'],
      description: 'Manda um GIF NSFW de neko hentai.'
    })
  }

  exec(msg: Message) {
    if(msg.channel instanceof TextChannel)
      if(!msg.channel.nsfw) {
        const message = new MessageEmbed()
          .setColor(config.colors.error)
          .setTitle('Esse comando só pode ser enviado em canais NSFW!');
        return msg.channel.send(message);
      }
    fetch('https://nekos.life/api/v2/img/nsfw_neko_gif')
      .then(async (res) => {
        const response = await res.json();
        const message = new MessageEmbed()
          .setImage(response.url)
          .setColor(config.colors.success)
          .setFooter('Todo conteudo desse comando vem de https://nekos.life/');
        msg.channel.send(message);
      })
      .catch((reason) => {
        const message = new MessageEmbed()
          .setColor(config.colors.error)
          .setTitle('Ops! Ocorreu um erro!')
          .addField('Codigo', reason);
        msg.channel.send(message);
      })
  }
}

export default NekoHentaiCommand;
