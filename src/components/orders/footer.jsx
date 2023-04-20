import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import right from '../../assets/icons/arrow-right.svg';
import { setCategory } from '../../redux/features/filter';
import { confirmOrder } from '../../redux/features/orders';
import { selectCurrentOrders } from '../../redux/selectors/orders';

export default function Footer() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const orders = useSelector(selectCurrentOrders);

   function handleOrder() {
      if (orders?.length) {
         dispatch(confirmOrder());
         dispatch(setCategory(1));
         navigate('/');
      }
   }

   return (
      <button className='order-footer' onClick={handleOrder}>
         <span>{orders.reduce((count, order) => count + order.quantity, 0)} items</span>
         <div>
            PLACE ORDER
            <img src={right} alt='Order' />
         </div>
      </button>
   );
}
