import axios from 'axios'

export async function getLastBlock (): Promise<string> {
  if (!process.env.BACKEND_URL) throw new BackendClientError("env.BACKEND_URL was not specified")

  try {
    const response = await axios.get(process.env.BACKEND_URL)
    return response.data.last_processed_block
  } catch (error: any) {
    throw new BackendClientError(JSON.stringify(error))
  }
}

export class BackendClientError extends Error {}