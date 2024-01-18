import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/Button'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>hello world</h1>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href='https://www.baidu.com'>
          Hello baidu
        </Button>
      </header>
    </div>
  )
}

export default App
