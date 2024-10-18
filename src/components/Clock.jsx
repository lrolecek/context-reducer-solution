import {useReducer} from 'react'


const clockReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HOUR': {
      return {
        ...state,
        hours: state.hours + 1
      }
    }
    case 'ADD_MINUTE': {
      return {
        ...state,
        minutes: state.minutes + 1
      }
    }
    case 'CHANGE_TIMEZONE': {
      return {
        ...state,
        timeZone: action.timeZone
      }
    }
    case 'RESET_CLOCK': {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        timeZone: 0,
      }
    }
    default: {
      return state
    }
  }
}


function Clock() {

  const [clock, dispatch] = useReducer(clockReducer, {
    hours: 9,
    minutes: 37,
    seconds: 39,
    timeZone: 2,
  })

  return (
    <>
      <h2>Clock: {clock.hours}:{clock.minutes}:{clock.seconds} (+{clock.timeZone} timezone)</h2>

      <button onClick={() => { dispatch({type: 'ADD_HOUR'}) }}>Add hour</button>
      <button onClick={() => { dispatch({type: 'ADD_MINUTE'}) }}>Add minute</button>
      <button onClick={() => { dispatch({type: 'RESET_CLOCK'}) }}>Reset</button>

      <button onClick={() => { dispatch({type: 'CHANGE_TIMEZONE', timeZone: 3}) }}>Timezone 3</button>
      <button onClick={() => { dispatch({type: 'CHANGE_TIMEZONE', timeZone: 5}) }}>Timezone 5</button>
      <button onClick={() => { dispatch({type: 'CHANGE_TIMEZONE', timeZone: 7}) }}>Timezone 7</button>

    </>
  );
}

export default Clock;