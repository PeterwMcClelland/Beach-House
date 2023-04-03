
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <>
            <BrowserRouter>
                <div className="navbar">
                    <div id="beachhousenav" className="navlink">
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            Pacific Nest
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/gallery" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            Gallery
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            About
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/booking" style={({ isActive }) => ({ 
                            color: isActive ? 'lightblue' : 'beige' })}>
                            Booking
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/booking" element={<Booking />} />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
