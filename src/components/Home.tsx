import { useContext } from "react";
import { SpaceContext } from "../context/SpaceContext";


const Home = () => {

    console.log(window.location);
    const { setActiveSection, spaceState } = useContext(SpaceContext);

    return (
        <>
            <section id="home" className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover  font-normal">
                <div className="mx-auto grid place-items-center lg:grid-cols-2 lg:grid-rows-3 min-h-screen w-full max-w-md md:max-w-2xl lg:max-w-7xl">
                    <div className="self-end mx-auto max-w-md lg:max-w-2xl  text-center  lg:self-center  lg:row-span-2 lg:row-start-2  font-barlow text-white-text px-4 w-full text-base md:text-lg">
                        <h3 className=" lg:text-3xl text-center ">SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 className="font-bellefair my-7 text-white text-7xl md:text-9xl lg:text-10xl">SPACE</h1>
                        <p className="leading-7 lg:leading-9 md:text-base lg:text-lg lg:text-justify md:max-w-sm lg:max-w-md mx-auto p-2">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className=" md:hover:bg-white md:hover:bg-opacity-10 lg:row-span-2 lg:row-start-2  rounded-full md:p-12 lg:-top-16  transition ease-in-out">
                        <a href="#destination">
                            <button onClick={() => setActiveSection(spaceState.sections.destination.title)} className=" uppercase font-bellefair font-normal text-black-text text-lg bg-white rounded-full p-9 md:p-14 lg:p-24 aspect-square">
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
