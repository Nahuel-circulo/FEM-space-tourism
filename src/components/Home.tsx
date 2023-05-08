import { useContext, useRef } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { useScroll } from "../utils/useScroll";


const Home = () => {


  const { setActiveSection, spaceState } = useContext(SpaceContext);

  const homeRef = useRef<HTMLElement>(null);


  useScroll({ destination: 'home', elementRef: homeRef });

  return (
    <>
      <section id="home" ref={homeRef} className="font-normal bg-cover bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
        <div className="grid w-full max-w-md min-h-screen mx-auto place-items-center lg:grid-cols-2 lg:grid-rows-3 md:max-w-2xl lg:max-w-7xl">
          <div className="self-end w-full max-w-md px-4 mx-auto text-base text-center lg:max-w-2xl lg:self-center lg:row-span-2 lg:row-start-2 font-barlow text-white-text md:text-lg">
            <h3 className="text-center lg:text-3xl">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="text-white font-bellefair my-7 text-7xl md:text-9xl lg:text-10xl">SPACE</h1>
            <p className="p-2 mx-auto leading-7 lg:leading-9 md:text-base lg:text-lg lg:text-justify md:max-w-sm lg:max-w-md">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="transition ease-in-out rounded-full md:hover:bg-white md:hover:bg-opacity-10 lg:row-span-2 lg:row-start-2 md:p-12 lg:-top-16">
            <a href="#destination">
              <button onClick={() => setActiveSection(spaceState.sections.destination.title)} className="text-lg font-normal uppercase bg-white rounded-full font-bellefair text-black-text p-9 md:p-14 lg:p-24 aspect-square">
                Explore
              </button>
            </a>
          </div>
        </div>
      </section >
    </>
  );
}

export default Home;
