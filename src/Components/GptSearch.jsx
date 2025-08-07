import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggest from "./GptMovieSuggest";
import { LOGIN_BACKROUND } from "../Utils/constans";

const GptSearch = () => {
  return (
    <div>
      {/* GPT Search Bar
    GPT Movie Suggestion */}
      {/* <div className="absolute inset-0 bg-black/[0.4]"></div>{" "} */}
      <img
        src={LOGIN_BACKROUND}
        alt="Netflix Login Screen Background"
        className="w-full h-screen object-cover fixed -z-10"
      />
      <GptSearchBar />
      <GptMovieSuggest />
    </div>
  );
};

export default GptSearch;
