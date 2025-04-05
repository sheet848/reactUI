import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import TicTacToe from './components/TicTacToe/TicTacToe'
import DarkMode from './components/DarkMode/DarkMode'
import Bread from './components/Breadcrumb/Bread'
import Base from './components/ProgressBar/Base'
import CountdownTimer from './components/CountTimer/CountdownTimer'
import ToastBase from './components/Toast/ToastBase'
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator'
import Stepper from './components/Stepper/Stepper'
import Memory from './components/Memory/Memory'
import GridLights from './components/GridLights/GridLights'

function App() {

  const handleFinish = () => {
    alert('Countdown Finished!');
  };

  return (
    <>
      <Router>
        <div className="flex">
          <SideBar />
          <div className="flex-1 p-5">
            <Bread />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/dark-mode" element={<DarkMode />} />
              <Route path='/progress-bar' element={<Base />} />
              <Route path='/toast' element={<ToastBase />} />
              <Route path='/countdown-timer' element={<CountdownTimer minutes={0.1} onComplete={handleFinish} />} />
              <Route path='/password-generator' element={<PasswordGenerator />} />
              <Route path='/stepper' element={<Stepper />} />
              <Route path='/memory-game' element={<Memory />}/>
              <Route path='/grid-lights' element={<GridLights />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
