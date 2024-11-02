// components/LoveTrackerForm.tsx
'use client';

import { useState } from 'react';
import React from 'react';
import { RoundHeart } from '../_assets'; // Ensure this path is correct
import Image from 'next/image';

interface FormData {
    yourName: string;
    yourDOB: string;
    partnerName: string;
    partnerDOB: string;
}

function Page() { // Change 'page' to 'Page'
    const [formData, setFormData] = useState<FormData>({
        yourName: '',
        yourDOB: '',
        partnerName: '',
        partnerDOB: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            console.log('Success:', data);

            // Reset form after successful submission
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

    return (
        <div className="cosmic flex justify-center items-center h-screen">
            <form className="shadow-gray-700/30 w-10/12 md:w-full max-w-2xl m-auto min-h-40 bg-red_main" onSubmit={handleSubmit}>
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
                        type="submit" // Ensure the button type is set to "submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page; // Change 'page' to 'Page'
