import winston from 'winston'
import { Logger, LogLevel } from './common'

export class FileLogger implements Logger {
  private readonly logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/app.log' })
    ]
  })

  log(level: LogLevel, message: string): void {
    this.logger.log(LogLevel[level], message)
  }
}
