
const Destinations = () => {
    return (
        <>
            <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover  min-h-screen h-auto font-normal font-barlow px-8 py-6">
                <div className="mx-auto grid place-items-center lg:grid-cols-2 lg:grid-rows-3  w-full max-w-md md:max-w-2xl lg:max-w-6xl pt-12">
                    <h2 className="py-4 text-white uppercase text-xl"><span className="text-gray-500 pr-4 font-bold">01</span>Pick your destination</h2>
                    <img className="w-48 mb-8" src="/images/destination/image-moon.webp" alt="moon" />
                    <div className="self-end mx-auto mb-8 max-w-md lg:max-w-2xl  text-center  lg:self-center  lg:row-span-2 lg:row-start-2  font-barlow text-white-text px-4 w-full text-base md:text-lg">
                        <div className="flex  uppercase justify-center whitespace-nowrap gap-4">
                            <button className="inline-flex items-center uppercase h-10   text-sm  text-white   border-b-2 border-white sm:text-base  whitespace-nowrap focus:outline-none">
                                Moon
                            </button>
                            <button className="inline-flex items-center uppercase h-10   text-sm    border-b-2 border-transparent sm:text-base  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                Mars
                            </button>
                            <button className="inline-flex items-center uppercase h-10   text-sm    border-b-2 border-transparent sm:text-base  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                Europa
                            </button>
                            <button className="inline-flex items-center uppercase h-10   text-sm    border-b-2 border-transparent sm:text-base  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                Titan
                            </button>
                        </div>
                        <h1 className="font-bellefair my-4 text-white text-6xl md:text-9xl lg:text-10xl">MOON</h1>
                        <p className="leading-7 lg:leading-9 md:text-base lg:text-lg lg:text-justify md:max-w-sm lg:max-w-md mx-auto p-2">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>
                    <div className=" w-full p-8 uppercase  grid gap-8 place-items-center border-t-2 border-solid border-gray-500">
                        <div className="w-full text-center">
                            <p className="text-white-text text-base">AVG. DISTANCE</p>
                            <h3 className="text-white text-3xl">384,400 km</h3>
                        </div>
                        <div className="w-full text-center">
                            <p className="text-white-text text-base">Est. travel time</p>
                            <h3 className="text-white text-3xl">3 days</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destinations;
