
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import '../assets/styles/crew.css';
import { useEffect, useState } from 'react';


//can you make crew interface ?
interface Crew {
    name: string;
    role: string;
    bio: string;
    images: Iimages;
}

interface Iimages {
    png: string;
    webp: string;
}

const Crew = () => {


    const [crews, setCrews] = useState([]);


    const getData = () => {
        fetch("/data/data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setCrews(myJson.crew);
            });
    };

    useEffect(() => {
        getData();
    }, []);



    return (
        <>
            <section id="crew" className="font-barlow font-normal bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center ">
                <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-8 pt-16  min-h-screen  md:pt-0 grid md:items-end grid-rows-autoandrepeatfr">
                    <h2 className=" text-center md:text-left py-4 text-xl lg:text-3xl uppercase text-white md:justify-self-start md:mt-12 md:pt-12 lg:col-start-1 lg:self-end">
                        <span className="pr-4 font-bold text-gray-500 ">02</span>
                        Meet your crew
                    </h2>
                    <Swiper
                        className='bg-red-900 h-full w-full relative'
                        scrollbar={{ enabled: false }}

                        spaceBetween={50}
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            crews.map((crew: Crew) =>
                            (
                                <SwiperSlide className=' h-full' key={crew.name}>
                                    {/* <div className='grid  auto-rows-fr gap-16 md:gap-10 grid-rows-2 md:grid-rows-3 h-grid-mobile' > */}
                                    <div className='grid h-full  auto-rows-fr gap-16 md:gap-10 grid-rows-2 md:grid-rows-3 ' >
                                        <div className="border-white  h-full  flex items-end  border-b md:border-none  border-opacity-30 border-solid w-full self-end md:row-start-2 md:row-span-2">
                                            <img className=" max-h-72 h-full md:max-h-96 md:max-w-sm mx-auto " src={crew.images.webp} alt={crew.name}
                                            />
                                        </div>
                                        <div className="grid  text-center ">
                                            <p className="font-bellefair text-base uppercase text-white opacity-50 font-light mix-blend-normal md:text-2xl">{crew.role}</p>
                                            <h3 className='py-2 text-white font-bellefair text-2xl uppercase md:text-4xl'>{crew.name}</h3>
                                            <p className=" font-barlow text-white-text text-base leading-7  max-w-lg md:mx-auto over">{crew.bio}</p>
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
