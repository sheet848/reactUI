import React from 'react'

const Toast = ({ id, message, type, onClose }) => {
  return (
    <>
    <div className={`toast ${type}`}>
      <p>{message}</p>
      <button onClick={() => onClose(id)}>×</button>
    </div>
    </>
  )
}

export default Toast