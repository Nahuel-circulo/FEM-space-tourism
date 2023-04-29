import Destinations from "./components/Destinations"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { SpaceProvider } from "./context/SpaceProvider"



function App() {


  return (
    <SpaceProvider >
      <Navbar />
      <main >
        <Home />
        <Destinations />
      </main>

    </ SpaceProvider>
  )
}

export default App


