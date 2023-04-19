export default function Banner() {
   return (
      <section className='p-4'>
         <div className='relative banner-container'>
            <img
               src='https://raw.githubusercontent.com/pmfoysal/data/main/sacred-earth-cafe/banner.png'
               alt='Banner'
               className='w-full h-auto aspect-[2.5] bg-[#F1F1F1] p-1 rounded-[10px] object-cover object-bottom home-banner'
            />
            <h1 className='absolute p-4 bottom-0 left-0 font-[500] text-[#FFFFFF] banner-text'>
               Welcome to <br /> Sacred Earth Cafe
            </h1>
         </div>
      </section>
   );
}
