import { useSelector } from 'react-redux';
import FoodItem from '../common/foodItem';
import FoodsAccordion from '../common/foodsAccordion';
import { selectWeekSpecialFoods } from '../../redux/selectors/foods';

export default function FoodsWeek() {
   const foods = useSelector(selectWeekSpecialFoods);

   return (
      <FoodsAccordion title='Dish of the Week' className='flex flex-col gap-2'>
         {foods.map((item, index) => (
            <FoodItem key={`food-${index}`} {...item} type='week' />
         ))}
      </FoodsAccordion>
   );
}
