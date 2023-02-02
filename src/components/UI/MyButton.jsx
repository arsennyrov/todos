import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='px-3 h-[5vh] align-middle text-[1rem] 
        text-justify border-2 border-gray-300 rounded-md text-white
        bg-sky-500 hover:md:bg-sky-700'>
            {children}
        </button>
    );
};

export default MyButton; 