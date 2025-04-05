import React, { useState, useEffect } from 'react'
import CountTimerControl from './CountTimerControl';
import CircularCT from './CircularCT';

const CountdownTimer = ({ minutes = 1, onComplete }) => {

    const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

    useEffect(() => {
        if (secondsLeft <= 0) {
            if (onComplete) onComplete(); // optional callback
            return;
        }

        const interval = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); // cleanup on unmount or re-render
    }, [secondsLeft, onComplete]);

    // Helper to format MM:SS
    const formatTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <>
            <div style={styles.container}>
                <h2>Countdown Timer</h2>
                <div style={styles.timer}>{formatTime(secondsLeft)}</div>
            </div>

            <CountTimerControl />
            <CircularCT />
        </>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    timer: {
        fontSize: '48px',
        fontWeight: 'bold',
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px',
        borderRadius: '12px',
        width: '150px',
        margin: '0 auto',
    },
};

export default CountdownTimer