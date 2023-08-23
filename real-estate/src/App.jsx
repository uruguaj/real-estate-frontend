import './App.css'
import * as React from "react";
import Navbar from "./navBar/navBar.jsx";
import Home from "./home/home.jsx";
import TopOffers from "./offers/topOffers/topOffers.jsx";

import { Layout, Menu, theme } from 'antd';
import AboutUs from "./aboutUs/aboutUs.jsx";
const { Footer } = Layout;

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <TopOffers/>
      <AboutUs/>
      <Footer
          style={{
              textAlign: 'center',
          }}
      >
          Dubai Estate ©2023 Created by Uruguaj
      </Footer>
    </div>
  )
}

export default App
