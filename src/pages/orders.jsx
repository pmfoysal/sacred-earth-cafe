import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Header from '../components/orders/header';
import Footer from '../components/orders/footer';
import CartItem from '../components/common/cartItem';
import { selectOrders } from '../redux/selectors/orders';
import FoodsAccordion from '../components/common/foodsAccordion';

export default function Orders() {
   const orders = useSelector(selectOrders);

   return (
      <main>
         <Helmet>
            <title>Orders | Sacred Earth Cafe</title>
         </Helmet>
         <Header />
         <section className='pb-20 pt-2'>
            <FoodsAccordion title='Current Orders' className='flex flex-col gap-4 order-container items-start'>
               {orders.current?.length ? (
                  <Fragment>
                     {orders.current.map((item, index) => (
                        <CartItem key={`order-${index}`} {...item} />
                     ))}
                     <p className='text-[#76DFE5] text-[12px] font-[500] underline underline-offset-2 px-2 pb-1 cursor-pointer '>
                        Add cooking instruction
                     </p>
                  </Fragment>
               ) : null}
            </FoodsAccordion>
            <FoodsAccordion title='Previous Orders' className='flex flex-col gap-4 order-container'>
               {orders.previous.map((item, index) => (
                  <CartItem key={`order-${index}`} {...item} type='confirmed' />
               ))}
            </FoodsAccordion>
         </section>
         <section className='fixed bottom-0 left-0 w-full py-4 px-2 bg-[#f1f1f1] z-10'>
            <Footer />
         </section>
      </main>
   );
}
