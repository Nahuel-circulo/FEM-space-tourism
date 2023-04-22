import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <Navbar />
      <div className="bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover  font-normal">
        <div className="mx-auto grid place-items-center min-h-screen w-full max-w-md md:max-w-2xl">
          <div className="self-end text-center  font-barlow text-white-text px-4 w-full text-base md:text-xl">
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="font-bellefair my-7 text-white text-7xl md:text-9xl">SPACE</h1>
            <p className="leading-7 md:text-base md:max-w-sm mx-auto">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className=" md:hover:bg-white md:hover:bg-opacity-10 rounded-full md:p-12 transition ease-in-out">
            <button className=" uppercase font-bellefair font-normal text-black-text text-xl bg-white rounded-full p-9 md:p-14 aspect-square">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//make a style for button

