import Title from './title';
import { useRef, useState } from 'react';

export default function FoodsAccordion({ title, children, className }) {
   const content = useRef();
   const [isOpen, setIsOpen] = useState(true);

   return (
      <section className='p-4 flex flex-col gap-4'>
         <Title name={title} isOpen={isOpen} setIsOpen={setIsOpen} />
         <article className='foods-container' style={{ height: `${isOpen ? content.current?.offsetHeight : 0}px` }}>
            <div className={className} ref={content}>
               {children}
            </div>
         </article>
      </section>
   );
}
