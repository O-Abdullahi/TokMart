import React from "react";
import Topsection from "../components/home/topSection/Topsection";
import MiddleSection from "../components/home/middleSection/MiddleSection";
import BaseSection from "../components/home/baseSection/BaseSection";
import {useNavigate} from "react-router-dom"
const Home = () => {
  return (
    <>
      <Topsection />
      <MiddleSection />
      <BaseSection />
    </>
  );
};

export default Home;
