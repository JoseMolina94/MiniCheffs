import React, { useEffect, useState, useRef, useContext } from "react";
import cheffImg from "../../assets/MiniCheff.gif";
import cheffImgRun from "../../assets/MiniCheffRun.gif";
import {GameContext} from "../../contexts/GameContext";

export const Cheff = props => {
  const [ position, setPosition ] = useState({})
  const [ direction, setDirection ] = useState('scaleX(1)')
  const [ currentStateAnimation, setCurrentStateAnimation ] = useState(cheffImg)
  const cheffRef = useRef(null)
  const { keysPressed, event } = useContext(GameContext)
  
  useEffect(() => {
    setPosition({
      bottom: 20,
      left: 0
    })
  }, [])
  
  useEffect(() => {
    if (cheffRef?.current) {
      if (keysPressed) {
        switch (keysPressed) {
          case 'KeyD':
            setPosition({
              bottom: 20,
              left: position.left + 10
            })
            setCurrentStateAnimation(cheffImgRun)
            setDirection('scaleX(1)')
            break;
          case 'KeyA':
            setPosition({
              bottom: 20,
              left: position.left - 10,
            })
            setCurrentStateAnimation(cheffImgRun)
            setDirection('scaleX(-1)')
            break;
          default: break;
        }
      } else {
        setCurrentStateAnimation(cheffImg)
      }
    }
  }, [cheffRef, event, keysPressed])
  
  return (
    <img
      ref={cheffRef}
      src={currentStateAnimation}
      alt="Cheff"
      style={{
        width: '128px',
        height: '128px',
        position: 'absolute',
        bottom: position?.bottom,
        left: position?.left,
        zIndex: 1,
        transform: direction
      }}
    />
  )
}
