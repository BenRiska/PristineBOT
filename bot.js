require("dotenv").config()
const fetch = require("node-fetch")
const {Client, MessageAttachment} = require("discord.js")
const {getRandomValue} = require("./helpers/get-random-value")
const {members, loliStatements} = require("./fixtures")

const client = new Client({
    partials: ["MESSAGE"]
  })
  
client.on("ready", () => {
    console.log("Our bot is ready to go!!!!")
  })
  
client.on("message", messageHandler)


  async function messageHandler(msg){

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

      if (msg.content.includes("loli") || msg.content.includes("Loli")) {
        msg.channel.send(getRandomValue(loliStatements))
      }

    if(msg.content.includes("pristine") || msg.content.includes("Pristine") || msg.content.includes("PRISTINE")){
      msg.react("❤️")
    }

    if(msg.content[0] === "!"){

      let query = msg.content.split("!")[1]

      query = msg.content.split(" ")[0]

      let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENOR_KEY}&limit=8`

      let response = await fetch(url)

      let json = await response.json()

      let index = Math.floor(Math.random() * (json.results.length))

      msg.channel.send(json.results[index].url)

    }

}
  
client.login(process.env.BOT_TOKEN)