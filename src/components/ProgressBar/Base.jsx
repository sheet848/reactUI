import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const Base = () => {

    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    };

    const decreaseProgress = () => {
        setProgress((prev) => (prev > 0 ? prev - 10 : 0));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl mb-4">React Progress Bar</h1>
                <ProgressBar progress={progress} />
                <div className="mt-4">
                    <button onClick={decreaseProgress} className="px-4 py-2 bg-red-500 text-black rounded m-2">
                        - Decrease
                    </button>
                    <button onClick={increaseProgress} className="px-4 py-2 bg-green-500 text-black rounded m-2">
                        + Increase
                    </button>
                </div>
            </div>
        </>
    )
}

export default Base