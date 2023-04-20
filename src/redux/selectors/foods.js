export function selectFoods(store) {
   return store.foods;
}

export function selectSpecialFoods(store) {
   return store.foods.filter(food => food.category === 1);
}
