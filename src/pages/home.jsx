import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/home/banner';
import Filter from '../components/home/filter';
import Footer from '../components/home/footer';
import Header from '../components/home/header';
import FoodsWeek from '../components/home/foodsWeek';
import FoodItem from '../components/common/foodItem';
import FoodsToday from '../components/home/foodsToday';
import { selectCategory } from '../redux/selectors/filter';
import FoodsAccordion from '../components/common/foodsAccordion';
import { selectFoodsByCategory, selectSubCategoryFoods } from '../redux/selectors/foods';
import { selectCategoryName, selectSubCategories, selectSubCategoriesByCategory } from '../redux/selectors/categories';

export default function Home() {
   const category = useSelector(selectCategory);
   const categoryName = useSelector(selectCategoryName(category));

   function renderPage(category) {
      if (category === 1) return <SpecialFoods />;
      else if (category === 2) return <AllFoods />;
      return <CategoryFoods category={category} />;
   }

   return (
      <main>
         <Helmet>
            <title>{categoryName} | Sacred Earth Cafe</title>
         </Helmet>
         <section className='home-header'>
            <Header />
            <Filter />
         </section>
         <div className='pb-16'>{renderPage(category)}</div>
         <Footer />
      </main>
   );
}

function SpecialFoods() {
   return (
      <Fragment>
         <Banner />
         <FoodsToday />
         <FoodsWeek />
      </Fragment>
   );
}

function AllFoods() {
   const subCategories = useSelector(selectSubCategories);
   const foods = useSelector(selectSubCategoryFoods);

   return (
      <main className='pt-2'>
         {subCategories.map((cItem, cIndex) => (
            <FoodsAccordion key={`category-${cIndex}`} title={cItem.name} className='flex flex-col gap-4'>
               {foods
                  .filter(food => food.subCategory === cItem.id)
                  .map((fItem, fIndex) => (
                     <FoodItem key={`food-${fIndex}`} {...fItem} />
                  ))}
            </FoodsAccordion>
         ))}
      </main>
   );
}

function CategoryFoods({ category }) {
   const foods = useSelector(selectFoodsByCategory(category));
   const subCategories = useSelector(selectSubCategoriesByCategory(category));

   return (
      <main className='pt-2'>
         {subCategories.map((cItem, cIndex) => (
            <FoodsAccordion key={`category-${cIndex}`} title={cItem.name} className='flex flex-col gap-4'>
               {foods
                  .filter(food => food.subCategory === cItem.id)
                  .map((fItem, fIndex) => (
                     <FoodItem key={`food-${fIndex}`} {...fItem} />
                  ))}
            </FoodsAccordion>
         ))}
      </main>
   );
}
