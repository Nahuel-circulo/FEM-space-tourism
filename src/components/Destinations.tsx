import { useContext, useEffect, useRef, useState } from 'react'
import { SpaceContext } from '../context/SpaceContext'
import { type IDestination } from '../context/SpaceProvider'
import { useScroll } from '../utils/useScroll'

const Destinations = () => {
  const { spaceState } = useContext(SpaceContext)

  const { dataJson, dataLoaded } = spaceState

  const [currentDestination, setCurrentDestination] =
    useState<IDestination | null>()

  useEffect(() => {
    if (dataLoaded) {
      setCurrentDestination(dataJson.destinations[0])
    }
  }
    , [dataLoaded])

  const destinationRef = useRef<HTMLElement>(null)

  useScroll({ destination: 'destination', elementRef: destinationRef })

  return (
    <>
      <section
        id="destination"
        ref={destinationRef}
        className="grid h-auto min-h-screen px-8 py-6 font-normal bg-cover bg-destination-mobile font-barlow md:bg-destination-tablet md:px-16 lg:bg-destination-desktop"
      >
        <div className="grid w-full max-w-md pt-12 mx-auto place-items-center lg:gap-10 md:max-w-2xl lg:max-w-6xl lg:grid-cols-2 lg:auto-rows-auto ">
          <h2 className="py-4 text-xl text-white uppercase lg:text-3xl md:justify-self-start md:py-8 lg:col-start-1 lg:self-end">
            <span className="pr-4 font-bold text-gray-500 ">01</span>
            Pick yourdestination
          </h2>
          <img
            className="w-48 mb-8 md:w-72 lg:w-full lg:max-w-md lg:col-start-1 lg:row-span-2 lg:row-start-2"
            src={currentDestination?.images.webp}
            alt="moon"
          />
          <div className="self-end w-full px-4 mx-auto text-base text-center font-barlow text-white-text md:text-lg lg:col-start-2 lg:row-start-2 lg:max-w-2xl lg:self-center lg:text-start">
            {
              <div className="flex justify-center gap-4 uppercase lg:gap-8 whitespace-nowrap lg:justify-start">

                {
                  dataLoaded &&
                  dataJson.destinations.map((item: IDestination) => (
                    <button
                      onClick={() => { setCurrentDestination(item) }}
                      key={item.name}
                      className={`${currentDestination?.name === item.name
                        ? ' border-white text-white'
                        : 'border-transparent text-gray-300'
                        }  inline-flex h-10 items-center whitespace-nowrap   border-b-2     text-sm lg:text-lg  uppercase  focus:outline-none sm:text-base`}
                    >
                      {item.name}
                    </button>
                  ))}
              </div>
            }
            <h1 className="my-4 text-6xl text-white uppercase font-bellefair md:text-8xl lg:text-9xl">
              {currentDestination?.name}
            </h1>
            <p className="py-2 mx-auto leading-7 md:max-w-sm md:text-base lg:max-w-md lg:text-justify lg:text-lg lg:leading-9 lg:m-0">
              {currentDestination?.description}
            </p>
            <div className="grid w-full gap-8 p-8 mt-8 uppercase border-t-2 border-gray-500 border-solid place-items-center lg:py-8 lg:max-w-md lg:px-0 font-bellefair md:grid-cols-2 lg:col-start-2 lg:row-start-3">
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
  )
}

export default Destinations
