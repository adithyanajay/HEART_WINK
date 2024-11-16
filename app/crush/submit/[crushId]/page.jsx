"use client";
import { RoundHeart } from "../../../_assets";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const [showResult, setShowResult] = useState(false);
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    yourName: "",
    yourDOB: "",
    partnerName: "",
    partnerDOB: "",
  });

  const backButtonClick = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const crushId = localStorage.getItem("crushTrackerLink");

    if (!crushId) {
      console.error("Crush ID not found in local storage");
      return;
    }

    try {
      const response = await fetch(`/api/crush/submit/${crushId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          friendName: formData.yourName,
          crushName: formData.partnerName,
        }),
      });

      const data = await response.json();
      setUsername(data.name);
      if (response.ok) {
        setShowResult(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting friend name:", error);
    }
  };

  return (
    <div className="cosmic flex justify-center items-center h-screen">
      {!showResult ? (
        <form
          className="text-center shadow shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl top-20 text-white m-auto mb-10">
            Enter the details to know the match:
          </h1>
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
          <div className="divider w-20 m-auto mb-10">
            <Image src={RoundHeart} alt="divider" className="w-full" />
          </div>
          <h1 className="text-xl md:text-5xl font-bold m-auto text-white mb-10">It was a prank!!!</h1>
          <p className="text-xl md:text-3xl font-bold m-auto text-white mb-10">
            {username} got to know your crush
          </p>
          <h2 className="text-xl md:text-4xl font-bold m-auto text-white mb-10">BEST OF LUCK!</h2>
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
