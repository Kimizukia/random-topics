function topics() {
    let topic = require('./topics.json').topics;
    let random = topic[Math.floor(Math.random() * topic.length)];
    return random;
}

module.exports = topics()