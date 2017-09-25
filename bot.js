var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'slack-team-token'
}).startRTM();


controller.hears(['oi', 'olá'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Olá, humano, como posso ajudar?";

    bot.reply(message, helloText);
});

controller.hears(['quem é o cantô?'], 'direct_message,direct_mention,mention', function(bot, message) {
    var text = "Tiririca";
    bot.reply(message, text);
});

controller.hears(['certo?'], 'direct_message,direct_mention,mention', function(bot, message) {
    var text = "Firmezinha! :vitory:";
    bot.reply(message, text);
});