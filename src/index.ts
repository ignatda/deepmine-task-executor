var exports = module.exports={};

exports.start = function start() {
    console.log("Server started.")

    const cron = require("node-cron")
    const compare_responses = require("./cron_jobs/compare_responses.ts")

    cron.schedule("*/5 * * * *", compare_responses.run)
    compare_responses.run()
}