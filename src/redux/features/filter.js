import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   category: 1,
};

const filter = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory: (state, action) => {
         state.category = action.payload;
      },
   },
});

export default filter.reducer;
export const { setCategory } = filter.actions;
