import axios from 'axios'

export async function getLastBlock (): Promise<number> {
  if (!process.env.BACKEND_URL) throw new BackendClientError("env.BACKEND_URL was not specified")
  console.log(`backend url: ${process.env.BACKEND_URL}`)

  try {
    const response = await axios.get(process.env.BACKEND_URL)
    return response.data.last_processed_block
  } catch (error: any) {
    throw new BackendClientError(error.message)
  }
}

export class BackendClientError extends Error {}