import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Carts from "./Components/Carts"
import Heading from "./Components/Heading"

function App() {
  

  return (
 <>
<BrowserRouter>
  <Heading/>
  
   <Routes>
     <Route path="/" element={<Home/>} exact/>
     <Route path="/cart" element={<Carts/>} exact/>
   </Routes>
  </BrowserRouter>
 </>
  )
}

export default App
