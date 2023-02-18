import path from "path";
import dotenv from 'dotenv';
import cron from 'node-cron'
import { compare as compareLastBlock } from './cron_jobs/last_block'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production'
dotenv.config({
    path: path.join(path.resolve(process.env.INIT_CWD || process.cwd()), 'config', `server-config-${process.env.NODE_ENV}.env`)
});

console.log(`Node environment: ${process.env.NODE_ENV} `)
console.log('Server started.')

cron.schedule('*/5 * * * *', compareLastBlock)
compareLastBlock()