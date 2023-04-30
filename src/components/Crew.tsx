
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
            <section id="crew" className="font-barlow font-normal bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center">
                <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-8 pt-16 min-h-screen">
                    <h2 className=" text-center md:text-left py-4 text-xl lg:text-3xl uppercase text-white md:justify-self-start md:py-8 lg:col-start-1 lg:self-end">
                        <span className="pr-4 font-bold text-gray-500 ">02</span>
                        Meet your crew
                    </h2>
                    <Swiper
                        className=' '
                        spaceBetween={0}
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            crews.map((crew: Crew) =>
                            (
                                <SwiperSlide className='  relative' key={crew.name}>
                                    <div className='grid   max-h-screen  gap-20 grid-rows-2 h-grid-mobile' >
                                        <div className="border-white pt-8 border-b border-opacity-30 border-solid w-full self-end">
                                            <img className="max-h-72 mx-auto "  src={crew.images.webp} alt={crew.name}
                                            />
                                        </div>
                                        <div className="grid text-center self-start">
                                            <p className="font-bellefair text-base uppercase text-white opacity-50 font-light mix-blend-normal">{crew.role}</p>
                                            <h3 className='py-2 text-white font-bellefair text-2xl uppercase '>{crew.name}</h3>
                                            <p className="font-barlow text-white-text text-base leading-6">{crew.bio}</p>
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
