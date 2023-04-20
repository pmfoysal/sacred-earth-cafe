import Title from './title';
import { useRef, useState } from 'react';

export default function FoodsAccordion({ title, children, className }) {
   const content = useRef();
   const [isOpen, setIsOpen] = useState(true);

   return (
      <section className={`px-4 py-2 flex flex-col foods-accordion ${isOpen ? 'gap-4' : 'gap-0'}`}>
         <Title name={title} isOpen={isOpen} setIsOpen={setIsOpen} />
         <article className='foods-container' style={{ height: `${isOpen ? content.current?.offsetHeight : 0}px` }}>
            <div className={className} ref={content}>
               {children}
            </div>
         </article>
      </section>
   );
}
