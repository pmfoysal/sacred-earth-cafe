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
         // if product is not found in current orders
         if (index === -1) state.current.push(action.payload);
         // if product is found in current orders
         else state.current[index].quantity = state.current[index].quantity + 1;
      },
      updateQuantity: (state, action) => {
         // find the product from current orders
         const selected = state.current.find(order => order.id === action.payload.id);
         // if the product quantity is greater than 0 even after adding the factor
         if (selected.quantity + action.payload.factor > 0) {
            state.current = state.current.map(order => {
               if (order.id === action.payload.id) {
                  return { ...order, quantity: order.quantity + action.payload.factor };
               }
               return order;
            });
         }
         // if the quantity of the product is not there after adding the factor
         else state.current = state.current.filter(order => order.id !== action.payload.id);
      },
      confirmOrder: state => {
         state.current.forEach(cOrder => {
            // find the index of each product from the previous orders
            const index = state.previous.findIndex(pOrder => pOrder.id === cOrder.id);
            // if no product found from the previous orders
            if (index === -1) state.previous.push(cOrder);
            // if the product is found from the previous orders
            else state.previous[index].quantity += cOrder.quantity;
         });
         state.current = [];
      },
   },
});

export default orders.reducer;
export const { addToCart, updateQuantity, confirmOrder } = orders.actions;
