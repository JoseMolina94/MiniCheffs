import React from "react";

export const GameArea = props => {
  const {
    children,
    w,
    h
  } = props

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        borderWidth: '1px'
      }}
    >
      {
        children
      }
    </div>
  )
}
