import { createLogger, LoggerType } from "../loggers/logger"
import { LogLevel } from "../loggers/common"
import { getLastBlock as getLastBlockFromBackend } from "../backend_clients/axios"
import { getLastBlock as getLastBlockFromRpc } from "../web3_clients/eth"


export async function compareLastBlock() {
  const logger = createLogger(LoggerType.console)
  try {
    logger.log(LogLevel.info, `Comparing last block ${new Date().toLocaleString()}`)

    const persistedLastBlock: number = await getLastBlockFromBackend();
    const actualLastBlock = await getLastBlockFromRpc();
    logger.log(LogLevel.info, `Persisted last block number: ${persistedLastBlock}`);
    logger.log(LogLevel.info, `Actual    last block number: ${actualLastBlock}`);
  } catch (error: any) {
    logger.log(LogLevel.error, `Uncached error at last block schedule: ${error.message}`);
  }
}
