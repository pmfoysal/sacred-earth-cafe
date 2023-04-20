import { useSelector } from 'react-redux';
import { selectOrders } from '../redux/selectors/orders';
import Header from '../components/orders/header';

export default function Orders() {
   const orders = useSelector(selectOrders);
   console.log(orders.current);

   return (
      <main>
         <section>
            <Header />
         </section>
      </main>
   );
}
