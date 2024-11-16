import React from 'react';

// interface SideHeadingProps {
//   text: string;
//   postion: string;
// }

function SideHeading({ text, postion }) {
    const heading = text.split('');

    return (

    <div className={`heading flex flex-col ${postion}-0 absolute m-5 z-10`}>
        {
            heading.map((letter, index) => {
                return (
                    <span className={`text-white text-2xl lg:text-3xl uppercase`} key={index}>{letter}</span>
                );
            })
        }
    </div>
  );
}

export default SideHeading;