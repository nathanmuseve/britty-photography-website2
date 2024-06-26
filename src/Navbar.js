import Home from "./Home"
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom"

export default function Navbar () {
    return (
    <div className="Navbar-overall">
       <div className="Navbar-title">
     <h2>PHOTOGRAPHY WEBSITE</h2>
       </div>
       <div className="Navbar-links">
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Outlet />
       </div>
    </div>
    )
    
}