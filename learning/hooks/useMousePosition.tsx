import React, { useEffect, useState } from 'react'

function useMousePosition() {
  const [positions, setPositions] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('add effect', positions.x)
    const updatMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updatMouse)
    return () => {
      document.removeEventListener('click', updatMouse)
    }
  }, [])

  return positions
}

export default useMousePosition
