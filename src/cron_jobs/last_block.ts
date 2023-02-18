import { createLogger, LoggerType } from "../loggers/logger"
import { LogLevel } from "../loggers/common"
import { getLastBlock } from "../backend_clients/axios"


export function compare () {
  const logger = createLogger(LoggerType.console)

  logger.log(LogLevel.info, `Comparing last block ${new Date().toLocaleString()}`)
  getLastBlock().then((value) => {
    logger.log(LogLevel.info, `Value ${value}`)
  }).catch((error) => {
    logger.log(LogLevel.error, `Error ${error}`)
  });
}
