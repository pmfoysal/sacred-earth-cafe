import logo from '../../assets/icons/logo.png';
import tags from '../../assets/icons/hash.svg';
import waiter from '../../assets/icons/waiter.svg';

export default function Header() {
   return (
      <header className='p-4 flex items-center justify-between'>
         <aside className='flex items-center gap-[6px]'>
            <img src={logo} alt='Sacred Earth Cafe' className='h-7 w-7 rounded-full' />
            <h1 className='font-[600] text-[#4A5662]'>Sacred Earth Cafe</h1>
         </aside>
         <aside className='flex items-center gap-4'>
            <button className='flex items-center justify-center h-[30px] w-[30px] rounded-[10px] header-button'>
               <img src={waiter} alt='Waiter' className='h-[18px] w-auto' />
            </button>
            <button className='flex items-center justify-center h-[30px] w-[30px] rounded-[10px] header-button'>
               <img src={tags} alt='Tags' className='h-[18px] w-auto' />
            </button>
         </aside>
      </header>
   );
}
