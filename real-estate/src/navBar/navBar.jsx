import React, { useState } from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import './navBar.css';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { Drawer } from 'antd';
import DrawerComponent from './Drawer.jsx';

function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    showNavbar(false);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsiveNav');
  };

  return (
    <div>
      <header>
        <BiSolidHomeHeart />
        <span>Dubai Estate</span>
        <nav ref={navRef}>
          <NavLink exact to="/" className="nav-links">
            <span className="span-home">Home</span>
          </NavLink>
          <Link onClick={showNavbar} smooth spy to="topOffers" className="nav-links cursor-pointer">
            <span className="span-home">Top Offers</span>
          </Link>
          <Link onClick={showNavbar} smooth spy to="aboutUs" className="nav-links cursor-pointer">
            <span className="span-home">About Us</span>
          </Link>

          <Button variant="contained" className="contact-now" onClick={showDrawer}>
            Contact Us!
          </Button>

          <button onClick={showNavbar} className="nav-button-close">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-button">
          <FaBars />
        </button>
      </header>
      <Drawer title="Contact Us!" placement="right" onClose={onClose} open={open} size="large">
        <DrawerComponent />
      </Drawer>
    </div>
  );
}
export default Navbar;
