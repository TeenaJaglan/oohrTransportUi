import React from "react";
import "../pagesCSS/LoginButton.css";
import "../pagesCSS/Hamburger.css";
import { Link } from "react-router-dom";
import "boxicons";

export default function Navbar() {
  const onClickMenu = () => {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("ham_nav").classList.toggle("ham_nav");
    document.getElementById("btn").classList.toggle("btn");
    document.getElementById("noti").classList.toggle("noti");
  };
  return (
    <>
      <div
        className="flex justify-between items-center h-20 bg-oohr_bg_col"
        id="ham_nav"
      >
        <img className="logo w-14 mx-4" src="../oohrlogo.webp" alt="logo" />
        <ul className="nav flex justify-evenly">
          <li>
            <Link
              className="px-4 font-semibold hover:text-white text-lg"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-4 font-semibold hover:text-white text-lg"
              to="parent"
            >
              Parents
            </Link>
          </li>
          <li>
            <Link
              className="px-4 font-semibold hover:text-white text-lg"
              to="driver"
            >
              Drivers
            </Link>
          </li>
          <li>
            <Link
              className="px-4 font-semibold hover:text-white text-lg"
              to="contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          to="notification"
          className="noti absolute top-7 right-40 cursor-pointer"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAVNJREFUSEvt1b8rhXEUx/HXzcRoUGRgUHYT/gAmsVgkfwH/gUhWA1YWkUEpJcqolNFgMRkVkqQoieerRz1d9/l13W4GZ/6e8z7nfM/5nIomWaVJHGVB7VhFNxZwWjTRMqAhbKI/EXw2gm7gNQ9YBDSIdQykBHvEMlayYHmgMeyjJS9jbGM67V0WqA8XaCsA+X4yF1f/wyULdIzREpDw9CUelIdqvzRQD65LQjKrSgOFaVqrE3SCkaIVzWOpTtBV1Qp8hUmraDFeyHpYN+gqWtE/KNmpv9e6Tpyht55JiIboA1PYTfpXT104A+cI8vMbe4/kaxyH30GqQVtZwliS/BYtfUj8udYeHSAodqOsA3e1QBNR23bQ2gDSHibTWteA+LVD5B2+pFcQ2SC2SbuNB+cpL8MyoHAAgzIPx0Hvo1Myg6M8SJaoZvmGSQqieVkE0PQ/+gREoDMb/vGo1wAAAABJRU5ErkJggg==" />
        </Link>
        <Link to="/loginpage">
          <button className="bn5 mx-4" id="btn">
            Login
          </button>
        </Link>
        <div id="menu" onClick={onClickMenu}>
          <div className="bar" id="bar1"></div>
          <div className="bar" id="bar2"></div>
          <div className="bar" id="bar3"></div>
        </div>
      </div>
    </>
  );
}

// const Navbar = () => {
//   return <div className='flex justify-between items-center h-14'>
//     <img className="w-14 mx-4" src="../oohrlogo.webp" alt="logo" />
//   <ul className='flex justify-evenly'>
//     <li><Link className='px-4 font-semibold text-lg' to="#">Home</Link></li>
//     <li><Link className='px-4 font-semibold text-lg' to="#">Parents</Link></li>
//     <li><Link className='px-4 font-semibold text-lg' to="#">Drivers</Link></li>
//     <li><Link className='px-4 font-semibold text-lg' to="#">Contact Us</Link></li>
//   </ul>
//   <button class="bn5 mx-4">Login</button></div>;
// };

// export default Navbar;
