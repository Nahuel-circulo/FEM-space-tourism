import { useEffect, useState } from "react";

enum DestinationType {
  moon = "Moon",
  mars = "Mars",
  europa = "Europa",
  titan = "Titan",
}

//create interface of destinations
interface IDestination {
  id: number;
  name: DestinationType;
  images: Iimages;
  description: string;
  distance: string;
  travel: string;
}

interface Iimages {
  png: string;
  webp: string;
}

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] =
    useState<IDestination | null>();

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
        setDestinations(myJson.destinations);
        setCurrentDestination(myJson.destinations[0]);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        id="destination"
        className=" h-auto min-h-screen bg-destination-mobile bg-cover  px-8 py-6 font-barlow font-normal md:bg-destination-tablet md:px-16 lg:bg-destination-desktop"
      >
        <div className="mx-auto grid w-full max-w-md place-items-center  pt-12 md:max-w-2xl lg:max-w-6xl lg:grid-cols-2 lg:grid-rows-2">
          <h2 className=" py-4 text-xl uppercase text-white md:justify-self-start md:py-8 lg:col-start-1">
            <span className="pr-4 font-bold text-gray-500">01</span>Pick your
            destination
          </h2>
          <img
            className="mb-8 w-48 md:w-72 lg:col-start-1 lg:row-span-2 lg:row-start-2"
            src={currentDestination?.images.webp}
            alt="moon"
          />
          <div className=" mx-auto w-full   self-end  px-4  text-center  font-barlow text-base  text-white-text md:text-lg lg:col-start-2 lg:row-start-2 lg:max-w-2xl lg:self-center">
            {
              <div className="flex  justify-center gap-4 whitespace-nowrap uppercase">
                {destinations.map((item: IDestination) => (
                  <button
                    onClick={() => setCurrentDestination(item)}
                    key={item.name}
                    className={`${
                      currentDestination?.name === item.name
                        ? " border-white text-white"
                        : "border-transparent text-gray-300"
                    }  inline-flex h-10 items-center whitespace-nowrap   border-b-2     text-sm  uppercase  focus:outline-none sm:text-base`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            }
            <h1 className="my-4 font-bellefair text-6xl uppercase text-white md:text-8xl lg:text-10xl">
              {currentDestination?.name}
            </h1>
            <p className="mx-auto py-2 leading-7 md:max-w-sm md:text-base lg:max-w-md lg:text-justify lg:text-lg lg:leading-9">
              {currentDestination?.description}
            </p>
            <div className=" mt-8 grid w-full place-items-center gap-8 border-t-2  border-solid border-gray-500 p-8 font-bellefair uppercase md:grid-cols-2 lg:col-start-2 lg:row-start-3">
              <div className="w-full text-center">
                <p className="text-base text-white-text ">AVG. DISTANCE</p>
                <h3 className="text-3xl text-white">
                  {currentDestination?.distance}
                </h3>
              </div>
              <div className="w-full text-center">
                <p className="text-base text-white-text">Est. travel time</p>
                <h3 className="text-3xl text-white">
                  {currentDestination?.travel}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
