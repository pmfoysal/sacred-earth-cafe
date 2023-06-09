import 'swiper/css';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/features/filter';
import { selectCategory } from '../../redux/selectors/filter';
import { selectMainCategories } from '../../redux/selectors/categories';

export default function Filter() {
   const dispatch = useDispatch();
   const category = useSelector(selectCategory);
   const categories = useSelector(selectMainCategories);

   return (
      <Swiper slidesPerView='auto' spaceBetween={14} modules={[FreeMode]} freeMode={{ enabled: true }} className='px-4'>
         {categories.map((item, index) => (
            <SwiperSlide key={`category-${index}`} className='w-auto'>
               <button
                  className={`text-[#4A5662] text-sm font-[600] cursor-pointer text-opacity-40 py-[12px] px-[6px] category-button ${
                     category === item.id ? 'active' : ''
                  }`}
                  onClick={() => dispatch(setCategory(item.id))}
               >
                  {item.name}
               </button>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
