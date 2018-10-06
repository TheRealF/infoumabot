const Telegraf = require('telegraf');
let Parser = require('rss-parser');
let parser = new Parser();

const bot = new Telegraf('671026420:AAG3Vx5anaNoCKCMF0z_JN-fGQWJk2gW9kE');


bot.start((ctx) => ctx.reply('Ciao! Sono Infoumy il bot di Informatica Umanistica.\nAll\' interno del gruppo telegram posterò in automatico tutte le news pubblicate dai docenti sul sito del corso e gli aggiornamenti del drive del corso.\nQui puoi chattare con me, per la lista dei comandi disponibili digita o clicca /help.'))
bot.help((ctx) => ctx.reply('Puoi interagire con me scrivendo le seguenti stringhe in chat privata:\nappunti : mostra il link al drive\norario : mostra il link all\'orario\nfeed: stampa le ultime news del corso\nftp: stampa le news di Fondamenti'))
bot.hears('infoumy', (ctx) => ctx.reply('Hey ciao usa /help per sapere quali sono i miei comandi!'))
bot.hears('appunti', (ctx) => ctx.reply('Drive: https://drive.google.com/open?id=1ER_GYyWSPvwinWuHiisAVq7IlJwK2E6P'))
bot.hears('orario', (ctx) => ctx.reply('Orario: http://www.fileli.unipi.it/infouma/laurea-triennale/orario/'))

bot.hears('feed', async (ctx) => {

  let feed = await parser.parseURL("http://www.fileli.unipi.it/infouma/category/home/feed/");
  ctx.reply(feed.title);

  let feed_count = 0;

  feed.items.some(item => {
    if(feed_count < 2) {
      ctx.reply(item.title + ':' + item.link);
    }
    feed_count++;
  });

});
bot.hears('ftp', async (ctx) => {

  let feed = await parser.parseURL("http://fetchrss.com/rss/5bb656118a93f8340d8b4567283916021.atom");
  ctx.reply(feed.title);

  let feed_count = 0;

  feed.items.some(item => {
    if(feed_count < 2) {
      ctx.reply(item.title + ':' + item.link);
    }
    feed_count++;
  });

});
