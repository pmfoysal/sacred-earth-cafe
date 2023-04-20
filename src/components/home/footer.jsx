import book from '../../assets/icons/book.svg';
import shopping from '../../assets/icons/cart.svg';
import thunder from '../../assets/icons/thunder.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/features/filter';
import { selectCurrentOrders } from '../../redux/selectors/orders';

export default function Footer() {
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const orders = useSelector(selectCurrentOrders);

   function isActive(path) {
      return pathname === path;
   }

   return (
      <footer className='fixed bottom-0 left-0 w-full py-4 px-8 flex items-center justify-between bg-[#F1F1F1]'>
         <Link className={`footer-button ${isActive('/offers') ? 'active' : ''}`} onClick={() => dispatch(setCategory(1))}>
            <img src={thunder} alt='Thunder' />
         </Link>
         <Link to='/' className={`footer-button ${isActive('/') ? 'active' : ''}`} onClick={() => dispatch(setCategory(2))}>
            <img src={book} alt='Book' />
         </Link>
         <Link to='/orders' className={`footer-button relative ${isActive('/orders') ? 'active' : ''}`}>
            <img src={shopping} alt='Shopping' />
            {orders?.length ? (
               <span className='absolute right-0 top-0 translate-x-[45%] -translate-y-[45%] h-4 w-4 rounded-full bg-[#EF4B4B] text-white text-[8px] flex items-center justify-center'>
                  {orders.reduce((count, order) => count + order.quantity, 0)}
               </span>
            ) : null}
         </Link>
      </footer>
   );
}
