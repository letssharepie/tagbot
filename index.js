const { Client, MessageAttachment } = require('discord.js');
const { token } = require('./config.json');
const path = require('path');
const fs = require('fs');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    var messArr = msg.content.split(" ");
    if (messArr[0] === 'tag') {
        var directoryMsg = "./tagbotimg/"+messArr[1].toString()+"/";
        const directoryPath = path.join(__dirname, directoryMsg);

        images = fs.readdirSync(directoryPath, function (err, files) {
          //handling error
          if (err) {
              return console.log('Unable to scan directory: ' + err);
          } 
      });

      if (images !== null) {

        var randomNum = Math.floor(Math.random() * images.length);
        const attachment = new MessageAttachment(directoryMsg+images[randomNum]);
        // tagbotimg/laussen/laussen22
         
        msg.channel.send(attachment);
      }


    }
  });
  

  client.login(token);
