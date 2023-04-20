import { useDispatch } from 'react-redux';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
import safety from '../../assets/icons/safety.svg';
import { updateQuantity } from '../../redux/features/orders';

export default function CartItem({ id, name, price, quantity, type = '' }) {
   const dispatch = useDispatch();

   function increaseQuantity() {
      dispatch(updateQuantity({ id, factor: 1 }));
   }

   function decreaseQuantity() {
      dispatch(updateQuantity({ id, factor: -1 }));
   }

   return (
      <div className='grid grid-cols-[auto_1fr_auto] gap-2 items-center w-full'>
         <img src={safety} alt='Safety' className='h-4 w-auto' />
         <div>
            <h1 className='text-sm text-[#4A5662]'>{name}</h1>
            <h1 className='text-[12px] text-[#727272]'>
               $<span className='font-[500]'>{price}</span>
            </h1>
         </div>
         {type !== 'confirmed' ? (
            <div className='cart-buttons'>
               <button onClick={decreaseQuantity} className='cart-button'>
                  <img src={minus} alt='Remove' className='w-[10px] h-auto' />
               </button>
               <span className='flex items-center justify-center text-[#4A5662] text-[13px] font-[500]'>{quantity}</span>
               <button onClick={increaseQuantity} className='cart-button'>
                  <img src={plus} alt='Add' className='w-[10px] h-auto' />
               </button>
            </div>
         ) : (
            <h1 className='text-[#4A5662] font-[500] text-[13px] pr-4'>{quantity}</h1>
         )}
      </div>
   );
}
