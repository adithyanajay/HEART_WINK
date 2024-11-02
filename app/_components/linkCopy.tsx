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
                    <p className="text-white">Your generated link:</p>
                    <p className="text-blue-300">{link}</p>
                    <button
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-2"
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
