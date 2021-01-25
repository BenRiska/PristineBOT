module.exports.getRandomValue = (values) => {
    num = Math.floor(Math.random() * (values.length))
    return values[num]
}