import React, { useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularCT = ({ initialMinutes = 1 }) => {

    const totalSeconds = initialMinutes * 60;
    const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning && secondsLeft > 0) {
            timerRef.current = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    useEffect(() => {
        if (secondsLeft <= 0) {
            setIsRunning(false);
            clearInterval(timerRef.current);
        }
    }, [secondsLeft]);

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        clearInterval(timerRef.current);
        setSecondsLeft(totalSeconds);
        setIsRunning(false);
    };

    const percentage = (secondsLeft / totalSeconds) * 100;
    const formatTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>Countdown Circle</h2>
                <div style={{ width: 200, margin: '20px auto' }}>
                    <CircularProgressbar
                        value={percentage}
                        text={formatTime(secondsLeft)}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#00bcd4',
                            trailColor: '#333',
                            backgroundColor: '#222',
                        })}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button onClick={handleStart} disabled={isRunning}>Start</button>
                    <button onClick={handlePause} disabled={!isRunning}>Pause</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default CircularCT