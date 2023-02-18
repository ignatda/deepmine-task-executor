import { Logger, LogLevel } from './common'

export class ConsoleLogger implements Logger {
  log(level: LogLevel, message: string): void {
    switch (level) {
      case LogLevel.error:
        console.error(message)
        break
      case LogLevel.info:
        console.info(message)
        break
      case LogLevel.debug:
        console.debug(message)
        break
      default:
        console.log(message)
    }
  }
}
