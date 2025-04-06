import React, { useState } from 'react'

const LoginForm = ({ onNext }) => {

    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (/^\d{10}$/.test(phone)) {
            onNext(phone); // move to OTP step
        } else {
            alert("Please enter a valid 10-digit phone number");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>📱 Enter Phone Number</h3>
                <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    maxLength={10}
                    style={{ padding: 10, fontSize: 16 }}
                />
                <br />
                <button type="submit" style={{ marginTop: 20 }}>Send OTP</button>
            </form>
        </>
    )
}

export default LoginForm