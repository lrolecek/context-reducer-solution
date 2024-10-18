import './App.css'

import { CounterProvider } from './context/CounterContext'

import First from './components/First'
import Second from './components/Second'
import Clock from './components/Clock'

function App() {

  return (
    <>
      <CounterProvider>

        <Clock />


        <First />
        <Second />

      </CounterProvider>
    </>
  )
}

export default App
