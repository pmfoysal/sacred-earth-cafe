export function selectCategories(store) {
   return store.categories;
}

export function selectMainCategories(store) {
   return store.categories.main;
}

export function selectSubCategories(store) {
   return store.categories.sub;
}

export function selectSubCategoriesByCategory(category) {
   return store => {
      const cat = store.categories.main.find(item => item.id === category);
      if (cat.subCategories?.length) {
         return cat.subCategories.map(item => store.categories.sub.find(sc => sc.id === item));
      }
      return [];
   };
}

export function selectCategoryName(category) {
   return store => {
      const cat = store.categories.main.find(item => item.id === category);
      return cat?.name || '';
   };
}
