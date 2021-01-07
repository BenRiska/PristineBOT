const {members} = require("../fixtures")

module.exports.getRandomMember = () => {
    num = Math.floor(Math.random() * (members.length))
    console.log(num)
    return members[num]
}