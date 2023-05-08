
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import '../assets/styles/crew.css';
import { useContext, useRef } from 'react';
import { SpaceContext } from '../context/SpaceContext';
import { ICrew } from '../context/SpaceProvider';
import { useScroll } from '../utils/useScroll';




const Crew = () => {


  const { spaceState } = useContext(SpaceContext);


  const crewRef = useRef<HTMLElement>(null);


  useScroll({ destination: 'crew', elementRef: crewRef });

  return (
    <>
      <section id="crew" ref={crewRef} className="font-normal bg-center bg-cover font-barlow bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop ">
        <div className="grid max-w-md min-h-screen px-8 pt-16 mx-auto md:max-w-2xl lg:max-w-6xl md:pt-0 md:items-end grid-rows-autoandrepeatfr">
          <h2 className="py-4 text-xl text-center text-white uppercase md:text-left lg:text-3xl md:justify-self-start md:mt-12 md:pt-12 lg:col-start-1 lg:self-end">
            <span className="pr-4 font-bold text-gray-500 ">02</span>
            Meet your crew
          </h2>

          <Swiper
            className='relative w-full h-full '
            scrollbar={{ enabled: false }}

            spaceBetween={50}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {
              spaceState.dataLoaded &&
              spaceState.dataJson.crew.map((crew: ICrew) =>
              (
                <SwiperSlide className='h-full ' key={crew.name}>
                  {/* <div className='grid grid-rows-2 gap-16 auto-rows-fr md:gap-10 md:grid-rows-3 h-grid-mobile' > */}
                  <div className='grid h-full grid-rows-2 gap-16 lg:grid-rows-1 auto-rows-fr md:gap-10 md:grid-rows-3 lg:grid-cols-2 ' >
                    <div className="flex items-end self-end w-full h-full border-b border-white border-solid md:border-none border-opacity-30 md:row-start-2 md:row-span-2 lg:row-start-1 lg:row-span-1">
                      <img className="h-full mx-auto max-h-72 lg:max-h-100 md:max-h-96 md:max-w-sm lg:max-w-none" src={crew.images.webp} alt={crew.name}
                      />
                    </div>
                    <div className="grid text-center lg:col-start-1 lg:row-start-1 lg:items-center">
                      <div className="lg:text-start">

                        <p className="text-base font-light text-white uppercase opacity-50 font-bellefair mix-blend-normal md:text-2xl">{crew.role}</p>
                        <h3 className='py-2 text-2xl text-white uppercase font-bellefair lg:py-4 md:text-5xl '>{crew.name}</h3>
                        <p className="max-w-lg text-base leading-7 font-barlow text-white-text lg:text-lg md:mx-auto lg:mx-0">{crew.bio}</p>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
              ))

            }

          </Swiper>

        </div>
      </section>
    </>
  );
}

export default Crew;
