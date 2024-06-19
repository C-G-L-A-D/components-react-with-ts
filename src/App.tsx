import React, { useState } from 'react'
import useInterval from './hooks/useInterval'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  // 每隔1秒执行一次增加count的函数
  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
