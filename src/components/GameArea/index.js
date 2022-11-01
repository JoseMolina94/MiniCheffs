import React, {useEffect, useContext} from "react";

export const GameArea = props => {
  const {
    children,
    w,
    h
  } = props
  
  const renderChildren = () => {
    if (typeof children === "function") {
      //console.log('Children Func')
      return children({
        size: { w, h }
      })
    } else {
      //console.log('Children Classic')
      return children
    }
  }
  
  return (
    <div
      style={{
        position: 'relative',
        height: h,
        width: w,
        borderWidth: '1px',
      }}
    >
      {
        renderChildren()
      }
    </div>
  )
}
