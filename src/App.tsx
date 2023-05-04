import Crew from "./components/Crew"
import Destinations from "./components/Destinations"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Technology from "./components/Technology"
import { SpaceProvider } from "./context/SpaceProvider"



function App() {


  return (
    <SpaceProvider >
      <Navbar />
      <main >
        <Home />
        <Destinations />
        <Crew/>
        <Technology/>
      </main>

    </ SpaceProvider>
  )
}

export default App


