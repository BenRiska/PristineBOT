require("dotenv").config()
const {Client, MessageAttachment} = require("discord.js")
const {getRandomValue} = require("./helpers/get-random-value")
const {members, loliStatements} = require("./fixtures")

const client = new Client({
    partials: ["MESSAGE"]
  })
  
client.on("ready", () => {
    console.log("Our bot is ready to go!!!!")
  })
  
client.on("message", msg => {
    if (msg.content == "I love pristine" || msg.content == "i love pristine") {
      msg.react("❤️")
      msg.channel.send("I love you all too! (except gobby)")
    }

    if (msg.content.includes("i wish i had") || msg.content.includes("I wish i had") || msg.content.includes("I wish I had") ) {
      const attachment = new MessageAttachment('https://static2.abc.es/Media/201503/20/risitas-apple-dos--644x362.jpg');
      msg.channel.send(`One day`)
      msg.channel.send(attachment);
      }

    if (msg.content == "who is clown of the day" || msg.content == "Who is clown of the day") {
        msg.channel.send(getRandomValue(members))
      }

    if (msg.content == "123") {
        msg.channel.send("PRISTINE!")
      }

    if (msg.content == "321") {
        msg.channel.send("!ENITSIRP")
      }

    if (msg.content == "i think we might lose this gw") {
        msg.channel.send("i know i didn't hear that 🔫🔫🔫")
      }

      if (msg.content.includes("loli")) {
        msg.channel.send(getRandomValue(loliStatements))
      }

    if(msg.content.includes("pristine") || msg.content.includes("Pristine") || msg.content.includes("PRISTINE")){
      msg.react("❤️")
    }

  })
  
client.login(process.env.BOT_TOKEN)