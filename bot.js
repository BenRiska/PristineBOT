require("dotenv").config()

const Discord = require("discord.js")

const {members} = require("./fixtures")
console.log(members)

const client = new Discord.Client({
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

    if (msg.content == "what unit does tivrey not have") {
        msg.reply("charles LOL 😂")
      }

    if (msg.content == "where is tivreys charles") {
        msg.reply("with ozys fmaya")
      }

    if (msg.content == "who is clown of the day") {
        num = Math.floor(Math.random() * (members.length + 1) - 1)
        const clown = members[num]
        msg.channel.send(`${clown}`)
      }

    if (msg.content == "123") {
        msg.channel.send("PRISTINE!!!")
      }

    if (msg.content == "i think we might lose this gw") {
        msg.channel.send("i know i didn't hear that 🔫🔫🔫")
      }

  })
  
client.login(process.env.BOT_TOKEN)