import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Carts from "./Components/Carts";
import Heading from "./Components/Heading";
import "./App.css";
function App() {
  const[notified,setNotified] = useState("")
  return (
    <>
      <BrowserRouter>
        <Heading notified={notified} />

        <Routes>
          <Route path="/" element={<Home setNotified={setNotified}/>} exact />
          <Route path="/cart" element={<Carts setNotified={setNotified}/>} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
