import React from 'react'

interface IHelloWorld {
  message: string
}

// React.FC 是 React.FunctionComponent 的别名
const HelloWorld: React.FunctionComponent<IHelloWorld> = props => {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  )
}

HelloWorld.defaultProps = {
  message: 'default hello world'
}

export default HelloWorld
