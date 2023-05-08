import { useContext, useEffect, useRef, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { ITechnology } from "../context/SpaceProvider";
import { useScroll } from "../utils/useScroll";




const Technology = () => {


  const { spaceState } = useContext(SpaceContext);

  const { dataLoaded, dataJson } = spaceState;

  const [activeTechnology, setActiveTechnology] = useState<ITechnology | null>();




  useEffect(() => {
    setActiveTechnology(dataJson.technology[0])

  }, [dataLoaded]);

  const technologyRef = useRef<HTMLElement>(null);


  useScroll({ destination: 'technology', elementRef: technologyRef });

  return (
    <section id="technology" ref={technologyRef} className="min-h-screen py-8 bg-center bg-cover md:py-12 bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
      <h2 className="pt-12 pb-8 mx-auto text-xl text-center text-white uppercase md:text-start lg:max-w-6xl md:pl-8 lg:text-3xl ">
        <span className="pr-4 font-bold text-gray-500 ">03</span>
        Space launch 101
      </h2>
      <div className="grid py-4 lg:grid-cols-3 lg:gap-6">
        <div className="grid grid-cols-1 gap-4 pt-8 pb-4 lg:col-start-3 lg:justify-self-end">

          <picture className="w-full ">
            <img className="hidden w-full lg:block " src={activeTechnology?.images.portrait} />
            <img className="w-full lg:hidden" src={activeTechnology?.images.landscape} />
          </picture>


        </div>
        <div className="flex justify-center gap-4 py-8 lg:col-start-1 lg:row-start-1 lg:gap-8 lg:flex-col lg:items-end lg:px-12">

          {
            dataLoaded &&
            dataJson.technology.map((technology, index) =>
            (
              <button key={index} className={`${activeTechnology?.name === technology.name ? "bg-white text-black" : "bg-transparent text-white "} mix-blend-normal text-sm md:text-lg font-bellefair uppercase border transition-colors duration-300 ease-in-out rounded-full w-12 h-12 lg:w-16 lg:h-16  aspect-square`} onClick={() => setActiveTechnology(technology)}>
                {index + 1}</button>
            ))

          }

        </div>
        <div className="grid px-8 text-center lg:col-start-2 lg:row-start-1 lg:items-center lg:px-0">
          <div className="lg:text-start">

            <p className="text-sm font-light uppercase font-barlow text-white-text mix-blend-normal md:text-xl">THE TERMINOLOGY…</p>
            <h3 className='py-2 text-2xl text-white uppercase font-bellefair lg:py-4 md:text-5xl xl:text-6xl'>{activeTechnology?.name}</h3>
            <p className="max-w-lg text-sm leading-6  font-barlow text-white-text lg:leading-8 md:text-base xl:text-lg md:mx-auto lg:mx-0">{activeTechnology?.description}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Technology;
