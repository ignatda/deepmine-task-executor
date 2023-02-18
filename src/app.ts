import path from "path";
import dotenv from 'dotenv';
import cron from 'node-cron'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev'

dotenv.config({
    path: path.join(path.resolve(process.env.INIT_CWD || process.cwd()), 'config', `server-config-${process.env.NODE_ENV}.env`)
});

console.log(`Node environment: ${process.env.NODE_ENV} `)
console.log('Server started.')

import { compareLastBlock } from './cron_jobs/last_block'
cron.schedule('*/5 * * * *', compareLastBlock)
compareLastBlock()