
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import './App.css';

function App() {
  return (
    <>
            <BrowserRouter>
                <div className="navbar">
                    <div id="beachhousenav">
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            The Newport Home
                        </NavLink>
                    </div>
                    <div className="links">
                    <div className="navlink">
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            About
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/gallery" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            Gallery
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/booking" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            Booking
                        </NavLink>
                    </div>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/booking" element={<Booking />} />
                    <Route exact path="/confirmation" element={<Confirmation />} />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
