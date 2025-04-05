import React, { useState } from 'react'

const PasswordGenerator = () => {

    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        let chars = '';
        if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) chars += '0123456789';
        if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (!chars) {
            alert('Please select at least one character type!');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randIndex = Math.floor(Math.random() * chars.length);
            newPassword += chars[randIndex];
        }

        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <>
            <div style={styles.container}>
                <h2>Password Generator</h2>

                <div style={styles.controls}>
                    <label>
                        Length:
                        <input
                            type="number"
                            min="4"
                            max="64"
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                        />
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase((prev) => !prev)}
                        />
                        Include Uppercase
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={() => setIncludeLowercase((prev) => !prev)}
                        />
                        Include Lowercase
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers((prev) => !prev)}
                        />
                        Include Numbers
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols((prev) => !prev)}
                        />
                        Include Symbols
                    </label>

                    <button onClick={generatePassword}>Generate</button>
                </div>

                {password && (
                    <div style={styles.result}>
                        <input
                            type="text"
                            readOnly
                            value={password}
                            style={{ width: '100%' }}
                        />
                        <button onClick={copyToClipboard}>Copy</button>
                    </div>
                )}
            </div>
        </>
    )
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '10px',
        background: '#f2f2f2',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial',
    },
    controls: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    },
    result: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
    },
};

export default PasswordGenerator