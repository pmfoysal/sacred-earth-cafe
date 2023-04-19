import { useState } from 'react';
import Title from '../common/title';

export default function FoodsToday() {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <section className='p-4'>
         <Title name='Today’s Special' isOpen={isOpen} setIsOpen={setIsOpen} />
         <article></article>
      </section>
   );
}
