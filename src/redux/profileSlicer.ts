import {createSlice} from '@reduxjs/toolkit';
import {DataParams} from '../models/marketModels';
import {Alert} from 'react-native';

interface ProfileState {
  items: DataParams[];
  isInPortfolio: boolean;
}

const initialState: ProfileState = {
  items: [],
  isInPortfolio: false,
};

const profileSlicer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addToPortfolio: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (!existingItem) {
        // console.log(newItem);
        state.items.push({
          name: newItem.name,
          symbol: newItem.symbol,
          current_price: newItem.current_price,
          image: newItem.image,
          market_cap: newItem.market_cap,
          price_change_24h: newItem.price_change_24h,
          sparkline_in_7d: newItem.sparkline_in_7d,
          price_change_percentage_24h: newItem.price_change_percentage_24h,
        });
        Alert.alert('Coin added to your portfolio');
      } else {
        Alert.alert('This coin is already in your portfolio');
      }
    },
    removeFromPortfolio: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== itemToRemove.name);
    },
    checkIfInPortfolio: (state, action) => {
      const name = action.payload.name;
      const existingItem = state.items.find(item => item.name === name);
      console.log(existingItem);
      if (existingItem) {
        state.isInPortfolio = true;
      } else {
        state.isInPortfolio = false;
      }
    },
  },
});

export const {addToPortfolio, removeFromPortfolio, checkIfInPortfolio} =
  profileSlicer.actions;

export default profileSlicer.reducer;
