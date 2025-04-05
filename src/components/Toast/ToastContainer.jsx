import React, { useState, useCallback } from 'react'
import Toast from './Toast'
import { createPortal } from 'react-dom'

const ToastContainer = () => {

    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = "info") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => removeToast(id), 3000); // Auto dismiss in 3 sec
    }, []);

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    // Expose globally (you can also use context here)
    window.toast = addToast;

    return createPortal(
        <><div className="toast-container">
            {toasts.map((t) => (
                <Toast key={t.id} {...t} onClose={removeToast} />
            ))}
        </div>
        </>,
            document.body
    )
}

export default ToastContainer