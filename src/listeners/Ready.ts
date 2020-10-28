import { Listener } from 'discord-akairo';
import client from '../index';
import config from '../config.json';
import consola from 'consola';

class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      emitter: 'client',
      event: 'ready',
    });
  }

  exec() {
    consola.success('Bot ready!');
    consola.info(`Invite through https://discord.com/api/oauth2/authorize?client_id=${client.user?.id}permissions=${config.permissions}&scope=bot`);
  }
}

export default ReadyListener;
