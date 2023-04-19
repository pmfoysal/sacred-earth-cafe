import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   main: [
      {
         id: 1,
         name: 'Special',
      },
      {
         id: 2,
         name: 'All Foods',
         subCategories: [1, 2, 3, 4, 5, 6],
      },
      {
         id: 3,
         name: 'Beverages',
         subCategories: [5, 6],
      },
      {
         id: 4,
         name: 'Desserts',
         subCategories: [3, 4],
      },
      {
         id: 5,
         name: 'Store',
         subCategories: [1, 2],
      },
   ],
   sub: [
      {
         id: 1,
         name: 'Acai Bowls',
      },
      {
         id: 2,
         name: 'Sweet Treats',
      },
      {
         id: 3,
         name: 'Pizza',
      },
      {
         id: 4,
         name: 'Soups',
      },
      {
         id: 5,
         name: 'Fresh Juice',
      },
      {
         id: 6,
         name: 'Iced Coffe',
      },
   ],
};

export default createSlice({
   name: 'categories',
   initialState,
}).reducer;
