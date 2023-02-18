import Web3 from 'web3';

const RPC_URLS: string[] = (process.env.RPC_URLS || '').split(',');
const MAX_RETRIES = 3;

export async function getLastBlock(): Promise<number> {
  let web3: Web3;
  let retries: number;

  for (const url of RPC_URLS) {
    web3 = new Web3(url);
    retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        const blockNumber = await web3.eth.getBlockNumber();
        return blockNumber;
      } catch (err) {
        retries++;
        console.info(`Error getting last block from ${url}, retrying (${retries})...`);
      }
    }
  }

  throw new Error(`Failed to get last block from all URLs (${RPC_URLS.join(', ')}) after ${MAX_RETRIES} retries.`);
}

export class Web3Error extends Error {}