export function selectOrders(store) {
   return store.orders;
}

export function selectCurrentOrders(store) {
   return store.orders.current;
}

export function selectPreviousOrders(store) {
   return store.orders.previous;
}
