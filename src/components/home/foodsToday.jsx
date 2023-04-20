import FoodItem from '../common/foodItem';
import { useSelector } from 'react-redux';
import FoodsAccordion from '../common/foodsAccordion';
import { selectTodaySpecialFoods } from '../../redux/selectors/foods';

export default function FoodsToday() {
   const foods = useSelector(selectTodaySpecialFoods);

   return (
      <FoodsAccordion title='Today’s Special' className='grid grid-cols-2 gap-2'>
         {foods.map((item, index) => (
            <FoodItem key={`food-${index}`} {...item} type='today' />
         ))}
      </FoodsAccordion>
   );
}
