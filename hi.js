const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

    client.on('message', message => {
        var prefix = "1";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith('1say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client.login('NTEwMTI2MTk0NzU1MjM5OTU3.DsXzwQ.Qq6zGxHUg6itVCcHol2GJSUlYU8');