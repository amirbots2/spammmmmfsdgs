const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("576415018183032847")
setInterval(function() {
channel.send(`spam omg YAY AmirGamer78`);
}, 30)
})

client.login(process.env.BOT_TOKEN);