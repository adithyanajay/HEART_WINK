import Link from "next/link";
import React from "react";

interface LinkDisplayProps {
    link: string | null;
}

const LinkDisplay: React.FC<LinkDisplayProps> = ({ link }) => {
    const handleCopyLink = () => {
        if (link) {
            navigator.clipboard.writeText(link)
                .then(() => {
                    alert("Link copied to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy the link: ", err);
                });
        }
    };

    return (
        <div className="mt-4 text-center">
            {link ? (
                <>
                    <p className="text-white text-xl md:text-3xl">Share this link to prank your friends:</p>
                    <p className="text-blue-300 mt-5"><Link href={link}>{link}</Link></p>
                    <button
                        className="mt-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition "
                        onClick={handleCopyLink}
                    >
                        Copy Link
                    </button>
                </>
            ) : (
                <p className="text-gray-400">No link generated yet.</p>
            )}
        </div>
    );
};

export default LinkDisplay;
