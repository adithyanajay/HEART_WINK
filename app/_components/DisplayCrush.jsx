"use client";

import React, { useEffect, useState } from "react";

const DisplayCrush = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      const crushId = localStorage.getItem("crushTrackerLink");
      if (!crushId) return;

      try {
        const response = await fetch(`/api/crush/submit/${crushId}`);
        if (!response.ok) throw new Error("Failed to fetch submissions");

        const data = await response.json();

        const extractedSubmissions = data.flatMap(entry =>
          entry.submissions.map(submission => ({
            friendName: submission.friendName,
            crushName: submission.crushName,
          }))
        );

        setSubmissions(extractedSubmissions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-10/12 md:w-full max-w-2xl m-auto mt-10 bg-red_main p-5 rounded-md shadow-lg">
      <h2 className="text-2xl text-white mb-4 text-center">Crush Submissions</h2>
      <table className="min-w-full bg-white text-left">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="py-2 px-4">Friend Name</th>
            <th className="py-2 px-4">Crush Name</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{submission.friendName}</td>
              <td className="py-2 px-4">{submission.crushName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCrush;
