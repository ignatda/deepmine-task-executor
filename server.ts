const nodeCron = require("node-cron")
console.log("Server started.")

function compareData() {
    console.log(new Date().toLocaleString())
}

nodeCron.schedule("*/5 * * * *", compareData)
compareData()
