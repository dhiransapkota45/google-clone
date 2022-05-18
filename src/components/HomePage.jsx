import React, { useContext } from "react";
import Input from "./Input";
import Result from "./Result";

const HomePage = () => {
  const imageLink = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png`;
  
  return (
    <>
    <div className="w-screen flex flex-col">
      <div className="  flex flex-wrap items-center border-b border-gray-400 py-6 mt-8">
        <img className="w-40 ml-20 mr-20" src={imageLink} alt="" />
        <Input width={80} />
      </div>
      <Result />
      </div>
    </>
  );
};

export default HomePage;
