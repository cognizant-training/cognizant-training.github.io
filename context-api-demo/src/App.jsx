import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

function App() {

  return (
    <CounterProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
      <CounterDisplay />
      <CounterControls />


      </div>
    </CounterProvider>
  )
}

export default App
