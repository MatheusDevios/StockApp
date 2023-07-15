export type StockCategory = {
  stockSymbol: string;
  name: string;
  graph: string;
  moviment: boolean;
  price: number;
  percentageGain: number;
  onPress: () => void;
};

export const stockData: StockCategory[] = [
  {
    name: 'Dow jone Industry',
    stockSymbol: 'DJIA',
    graph: 'Graph',
    moviment: false,
    price: 25585.69,
    percentageGain: 0.5,
    onPress: () => {},
  },
  {
    name: 'ITAU Bank',
    stockSymbol: 'ITAU',
    graph: 'Graph',
    moviment: true,
    price: 7890.69,
    percentageGain: 0.6,
    onPress: () => {},
  },
  {
    name: 'Facebook',
    stockSymbol: 'META',
    graph: 'Graph',
    moviment: true,
    price: 890.19,
    percentageGain: 1.2,
    onPress: () => {},
  },
  {
    name: 'Russell 2000 ',
    stockSymbol: 'RUSS 2k',
    graph: 'Graph',
    moviment: false,
    price: 89.32,
    percentageGain: 0.2,
    onPress: () => {},
  },
  {
    name: 'Instagram',
    stockSymbol: 'META',
    graph: 'Graph',
    moviment: true,
    price: 430.51,
    percentageGain: 0.9,
    onPress: () => {},
  },
  {
    name: 'S&P 500',
    stockSymbol: 'S&P 500',
    graph: 'Graph',
    moviment: false,
    price: 27.32,
    percentageGain: 1.8,
    onPress: () => {},
  },
  {
    name: 'NASDAQ Composite',
    stockSymbol: 'NASDAQ',
    graph: 'Graph',
    moviment: false,
    price: 27.32,
    percentageGain: 1.8,
    onPress: () => {},
  },
];
