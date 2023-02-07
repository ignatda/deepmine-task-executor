console.log("Server started.")

const nodeCron = require("node-cron")
function compareData() {
    console.log(new Date().toLocaleString())
}

nodeCron.schedule("*/5 * * * *", compareData)
compareData()