import {useReducer, createContext} from 'react'

export const CounterContext = createContext()

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return state + 1
    }
    case 'DECREASE': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
    case 'ADD': {
      return state + action.amount
    }
    default: {
      throw new Error('Neznama akce', action.type)
    }
  }
}


export function CounterProvider({children}) {

  const [count, dispatch] = useReducer(countReducer, 0)

  return (
    <CounterContext.Provider value={{
      count,
      dispatch
    }}>
      {children}
    </CounterContext.Provider>
  )
}