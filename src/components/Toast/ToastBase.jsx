import React from 'react'
import ToastContainer from './ToastContainer'

const ToastBase = () => {
    return (
        <>
            <ToastContainer />
            <div className="app">
                <button onClick={() => window.toast("This is an info toast", "info")}>Show Info</button>
                <button onClick={() => window.toast("This is a success toast", "success")}>Show Success</button>
                <button onClick={() => window.toast("This is an error toast", "error")}>Show Error</button>
            </div>
        </>
    )
}

export default ToastBase