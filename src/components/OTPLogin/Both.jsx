import React, { useState } from 'react'
import LoginForm from './LoginForm';
import OTPLogin from './OTPLogin';

const Both = () => {

    const [step, setStep] = useState("phone");
    const [phone, setPhone] = useState("");
    const [verified, setVerified] = useState(false);

    const handlePhoneSubmit = (enteredPhone) => {
        setPhone(enteredPhone);
        setStep("otp");
        console.log("Sending OTP to:", enteredPhone);
        // Simulate OTP send here
    };

    const handleOtpVerify = (otp) => {
        console.log("Entered OTP:", otp);
        if (otp === "1234") {
            setVerified(true);
        } else {
            alert("❌ Incorrect OTP. Try again.");
        }
    };

    return (
        <>
            <div style={{ padding: 40, textAlign: 'center' }}>
                <h2>🚀 React OTP Login (Phone Only)</h2>
                {verified ? (
                    <h3>✅ OTP Verified! Welcome, {phone}!</h3>
                ) : step === "phone" ? (
                    <LoginForm onNext={handlePhoneSubmit} />
                ) : (
                    <OTPLogin phone={phone} onVerify={handleOtpVerify} />
                )}
            </div>
        </>
    )
}

export default Both