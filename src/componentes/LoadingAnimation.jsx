import React from 'react'

const LoadingAnimation = () => {
    return (
        <div className="loader-container fixed top-0 left-0 w-full h-full bg-black/50 flex
    justify-center  items-center z-[9999]">
            <div className="loader  border-[3px] border-[#f3f3f3]  border-t-[3px] border-t-[#3498db] rounded-[50%] w-[50px] h-[50px] animate-[spin_2s_linear_infinite]"></div>
        </div>
    )
}

export default LoadingAnimation