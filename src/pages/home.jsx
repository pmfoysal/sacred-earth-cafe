import Filter from '../components/home/filter';
import Header from '../components/home/header';

export default function Home() {
   return (
      <main>
         <section className='bg-[#F0F3F3]'>
            <Header />
            <Filter />
         </section>
      </main>
   );
}
