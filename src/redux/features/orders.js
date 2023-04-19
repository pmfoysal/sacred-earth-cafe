import store from '../store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   current: [],
   previous: [],
};

const orders = createSlice({
   name: 'orders',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const index = state.current.findIndex(order => order.id === action.payload.id);
         if (index === -1) state.current.push(action.payload);
         else store.dispatch(orders.actions.updateQuantity({ id: action.payload.id, factor: 1 }));
      },
      updateQuantity: (state, action) => {
         const selected = state.current.find(order => order.id === action.payload.id);
         if (selected.quantity + action.payload.factor > 0) {
            state.current = state.current.map(order => {
               if (order.id === action.payload.id) {
                  return { ...order, quantity: order.quantity + action.payload.factor };
               }
               return order;
            });
         } else state.current = state.current.filter(order => order.id !== action.payload.id);
      },
      confirmOrder: state => {
         state.current.forEach(cOrder => {
            const index = state.previous.findIndex(pOrder => pOrder.id === cOrder.id);
            if (index === -1) state.previous.push(cOrder);
            else state.previous[index].quantity += cOrder.quantity;
         });
      },
   },
});

export default orders.reducer;
export const { addToCart, updateQuantity, confirmOrder } = orders.actions;
