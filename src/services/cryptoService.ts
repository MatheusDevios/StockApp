import axios from 'axios';
import {SAMPLE_DATA} from '../data/CoinsData';

export const getMarketData = async () => {
  try {
    // const response = await axios.get(
    //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=true&price_change_percentage=24h&locale=en',
    // );
    // const data = response.data;
    const data: any = SAMPLE_DATA;
    return data;
    // const formattedResponse = formatMarketData(data);
    // return formattedResponse || [];
  } catch (error: any) {
    console.log(error.message);
  }
};
