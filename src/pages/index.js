import React from "react"
import StaticNavbar from '../components/StaticNavbar';
import JumbotronBanner from "../components/JumbotronBanner";

const Home = () => {
  return (
    <div>
      <StaticNavbar />
      <JumbotronBanner />
      <p>Hello There</p>
    </div>
  )
}

export default Home;
