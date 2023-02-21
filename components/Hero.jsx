import { Markup } from "interweave";
import React, { useState } from "react";
import { HiBolt } from "react-icons/hi2";
import { polyfill } from "interweave-ssr";

polyfill()

const Hero = () => {
  const [result, setResult] = useState();

  async function runPrompt() {
    try {
      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Generate a very short fake design brief for a Website with random client name and format the text in HTML",
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
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 font-urbanist">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex flex-col items-center">
        <h2 className="text-gray-90000 text-3xl lg:text-6xl font-bold text-center mb-2 md:mb-3">
          Challenge Your Design Skills
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-2xl text-center mx-auto">
          Explore our collection of mock design briefs.
        </p>
        <div className="flex items-center justify-center rounded-xl drop-shadow-lg border-2 border-yellow-300 bg-white p-2 px-10 mt-4 w-max text-2xl">
          <div className="flex flex-row w-full gap-2 justify-center">
            <input
              type="text"
              value="Generate a fake design brief for a"
              placeholder="Enter text here"
              className="py-4 bg-transparent focus:outline-none w-[360px]"
            />
            <select className="bg-transparent focus:outline-none font-bold text-black">
              <option value="option1">Website</option>
              <option value="option2">Logo</option>
              <option value="option3">Banner</option>
            </select>
            <button
              className="ml-4 flex flex-row gap-2 items-center text-yellow-400 rounded-full group hover:text-amber-600"
              onClick={runPrompt}
            >
              <HiBolt className="group-hover:scale-150 transition duration-200" />
              Generate
            </button>
          </div>
        </div>
        <div className="bg-white text-xl px-6 py-6 my-4 rounded-lg w-full prose prose-md font-urbanist drop-shadow-lg">
          {result && <Markup content={result} />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
