const path = require("path")
const root = path.resolve(process.cwd())

if (!process.env.NODE_ENV) process.env.NODE_ENV='dev'
const config = path.join(root, 'config', `server-config-${process.env.NODE_ENV}.env`)
require('dotenv').config({ path: config });

console.log(`Node environment: ${process.env.NODE_ENV} `)
console.log(process.env.BACKEND_SERVER_URL)

const index = path.join(root, 'src', 'index.ts')
require(index).start()
