
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Crew = () => {
    return (
        <>
            <section id="crew" className="min-h-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center">
                <div className=' h-full z-0'>

                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='bg-red-500 h-screen'>
                            <div className='grid place-items-center h-full'>

                            Slide 1
                            </div>
                            
                            </SwiperSlide>
                        <SwiperSlide className='bg-blue-500 h-screen'>
                        <div className='grid place-items-center h-full'>

Slide 1
</div>
                        </SwiperSlide>
 
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Crew;
