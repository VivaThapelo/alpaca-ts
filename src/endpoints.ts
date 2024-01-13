import { DataSource, Endpoints } from './entities';

const endpoints: Endpoints = {
  rest: {
    beta: 'https://data.alpaca.markets/v1beta1',
    account: 'https://api.alpaca.markets/v2',
    broker_accounts_v1: 'https://broker-api.sandbox.alpaca.markets/v1',
    market_data_v2: 'https://data.alpaca.markets/v2',
    market_data_v1: 'https://data.alpaca.markets/v1',
  },
  websocket: {
    account: 'wss://api.alpaca.markets/stream',
    market_data: (source: DataSource = 'iex') =>
      `wss://stream.data.alpaca.markets/v2/${source}`,
  },
};

export default endpoints;
