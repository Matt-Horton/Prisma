import React from "react"
import StaticNavbar from '../components/StaticNavbar';
import JumbotronBanner from "../components/JumbotronBanner";
import About from "../sections/About";
import OurWork from "../sections/OurWork";
import Team from "../sections/Team";
import ContactUs from "../sections/ContactUs";

const Home = () => {
  return (
    <div>
      <StaticNavbar />
      <JumbotronBanner />
      <About />
      <OurWork />
      <Team />
      <ContactUs />
    </div>
  )
}

export default Home;
