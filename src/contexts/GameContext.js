import React, { createContext, useState, useEffect, useContext } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  const [keysPressed, setKeyPressed] = useState(null)
  const [event, setEvent] = useState(null)
  const [tick, setTick] = useState(0)
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      let codeValue = event.code;
      setEvent(event)
      setKeyPressed(codeValue)
      setTick(tick + 1)
    }, false);
  
    document.addEventListener('keyup', (event) => {
      setEvent(null)
      setKeyPressed(null)
      setTick(tick + 1)
    }, false);
  }, [])
  
  return (
    <GameContext.Provider
      value={{
        setKeyPressed,
        keysPressed,
        event,
        tick
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
export default GameContextProvider
