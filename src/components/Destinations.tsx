import { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/SpaceContext";
import { IDestination } from "../context/SpaceProvider";



const Destinations = () => {


  const { spaceState, setActiveSection } = useContext(SpaceContext);



  const { dataJson, dataLoaded } = spaceState


  const [currentDestination, setCurrentDestination] =
    useState<IDestination | null>();

  useEffect(() => {
    if (dataLoaded) {
      setCurrentDestination(dataJson.destinations[0]);
    }
  }
    , [dataLoaded]);


  return (
    <>
      <section
        id="destination"
        className=" h-auto min-h-screen bg-destination-mobile bg-cover  px-8 py-6 font-barlow font-normal md:bg-destination-tablet md:px-16 lg:bg-destination-desktop grid"
      >
        <div className="mx-auto grid w-full max-w-md place-items-center lg:gap-10  pt-12 md:max-w-2xl lg:max-w-6xl lg:grid-cols-2 lg:auto-rows-auto  ">
          <h2 className=" py-4 text-xl lg:text-3xl uppercase text-white md:justify-self-start md:py-8 lg:col-start-1 lg:self-end">
            <span className="pr-4 font-bold text-gray-500 ">01</span>
            Pick yourdestination
          </h2>
          <img
            className="mb-8 w-48 md:w-72 lg:w-full  lg:max-w-md lg:col-start-1 lg:row-span-2 lg:row-start-2"
            src={currentDestination?.images.webp}
            alt="moon"
          />
          <div className=" mx-auto w-full   self-end  px-4  text-center  font-barlow text-base  text-white-text md:text-lg lg:col-start-2 lg:row-start-2 lg:max-w-2xl lg:self-center  lg:text-start">
            {
              <div className="flex  justify-center gap-4 lg:gap-8 whitespace-nowrap uppercase lg:justify-start">

                {
                  dataLoaded &&
                  dataJson.destinations.map((item: IDestination) => (
                    <button
                      onClick={() => setCurrentDestination(item)}
                      key={item.name}
                      className={`${currentDestination?.name === item.name
                        ? " border-white text-white"
                        : "border-transparent text-gray-300"
                        }  inline-flex h-10 items-center whitespace-nowrap   border-b-2     text-sm lg:text-lg  uppercase  focus:outline-none sm:text-base`}
                    >
                      {item.name}
                    </button>
                  ))}
              </div>
            }
            <h1 className="my-4 font-bellefair text-6xl uppercase text-white md:text-8xl lg:text-9xl">
              {currentDestination?.name}
            </h1>
            <p className="mx-auto py-2 leading-7 md:max-w-sm md:text-base lg:max-w-md lg:text-justify lg:text-lg lg:leading-9 lg:m-0">
              {currentDestination?.description}
            </p>
            <div className=" mt-8 grid w-full place-items-center gap-8 border-t-2 lg:py-8  lg:max-w-md lg:px-0  border-solid border-gray-500 p-8 font-bellefair uppercase md:grid-cols-2 lg:col-start-2 lg:row-start-3">
              <div className="w-full text-center lg:text-start">
                <p className="text-base text-white-text ">AVG. DISTANCE</p>
                <h3 className="text-3xl text-white">
                  {currentDestination?.distance}
                </h3>
              </div>
              <div className="w-full text-center lg:text-start">
                <p className="text-base text-white-text">Est. travel time</p>
                <h3 className="text-3xl text-white">
                  {currentDestination?.travel}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
