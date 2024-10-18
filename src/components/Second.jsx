import {useContext, useState} from 'react'
import { CounterContext } from '../context/CounterContext'

function Second() {

  const {count, dispatch} = useContext(CounterContext)

  const [num, setNum] = useState(0)

  return (
    <div style={{border: '5px solid orange', padding: 10, margin: 10}}>
      <h1>Second: {count}</h1>

      <button onClick={() => { dispatch({type: 'DECREASE'}) }}>-1</button>
      <button onClick={() => { dispatch({type: 'RESET'}) }}>Reset</button>

      <hr />

      <input type="number" value={num} onChange={(e) => {setNum(e.target.value)}} />
      <button onClick={() => { dispatch({type: 'ADD', amount: Number(num)}) }}>Pridat</button>


    </div>
  );
}

export default Second;