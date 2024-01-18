import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  const [count, setCount] = useState(0)
  const [on, setON] = useState(true)

  // 首次加载和每次渲染之后都会执行 useEffect
  useEffect(() => {
    console.log('document title effect is running', count)

    document.title = `点击了 ${count} 次`
    return () => {}
  }, [count])

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count} 👍
      </button>
      <button
        onClick={() => {
          setON(!on)
        }}
      >
        {on ? '开启' : '关闭'}
      </button>
    </>
  )
}

export default LikeButton
