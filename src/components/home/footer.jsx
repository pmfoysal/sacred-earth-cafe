import book from '../../assets/icons/book.svg';
import shopping from '../../assets/icons/cart.svg';
import thunder from '../../assets/icons/thunder.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
   const { pathname } = useLocation();

   function isActive(path) {
      return pathname === path;
   }

   return (
      <footer className='fixed bottom-0 left-0 w-full py-4 px-8 flex items-center justify-between bg-[#F1F1F1]'>
         <Link className={`footer-button ${isActive('/offers') ? 'active' : ''}`}>
            <img src={thunder} alt='Thunder' />
         </Link>
         <Link to='/' className={`footer-button ${isActive('/') ? 'active' : ''}`}>
            <img src={book} alt='Book' />
         </Link>
         <Link to='/orders' className={`footer-button ${isActive('/orders') ? 'active' : ''}`}>
            <img src={shopping} alt='Shopping' />
         </Link>
      </footer>
   );
}
