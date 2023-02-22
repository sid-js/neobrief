import { Markup } from "interweave";
import React, { useState } from "react";
import { HiBolt } from "react-icons/hi2";
import { polyfill } from "interweave-ssr";

polyfill();

const Hero = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [category, setCategory] = useState("Web");

  async function runPrompt() {
    setShowResult(false);
    setLoading(true);
    try {
      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Generate a one sentence ${category}  design brief by a fake randomized unique business name and their industry.`,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setLoading(false);
      setShowResult(true);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      setResult("Error occured while generating, please try again.");
    }
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 font-urbanist">
      <div className="px-2 md:px-8 mx-auto flex flex-col items-center">
        <h2 className="text-gray-90000 text-4xl lg:text-6xl font-bold text-center mb-2 md:mb-3">
          Challenge Your Design Skills
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-2xl text-center mx-auto">
          Practice with AI Generated Mock Project Briefs
        </p>
        <div className="flex items-center justify-center rounded-xl drop-shadow-lg border-2 border-yellow-300 bg-white py-2 px-4 lg:px-4 mt-4 w-max gap-6 text-2xl">
          <div className="flex flex-row w-max gap-2 justify-start items-center lg:text-xl text-sm">
            <p className="py-2 bg-transparent focus:outline-none w-max">
              Generate a fake design brief for a
            </p>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="bg-transparent focus:outline-none font-bold text-black"
            >
              <option value="Web">Website</option>
              <option value="Logo">Logo</option>
              <option value="Banner">Banner</option>
            </select>
            
          </div>
          <button
              disabled={loading}
              className="hidden md:flex font-medium text-xl px-4 my-2 py-3  flex-row gap-2 items-center justify-center text-white bg-yellow-400 w-max rounded-lg group hover:text-black"
              onClick={runPrompt}
            >
              <HiBolt className="group-hover:scale-150 transition duration-150" />
              Generate with AI
            </button>
        </div>
        <button
          disabled={loading}
          className="flex font-medium text-xl md:hidden my-2 py-3  flex-row gap-2 items-center justify-center bg-yellow-400 w-full rounded-lg group hover:text-amber-600"
          onClick={runPrompt}
        >
          <HiBolt className="group-hover:scale-150 transition duration-200" />
          Generate using AI
        </button>
        {(loading || showResult) && (
          <div className="bg-white text-xl px-6 py-6 my-4 rounded-lg w-full md:w-4/5 lg:w-3/5  font-urbanist font-semibold drop-shadow-lg">
            {showResult ? (
              <div>
                <h1 className="font-bold text-2xl my-2">Generated brief:</h1>
                <p className="font-medium">{result}</p>
              </div>
            ) : (
              "Generating Brief.."
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
