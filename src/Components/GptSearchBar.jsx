import React, { useRef } from "react";
import geminiAI from "../Utils/Gemini";
import { API_OPTIONS } from "../Utils/constans";
import { useDispatch } from "react-redux";
import { addGptmovieResult } from "../Utils/Slices/gptSlices";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movieName) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&language=en-US&page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    return json.results.filter((movie) => movie.title === movieName);
  };

  const handleGeminiSearch = async () => {
    const userQuery = searchText.current.value;
    console.log(userQuery);

    if (!userQuery) {
      console.log("Please enter a search query.");
      return;
    }

    const moviePrompt = `Act as a movie recommendation system. The user is asking for movie suggestions based on the following query: "${userQuery}". Please provide a list of around 15 movies that match the query. The output should be a JSON object with a single key "movieTitles" that contains an array of movie titles as strings. Do not include any text, explanations, or code block formatting like \`\`\` before or after the JSON object and make sure you are giving only movies.`;

    try {
      const result = await geminiAI
        .getGenerativeModel({ model: "gemini-1.5-flash" })
        .generateContent(moviePrompt);

      const responseText = await result.response.text();

      const cleanedResponseText = responseText
        .replace(/```json|```/g, "")
        .trim();

      const parsedResponse = JSON.parse(cleanedResponseText);

      const geminiMovieList = parsedResponse.movieTitles;
      const promiseArray = geminiMovieList.map((movie) => searchMovie(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptmovieResult({
          movieNames: geminiMovieList,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error fetching or parsing data from Gemini API:", error);
      console.error("The API response might not be valid JSON:", error.message);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="bg-white p-4 m-4 col-span-9 font-medium text-lg"
          placeholder="What would you like to watch today?"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGeminiSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
