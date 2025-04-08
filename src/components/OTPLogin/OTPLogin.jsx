import React, { useEffect, useRef, useState } from 'react'

const OTPLogin = ({ phone, onVerify }) => {

    const length = 4;
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputs = useRef([]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        onVerify(enteredOtp);
    };

    useEffect(() => {
        if(inputs.current[0]) {
            inputs.current[0].focus();
        }
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>🔑 Enter OTP sent to {phone}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={el => inputs.current[i] = el}
                            value={digit}
                            onChange={e => handleChange(e.target.value, i)}
                            maxLength={1}
                            style={{
                                width: 40,
                                height: 50,
                                fontSize: 24,
                                textAlign: 'center',
                                borderRadius: 6,
                                border: '1px solid #ccc',
                            }}
                        />
                    ))}
                </div>
                <button type="submit" style={{ marginTop: 20 }}>Verify</button>
            </form>
        </>
    )
}

export default OTPLogin