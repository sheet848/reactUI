import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                    className="h-full bg-blue-500 text-white text-center text-sm leading-6 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                >
                    {progress}%
                </div>
            </div>
        </>
    )
}

export default ProgressBar