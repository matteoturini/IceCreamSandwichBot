import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';

class BlacklistInhibitor extends Inhibitor {
  constructor() {
    super('blacklist', {
      reason: 'blacklist'
    });
  }

  exec(msg: Message) {
    const blacklist = ['186799338767384576'];
    return blacklist.includes(msg.author.id);
  }
}

export default BlacklistInhibitor;
