
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import '../assets/styles/crew.css';



const Crew = () => {

    return (
        <>
            <section id="crew" className="font-barlow font-normal bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center">
                <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-8 pt-16 min-h-screen">
                    <h2 className=" text-center md:text-left py-4 text-xl lg:text-3xl uppercase text-white md:justify-self-start md:py-8 lg:col-start-1 lg:self-end">
                        <span className="pr-4 font-bold text-gray-500 ">02</span>
                        Meet your crew
                    </h2>
                    <Swiper
                        className='bg-red-950 '
                        spaceBetween={0}
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='  relative'>
                            <div className='grid   max-h-screen  gap-20 grid-rows-2 h-grid-mobile' >
                                <div className="border-white pt-8 border-b border-opacity-30 border-solid w-full self-end">
                                    <img className="w-44 mx-auto" src="/images/crew/image-douglas-hurley.webp" alt="Douglas Hurley"
                                    />
                                </div>
                                <div className="grid text-center self-start">
                                    <p className="font-bellefair text-base uppercase text-white opacity-50 font-light mix-blend-normal">Commander</p>
                                    <h3 className='py-2 text-white font-bellefair text-2xl uppercase '>Douglas Hurley</h3>
                                    <p className="font-barlow text-white-text text-base leading-6">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='bg-blue-500 h-full'>
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
