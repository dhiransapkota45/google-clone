import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { stateContext } from "../contexts/State";
import { useContext } from "react";

const Input = ({ width }) => {
  const context = useContext(stateContext);
  const { setLoader, setFinalData, searchData, setSearchData } = context;
  const onchangeHandler = (event) => {
    setSearchData(event.target.value);
  };

  const onkeypressHandler = async (e) => {
    if (e.key === "Enter") {

      //since the input that has space in between has to be replaced with + in final search url
      let finalData = searchData.replace(/ /g, "+");
      const lastCharacter = finalData.slice(-1);
      if (lastCharacter === "+") {
        finalData = finalData.slice(0, -1);
      }
      
      setLoader(true)
      const responseRaw = await fetch(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=${finalData}`,
        {
          method: "GET",
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            "X-RapidAPI-Key": `${process.env.REACT_APP_KEY}`,
          },
        }
      );
      const response = await responseRaw.json();
      console.log(response);
      setFinalData(response);
      setLoader(false)
    }
  };
  return (
    <div className="flex items-center border border-gray-400 rounded-3xl p-2 mt-8">
      <FaSearch className=" text-gray-500 ml-4" />
      <input
        value={searchData}
        onChange={onchangeHandler}
        onKeyPress={onkeypressHandler}
        className={`focus:outline-none mx-6 w-${width}`}
        type="text"
      />
      <MdKeyboardVoice className="text-gray-500 text-xl mr-4" />
    </div>
  );
};

export default Input;
