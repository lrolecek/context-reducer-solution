import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext'

function First() {

  const {count, dispatch} = useContext(CounterContext)

  return (
    <div style={{border: '5px solid dodgerblue', padding: 10, margin: 10}}>
      <h1>First: {count}</h1>

      <button onClick={() => { dispatch({type: 'INCREASE'}) }}>+1</button>

      <button onClick={() => { dispatch({type: 'ADD', amount: 100}) }}>+100</button>
      <button onClick={() => { dispatch({type: 'ADD', amount: 37}) }}>+37</button>
      <button onClick={() => { dispatch({type: 'ADD', amount: 42}) }}>+42</button>


    </div>
  );
}

export default First;