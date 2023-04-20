import Banner from '../components/home/banner';
import Filter from '../components/home/filter';
import Footer from '../components/home/footer';
import Header from '../components/home/header';
import FoodsWeek from '../components/home/foodsWeek';
import FoodsToday from '../components/home/foodsToday';

export default function Home() {
   return (
      <main>
         <section className='home-header'>
            <Header />
            <Filter />
         </section>
         <div className='pb-16'>
            <Banner />
            <FoodsToday />
            <FoodsWeek />
         </div>
         <Footer />
      </main>
   );
}
