import {createSlice} from '@reduxjs/toolkit';

interface timeState {
  time: string;
  items: number[];
}

const initialState: timeState = {
  items: [],
  time: '1M',
};

const timeManagerSlicer = createSlice({
  name: 'timeManager',
  initialState,
  reducers: {
    changeTime: (state, action) => {
      // console.log(action.payload);
      const {time, stocks} = action.payload;
      // console.log(stocks.length);
      state.time = time;
      if (time === '1D') {
        state.items = stocks.slice(0, Math.floor((stocks.length - 1) / 5));
      } else if (time === '7D') {
        state.items = stocks.slice(0, Math.floor((stocks.length - 1) / 4));
      } else if (time === '1M') {
        state.items = stocks.slice(0, Math.floor((stocks.length - 1) / 3));
      } else if (time === '3M') {
        state.items = stocks.slice(0, Math.floor((stocks.length - 1) / 2));
      } else if (time === '1Y') {
        state.items = stocks.slice(0, stocks.length - 1);
      }
    },
  },
});

export const {changeTime} = timeManagerSlicer.actions;

export default timeManagerSlicer.reducer;
