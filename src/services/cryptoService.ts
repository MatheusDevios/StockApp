import axios from 'axios';
import moment from 'moment';
import {SAMPLE_DATA} from '../data/CoinsData';
import {DataParams} from '../models/marketModels';

const formatSparkline = (numbers: any) => {
  const sevenDaysAgo = moment().subtract(7, 'days').unix();
  let formattedSparkline = numbers.map((item: any, index: number) => {
    return item.y;
  });

  return formattedSparkline;
};

const formatMarketData = (data: object[]) => {
  let formattedData: DataParams[] = [];

  data.map((item: any) => {
    const formattedSparkline = formatSparkline(item.sparkline_in_7d.price);

    const formattedItem = {
      name: item.name,
      symbol: item.symbol,
      current_price: item.current_price,
      image: item.image,
      price_change_percentage_24h: item.price_change_percentage_24h,
      market_cap: item.market_cap,
      sparkline_in_7d: {
        price: formattedSparkline,
      },
    };
    formattedData.push(formattedItem);
  });

  return formattedData;
};

export const getMarketData = async () => {
  try {
    // const response = await axios.get(
    //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=true&price_change_percentage=24h&locale=en',
    // );
    // const data = response.data;
    const data: any = SAMPLE_DATA;
    // console.log(data);
    // return data;
    const formattedResponse = formatMarketData(data);
    return formattedResponse || [];
  } catch (error: any) {
    console.log(error.message);
  }
};
