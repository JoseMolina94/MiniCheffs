import React, { createContext, useState, useEffect, useContext } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  const [keysPressed, setKeyPressed] = useState(null)
  const [event, setEvent] = useState(null)
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      let keyValue = event.key;
      let codeValue = event.code;
      setEvent(event)
      // console.log("keyValue: " + keyValue);
      //  console.log("PRESS: " + codeValue);
      
      setKeyPressed(codeValue)
    }, false);
  
    document.addEventListener('keyup', (event) => {
      let keyValue = event.key;
      let codeValue = event.code;
      setEvent(null)
      // console.log("keyValue: " + keyValue);
      //  console.log("UP: " + codeValue);
      
      setKeyPressed(null)
    }, false);
  }, [])
  
  return (
    <GameContext.Provider
      value={{
        setKeyPressed,
        keysPressed,
        event
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
export default GameContextProvider
