import React, { useContext } from "react";
import Sample from "./sample.json";
import { stateContext } from "../contexts/State";

const Result = () => {
  const context = useContext(stateContext);
  const { loader, finalData } = context;
  return (
    <>
      {loader ? (
        <div>Loading....</div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="w-3/5">
            {finalData &&
              finalData.results.map((data) => {
                return (
                  <div className=" my-6">
                    <div className="text-gray-500 text-sm font-medium my-1">
                      {data.link}
                    </div>
                    <div className="text-xl text-blue-600 cursor-pointer hover:underline">
                      <a target="_blank" href={data.link}>
                        {data.title}
                      </a>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {data.description}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
