import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from "../features/Country/countrySlice";


export const store = configureStore({
  reducer: {
   country: countriesReducer,
  
  },
});
