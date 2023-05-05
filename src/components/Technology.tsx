import { useEffect, useState } from "react";



interface Technology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}


const Technology = () => {

    const [activeTechnology, setActiveTechnology] = useState<Technology>();
    const [technologies, setTechnologies] = useState<Technology[]>([]);
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
                setTechnologies(myJson.technology);
                setActiveTechnology(myJson.technology[0])
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section id="technology" className="py-8 min-h-screen bg-cover bg-center bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
            <div className="grid py-8">
                <h2 className="text-center py-4 text-xl md:pl-8 lg:text-3xl uppercase text-white md:justify-self-start md:pt-12 md:pb-8 lg:col-start-1 lg:self-end">
                    <span className="pr-4 font-bold text-gray-500 ">03</span>
                    Space launch 101
                </h2>
                <div className="grid grid-cols-1  gap-4 pt-8 pb-4">

                    <picture className="w-full ">
                        <img className="hidden lg:block   object-contain" src={activeTechnology?.images.portrait} />
                        <img className="lg:hidden w-full" src={activeTechnology?.images.landscape} />
                    </picture>


                </div>
                <div className="flex justify-center gap-4 py-8">

                    {
                        technologies.map((technology, index) =>
                        (
                            <button key={index} className={`${activeTechnology?.name === technology.name ? "bg-white text-black" : "bg-transparent"} text-white mix-blend-normal text-sm font-bellefair uppercase border transition-colors duration-300 ease-in-out rounded-full w-12 h-12 bg-white aspect-square`} onClick={() => setActiveTechnology(technology)}>
                                {index + 1}</button>
                        ))

                    }

                </div>
                <div className="grid  text-center lg:col-start-1 lg:row-start-1 lg:items-center px-8">
                    <div className="lg:text-start">

                        <p className="font-barlow text-sm uppercase text-white-text font-light mix-blend-normal md:text-xl">THE TERMINOLOGY…</p>
                        <h3 className='py-2 text-white font-bellefair text-2xl lg:py-4 uppercase md:text-5xl '>{activeTechnology?.name}</h3>
                        <p className=" font-barlow text-white-text text-sm leading-6 md:text-base lg:text-lg max-w-lg md:mx-auto lg:mx-0">{activeTechnology?.description}</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Technology;
