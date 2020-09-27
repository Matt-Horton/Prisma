import React from "react"
import StaticNavbar from '../components/StaticNavbar';
import JumbotronBanner from "../components/JumbotronBanner";
import About from "../sections/About";

const Home = () => {
  return (
    <div>
      <StaticNavbar />
      <JumbotronBanner />
      <About />
    </div>
  )
}

export default Home;
