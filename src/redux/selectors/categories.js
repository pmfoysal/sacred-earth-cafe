export function selectCategories(store) {
   return store.categories;
}

export function selectMainCategories(store) {
   return store.categories.main;
}

export function selectSubCategories(store) {
   return store.categories.sub;
}
