export interface Logger {
  log: (level: LogLevel, message: string) => void
}

export enum LogLevel {
  debug = 0,
  info = 1,
  error = 2
}