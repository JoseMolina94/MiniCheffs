import React, { useEffect, useState, useRef, useContext } from "react";
import cheffImg from "../../assets/MiniCheff.gif";
import cheffImgRun from "../../assets/MiniCheffRun.gif";
import {GameContext} from "../../contexts/GameContext";

export const Cheff = props => {
  const {
    controls = {
      left: 'KeyA',
      right: 'KeyD'
    }
  } = props
  const [ position, setPosition ] = useState({})
  const [ direction, setDirection ] = useState('scaleX(1)')
  const [ currentStateAnimation, setCurrentStateAnimation ] = useState(cheffImg)
  const cheffRef = useRef(null)
  const { keysPressed, event, tick } = useContext(GameContext)
  
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
          case controls.right:
            setPosition({
              bottom: 20,
              left: position.left + 20
            })
            setCurrentStateAnimation(cheffImgRun)
            setDirection('scaleX(1)')
            break;
          case controls.left:
            setPosition({
              bottom: 20,
              left: position.left - 20,
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
  }, [cheffRef, event, keysPressed, tick])
  
  return (
    <img
      ref={cheffRef}
      src={currentStateAnimation}
      alt="Cheff"
      style={{
        width: '128px',
        height: '128px',
        position: 'absolute',
        ...position,
        zIndex: 1,
        transform: direction
      }}
    />
  )
}
