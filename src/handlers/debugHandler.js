const chalk = require('chalk');
const { messages } = require("../data/config.json");

const debugHandler = debug => {
    if (debug.includes("Provided token")) {
        return console.log(`${chalk.blueBright("[DEBUG]")} ${chalk.white(messages.tokenGathered)}`)
    } else if (debug.includes("Preparing to connect to the gateway...")) {
        return console.log(`${chalk.blueBright("[DEBUG]")} ${chalk.white(messages.connectingGateway)}`)
    } else if (debug.includes("[CONNECTED] Took")) {
        return console.log(`${chalk.blueBright("[DEBUG]")} ${chalk.white(messages.botConnected)}`)
    }
}

module.exports = debugHandler;