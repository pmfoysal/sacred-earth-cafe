export function selectFoods(store) {
   return store.foods;
}

export function selectSpecialFoods(store) {
   return store.foods.filter(food => food.category === 1);
}

export function selectTodaySpecialFoods(store) {
   return store.foods.filter(food => food.category === 1 && food.trending === 'today');
}

export function selectWeekSpecialFoods(store) {
   return store.foods.filter(food => food.category === 1 && food.trending === 'week');
}

export function selectFoodsByCategory(category) {
   return store => store.foods.filter(food => food.category === category);
}

export function selectSubCategoryFoods(store) {
   return store.foods.filter(food => food.subCategory);
}
