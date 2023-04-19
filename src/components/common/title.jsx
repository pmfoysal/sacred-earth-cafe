import icon from '../../assets/icons/arrow-up.svg';

export default function Title({ name, isOpen, setIsOpen }) {
   return (
      <nav onClick={() => setIsOpen(prev => !prev)} className='title-container'>
         <h1 className='text-sm text-[#4A5662] font-[500]'>{name}</h1>
         <span className='line'></span>
         <img src={icon} alt='Arrow' className={isOpen ? 'active' : ''} />
      </nav>
   );
}
