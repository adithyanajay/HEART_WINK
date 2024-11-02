"use client";

import { useState } from "react";
import React from "react";
import { RoundHeart } from "../_assets";
import Image from "next/image";

interface FormData {
  yourName: string;
  yourDOB: string;
  partnerName: string;
  partnerDOB: string;
}

function Page() {
  const [showResult, setShowResult] = useState(false);

  const [responseData, setResponseData] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    yourDOB: "",
    partnerName: "",
    partnerDOB: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const backButtonClick = () => {
    setShowResult(false);
    setResponseData(null);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.yourName === "" ||
      formData.yourDOB === "" ||
      formData.partnerName === "" ||
      formData.partnerDOB === ""
    ) {
      return;
    }
    try {
      const response = await fetch("/api/cosmic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // Log the full response

      setResponseData(data);
      setShowResult(true);

      setFormData({
        yourName: "",
        yourDOB: "",
        partnerName: "",
        partnerDOB: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // percentage
  const randomNum = Math.floor(Math.random() * (100 - 60 + 1)) + 60;

  return (
    <div className="cosmic flex justify-center items-center h-screen">
      {!showResult ? (
        <form
          className="shadow shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main p-10 rounded-md "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row justify-center">
            <div className="left flex flex-col justify-center items-center">
              <input
                type="text"
                name="yourName"
                placeholder="Your Name"
                className="bg-red-300 text-white text-center py-2 px-4 rounded-lg focus:outline-none text-sm mb-7 w-11/12"
                value={formData.yourName}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="yourDOB"
                placeholder="Date of Birth"
                className="bg-red-300 text-white text-center py-2 px-4 rounded-lg focus:outline-none mb-7 w-11/12 text-sm"
                value={formData.yourDOB}
                onChange={handleChange}
                required
              />
            </div>
            <div className="divider w-20 m-auto mb-10">
              <Image src={RoundHeart} alt="divider" className="w-full" />
            </div>
            <div className="right flex flex-col justify-center items-center">
              <input
                type="text"
                name="partnerName"
                placeholder="Partner's Name"
                className="bg-red-300 text-white text-center py-2 px-4 rounded-lg focus:outline-none mb-7 w-11/12 text-sm"
                value={formData.partnerName}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="partnerDOB"
                placeholder="Partner's Date of Birth"
                className="bg-red-300 text-white text-center py-2 px-4 rounded-lg focus:outline-none mb-7 w-11/12 text-sm"
                value={formData.partnerDOB}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-10 text-center shadow shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main p-10 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold m-auto text-white mb-10">
            Result
          </h2>
          <h1 className="text-lg md:text-2xl font-bold text-white">
            {responseData.message}
          </h1>
          <div className="content flex flex-col md:flex-row justify-center  items-center">
            <div className="left md:w-2/6">
              <p className="text-sm md:text-lg font-bold text-white b">
                Your Name: {responseData.yourName}
              </p>
              <p className="text-sm md:text-lg font-bold text-white">
                Your Sign: {responseData.yourSign}
              </p>
            </div>

            <div className="flex justify-center items-center divider w-32  h-32 m-auto mb-10 rounded-full bg-red_sec mt-10">
              <h1 className="text-white text-5xl ">{randomNum}%</h1>
            </div>

            <div className="right md:w-2/6">
              <p className="text-sm md:text-lg font-bold text-white">
                Partner's Name: {responseData.partnerName}
              </p>
              <p className="text-sm md:text-lg font-bold text-white">
                Partner's Sign: {responseData.partnerSign}
              </p>
            </div>
          </div>

          <button
              className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-600 transition"
                onClick={backButtonClick}
            >
              Back
            </button>
        </div>
      )}
    </div>
  );
}

export default Page;
