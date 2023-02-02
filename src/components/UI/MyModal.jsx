import React, { useState } from "react";

export default function MyModal({ children, showModal, setShowModal }) {
    if (!showModal) return null;

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                >
                </div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-0 sm:flex">
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                    {children}
                                </p>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}    


// import React from 'react';

// const MyModal = ({children, visible, setVisible}) => {

//     let rootClasses = 'w-[100vw] h-[100vh] fixed bg-[rgb(0,0,0,.5)]'
//     const activeClasses = 'px-25 flex justify-center items-center bg-white inset-48'
//     // if (visible) {
//     //     rootClasses = rootClasses+' '+activeClasses
//     // }
//     return (
//         <div className={rootClasses}>
//             <div className={activeClasses}>
//                 {children}
//             </div>
//         </div>
//     );
// };    

// export default MyModal;  