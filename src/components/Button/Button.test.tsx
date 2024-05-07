import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('test Button component', () => {
  // 测试渲染默认按钮
  it('should render the correct default button', () => {
    render(<Button>Nice</Button>)
    const element = screen.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON') // tagName 都是大写
    expect(element).toHaveClass('btn btn-default')
  })

  // 测试渲染不同属性的按钮
  it('should render the correct component based on different props', () => {})

  it('should render a link when btnType equals link', () => {})

  it('should render disabled button when disabled set to true', () => {})
})
