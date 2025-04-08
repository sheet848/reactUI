import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <div className="h-screen w-64 bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tic-tac-toe" className="block py-2 px-4 rounded hover:bg-gray-700">
            Tic Tac Toe
          </Link>
        </li>
        <li>
          <Link to="/dark-mode" className="block py-2 px-4 rounded hover:bg-gray-700">
            DarkMode
          </Link>
        </li>
        <li>
          <Link to="/progress-bar" className="block py-2 px-4 rounded hover:bg-gray-700">
            Progress Bar
          </Link>
        </li>
        <li>
          <Link to="/toast" className="block py-2 px-4 rounded hover:bg-gray-700">
            Toast
          </Link>
        </li>
        <li>
          <Link to="/countdown-timer" className="block py-2 px-4 rounded hover:bg-gray-700">
            Countdown Timer
          </Link>
        </li>
        <li>
          <Link to="/password-generator" className="block py-2 px-4 rounded hover:bg-gray-700">
            Password Generator
          </Link>
        </li>
        <li>
          <Link to="/stepper" className="block py-2 px-4 rounded hover:bg-gray-700">
            Stepper
          </Link>
        </li>
        <li>
          <Link to="/memory-game" className="block py-2 px-4 rounded hover:bg-gray-700">
            Memory Game
          </Link>
        </li>
        <li>
          <Link to="/grid-lights" className="block py-2 px-4 rounded hover:bg-gray-700">
            Grid Lights
          </Link>
        </li>
        <li>
          <Link to="/otp-login" className="block py-2 px-4 rounded hover:bg-gray-700">
            OTP Login
          </Link>
        </li>
        <li>
          <Link to="/excel" className="block py-2 px-4 rounded hover:bg-gray-700">
            Excel
          </Link>
        </li>
        <li>
          <Link to="/drag-drop" className="block py-2 px-4 rounded hover:bg-gray-700">
            Drag and Drop
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar
