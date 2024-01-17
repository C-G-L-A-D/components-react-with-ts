import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('add effect', position.x)

    // 修改鼠标坐标位置， MouseEvent 为内置的类型
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      // 没有清楚点击事件，每次渲染时都会重新调用，造成指数型调用次数增长
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', position.x)
      // 清除
      document.removeEventListener('click', updateMouse)
    }
  })
  console.log('before render', position.x)

  return (
    <div>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
    </div>
  )
}

export default MouseTracker
