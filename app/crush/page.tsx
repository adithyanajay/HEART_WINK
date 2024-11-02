"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import LinkDisplay from "../_components/linkCopy";
import DisplayCrush from "../_components/DisplayCrush";

function Crush() {
    const [linkId, setLinkId] = useState<string>("");
    const [name, setName] = useState("");
    const [usedUser, setUsedUser] = useState(false);

    const handleNameState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;  
        setName(value);  
    };

    useEffect(() => {
        const storedId = localStorage.getItem("crushTrackerLink");
        const link = localStorage.getItem("link");
        if (storedId) {
            setUsedUser(true);
        }

        if (link) {
            setLinkId(link);
        }
    }, []); 

    const handleGenerateLink = async () => {
        try {
            if (name === "") {
                return;
            }
            console.log("running");
            const response = await fetch("/api/crush", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  
                },
                body: JSON.stringify({ name }),  
            });

            const data = await response.json();
            console.log(data);

            if (data.id) {
                const generatedLink = `${window.location.origin}/crush/submit/${data.id}`;
                setLinkId(generatedLink);
                localStorage.setItem("crushTrackerLink", data.id);
                localStorage.setItem("link", generatedLink); 

               
                setUsedUser(true);
            } else {
                console.error("Failed to generate link");
            }

            setName("");
        } catch (error) {
            console.error("Error generating link:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-full">
            {
                !usedUser ? (
                    <form className="mt-10 text-center shadow shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main p-10 rounded-md">
                        <h1 className="text-3xl top-20 text-white m-auto mb-10">
                            SECRET CRUSH DETECTOR
                        </h1>
                        <input
                            type="text"
                            name="yourName"
                            placeholder="Your Name"
                            className="bg-red-300 text-white text-center py-2 px-4 rounded-lg focus:outline-none text-sm mb-7 w-11/12"
                            value={name}
                            onChange={handleNameState}
                            required
                        />
                        <button
                            type="button"
                            className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-600 transition"
                            onClick={handleGenerateLink}
                        >
                            Generate link
                        </button>
                    </form>
                ) : (
                    <div className="text-center shadow shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main p-10 rounded-md mt-10"> 
                        <LinkDisplay link={linkId} />
                        <DisplayCrush />
                    </div>
                )
            }
        </div>
    );
}

export default Crush;
