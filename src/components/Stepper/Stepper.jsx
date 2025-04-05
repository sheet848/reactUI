import React, { useState } from 'react'

const steps = ['Step 1', 'Step 2', 'Step 3'];

const Stepper = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const prev = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const getContent = (step) => {
        switch (step) {
            case 0:
                return <div>Step 1 Content</div>;
            case 1:
                return <div>Step 2 Content</div>;
            case 2:
                return <div>Step 3 Content</div>;
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.stepHeader}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.step,
                                borderColor: index === currentStep ? '#3498db' : '#ccc',
                                backgroundColor: index === currentStep ? '#3498db' : '#eee',
                                color: index === currentStep ? '#fff' : '#333',
                            }}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                <div style={styles.stepContent}>
                    {getContent(currentStep)}
                </div>

                <div style={styles.navigation}>
                    <button onClick={prev} disabled={currentStep === 0}>
                        Back
                    </button>
                    <button onClick={next} disabled={currentStep === steps.length - 1}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        fontFamily: 'Arial',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
    },
    stepHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    step: {
        flex: 1,
        textAlign: 'center',
        padding: '10px',
        marginRight: '5px',
        border: '2px solid',
        borderRadius: '8px',
    },
    stepContent: {
        minHeight: '120px',
        padding: '20px',
        background: '#fafafa',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Stepper