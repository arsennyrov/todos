import React from 'react';
 
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input 
            ref={ref}
            className='w-[100%] py-[5px] px-[15px] my-[5px] border-2 
                    border-teal-700 rounded-md' 
                    {...props} />
    );
});

export default MyInput;