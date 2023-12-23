import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuContextProvider } from "./context/MenuContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <MenuContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MenuContextProvider>
    </>
  );
}

export default App;
