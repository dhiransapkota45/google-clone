import React from "react";
import Input from "./Input";

const LandingPage = () => {
  const imageLink = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png`;
  return (
    <div className=" h-screen">
      <div className=" h-4/5 flex flex-col justify-center items-center ">
        <img className=" w-60" src={imageLink} alt="googleLogo" />
        <Input width={80}/>
        <div className="p-4 flex flex-wrap justify-center">
          <button className=" bg-slate-800 text-white  hover:bg-slate-500 duration-300 text-md font-semibold  p-2 rounded-md mr-4 mt-4">
            Google Search
          </button>
          <button className="bg-slate-800 text-white hover:bg-slate-500 duration-300 text-md font-semibold  p-2 rounded-md ml-4 mt-4">
            I'm feeling lucky
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
