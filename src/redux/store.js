import foods from './features/foods';
import orders from './features/orders';
import categories from './features/categories';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
   reducer: {
      categories,
      foods,
      orders,
   },
});
