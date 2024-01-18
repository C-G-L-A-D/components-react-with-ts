import React, { createContext } from 'react'
import logo from './logo.svg'
import './App.css'

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

const ThemeContext = createContext(themes.light)

function App() {
  return (
    <div className='App'>
      <ThemeContext.Provider value={themes.light}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
