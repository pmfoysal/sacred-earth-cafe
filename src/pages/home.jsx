import Filter from '../components/home/filter';
import Header from '../components/home/header';

export default function Home() {
   return (
      <main>
         <section className='home-header'>
            <Header />
            <Filter />
         </section>
      </main>
   );
}
