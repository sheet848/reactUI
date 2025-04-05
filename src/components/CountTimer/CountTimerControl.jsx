import React, { useState, useEffect, useRef } from 'react'

const CountTimerControl = ({ initialMinutes = 1 }) => {

    const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    // Format seconds to MM:SS
    const formatTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    // Effect to handle countdown logic
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
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    }, [secondsLeft]);

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        clearInterval(timerRef.current);
        setSecondsLeft(initialMinutes * 60);
        setIsRunning(false);
    };

    return (
        <>
            <div style={styles.container}>
                <h2>Countdown with Controls</h2>
                <div style={styles.timer}>{formatTime(secondsLeft)}</div>
                <div style={styles.controls}>
                    <button onClick={handleStart} disabled={isRunning}>Start</button>
                    <button onClick={handlePause} disabled={!isRunning}>Pause</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial',
    },
    timer: {
        fontSize: '48px',
        margin: '20px 0',
        background: '#222',
        color: '#fff',
        padding: '15px 30px',
        borderRadius: '10px',
        display: 'inline-block',
    },
    controls: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
};

export default CountTimerControl