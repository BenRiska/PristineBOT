require("dotenv").config()

const Discord = require("discord.js")

const client = new Discord.Client({
    partials: ["MESSAGE"]
  })

// const BOT_PREFIX = "!" 
// const MOD_ME_COMMAND = "mod-me"
  
client.on("ready", () => {
    console.log("Our bot is ready to go!!!!")
  })
  
client.on("messageDelete", msg => {
    msg.channel.send("Stop deleting messages")
  })
  
client.on("message", msg => {
    if (msg.content == "I love pristine") {
      msg.react("❤️")
      msg.channel.send("I love you all too! (except gobby)")
    }

    if (msg.content == "what unit does tivrey not have") {
        msg.reply("charles LOL :hehe:")
      }

      if (msg.content == "who is the true clown of the day") {
        msg.reply("gobby always")
      }

      if (msg.content == "123") {
        msg.reply("Pristine!!!")
      }
  
    // if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    //   modUser(msg.member)
    // }
  })
  
// function modUser(member) {
//     member.roles.add("783084095223234590")
//   }
  
client.login(process.env.BOT_TOKEN)