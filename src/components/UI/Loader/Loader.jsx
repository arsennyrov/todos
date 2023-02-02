import React from 'react';

const Loader = () => {
    return (
        <div className='w-[100px] h-[100px] rounded-[50%] 
         border-l-[3px] border-t-[3px]
         border-sky-500 motion-safe:animate-spin'>
        </div>
    );
};

export default Loader;