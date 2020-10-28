import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo';
import consola from 'consola';
import path from 'path';
import config from './config.json';

class IceCreamSandwichClient extends AkairoClient {
  public commandHandler: CommandHandler;
  public inhibitorHandler: InhibitorHandler;
  public listenerHandler: ListenerHandler;

  constructor() {
    super({
      ownerID: config.owner,
    }, {
      disableMentions: 'everyone',
    });

    this.commandHandler = new CommandHandler(this, {
      directory: path.join(__dirname, 'commands'),
      prefix: 'ics!',
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: path.join(__dirname, 'inhibitors'),
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: path.join(__dirname, 'listeners'),
    })

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.commandHandler.useListenerHandler(this.listenerHandler);
    
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      inhibitorHandler: this.inhibitorHandler,
      listenerHandler: this.listenerHandler,
    });

    this.listenerHandler.loadAll();
    this.inhibitorHandler.loadAll();
    this.commandHandler.loadAll();

    consola.success('Loaded all inhibitors, commands, and listeners!')
  }
}

const client = new IceCreamSandwichClient();

client.login(config.token);

export default client;
