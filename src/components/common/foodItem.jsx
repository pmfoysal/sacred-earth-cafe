import plus from '../../assets/icons/plus.svg';
import safety from '../../assets/icons/safety.svg';

export default function FoodItem({ type = '', ...data }) {
   if (type === 'today') return <TodaySpecial {...data} />;
   else if (type === 'week') return <WeekSpecial {...data} />;
   return <FoodRow {...data} />;
}

function TodaySpecial({ id, name, image, price }) {
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

function WeekSpecial({ id, name, image, price, tags }) {
   return (
      <div className='food-item-container'>
         <img src={image} alt={name} className='food-item-image !aspect-[2.5]' />
         <div className='p-2 flex flex-col'>
            <div className='flex items-center justify-between gap-2'>
               <h1 className='food-item-title '>
                  <img src={safety} alt='Safety' />
                  {name}
               </h1>
               <h1 className='food-item-price'>
                  ₹<span>{price}</span>
               </h1>
            </div>
            <div className='food-item-footer flex-1 pt-2'>
               <div className='flex items-center gap-2'>
                  {tags?.map((item, index) => (
                     <p className='food-item-tag' key={`tag-${index}`}>
                        <span>{item}</span>
                     </p>
                  ))}
               </div>
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

function FoodRow({ id, name, image, price }) {
   return (
      <div className='food-item-container type-row'>
         <img src={image} alt={name} className='food-item-image' />
         <div className='flex flex-col'>
            <h1 className='food-item-title'>{name}</h1>
            <div className='food-item-footer flex-1 pt-2'>
               <h1 className='food-item-price flex items-center'>
                  <img src={safety} alt='Safety' className='mr-2' />₹<span>{price}</span>
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
