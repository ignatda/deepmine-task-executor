import { Logger } from "./common"
import { FileLogger } from "./file_logger"
import { ConsoleLogger } from "./console_logger"

export function createLogger(loggerType: LoggerType): Logger {
  switch (loggerType) {
    case LoggerType.file:
      return new FileLogger()
    case LoggerType.console:
    default:
      return new ConsoleLogger()
  }
}

export enum LoggerType {
  console = 0,
  file = 1
}

export class UnknownLoggerTypeError extends Error { }