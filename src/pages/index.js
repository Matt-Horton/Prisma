import React from "react"
import StaticNavbar from '../components/StaticNavbar';
import JumbotronBanner from "../components/JumbotronBanner";
import About from "../sections/About";
import OurWork from "../sections/OurWork";

const Home = () => {
  return (
    <div>
      <StaticNavbar />
      <JumbotronBanner />
      <About />
      <OurWork />
    </div>
  )
}

export default Home;
