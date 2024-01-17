import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HelloWorld message='hello, world' />
        <LikeButton />
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          Toggle Tracker
        </button>
        {/* app 加载渲染完成才渲染 MouseTracker 组件，剔除useEffect生命周期 */}
        {show && <MouseTracker />}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
