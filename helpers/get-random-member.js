const {members} = require("../fixtures")

module.exports.getRandomMember = () => {
    num = Math.floor(Math.random() * (members.length + 1) - 1)
    return members[num]
}