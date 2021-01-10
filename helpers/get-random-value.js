module.exports.getRandomValue = (values) => {
    num = Math.floor(Math.random() * (values.length))
    console.log(num)
    return values[num]
}