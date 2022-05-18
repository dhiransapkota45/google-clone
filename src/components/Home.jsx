import React from "react";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import { stateContext } from "../contexts/State";
import { useContext } from "react";

const Home = () => {
  const context = useContext(stateContext);
  const { finalData } = context;
  return <div>{!finalData ? <LandingPage /> : <HomePage />}</div>;
};

export default Home;
