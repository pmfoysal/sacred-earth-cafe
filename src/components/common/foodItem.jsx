import plus from '../../assets/icons/plus.svg';
import safety from '../../assets/icons/safety.svg';

export default function FoodItem({ id, category, subCategory, name, image, price }) {
   return (
      <div className='food-item-container'>
         <img src={image} alt={name} className='food-item-image' />
         <div className='p-2 flex flex-col'>
            <h1 className='food-item-title'>
               <img src={safety} alt='Safety' />
               {name}
            </h1>
            <div className='food-item-footer flex-1 pt-2'>
               <h1 className='food-item-price'>
                  ₹<span>{price}</span>
               </h1>
               <button className='food-item-button'>
                  <span>
                     <img src={plus} alt='Plus' />
                  </span>
                  ADD
               </button>
            </div>
         </div>
      </div>
   );
}
