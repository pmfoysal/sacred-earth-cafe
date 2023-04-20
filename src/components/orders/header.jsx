import { Link } from 'react-router-dom';
import back from '../../assets/icons/arrow-left.svg';
import feedback from '../../assets/icons/feedback.svg';

export default function Header() {
   return (
      <nav className='home-header !bg-[#F1F1F1] flex items-center justify-between p-4'>
         <div className='flex items-center gap-4'>
            <Link to='/' className='order-header-button'>
               <img src={back} alt='Back' />
            </Link>
            <h1 className='text-[#4A5662] font-[500] text-[20px]'>Place Order</h1>
         </div>
         <Link to='/orders' className='order-header-button'>
            <img src={feedback} alt='Feedback' />
         </Link>
      </nav>
   );
}
