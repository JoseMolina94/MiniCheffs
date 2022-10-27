import React, { useEffect, useState } from "react";
import cheff from "../../assets/MiniCheff.gif";

export const Cheff = props => {
  const [ position, setPosition ] = useState({})
  
  useEffect(() => {
    setPosition({
      bottom: 20,
      left: 0
    })
  }, [])
  
  return (
    <img
      src={cheff}
      alt="Cheff"
      style={{
        width: '64px',
        height: '64px',
        position: 'absolute',
        bottom: position?.bottom,
        left: position?.left,
        zIndex: 1
      }}
    />
  )
}
