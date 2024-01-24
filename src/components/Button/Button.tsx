import React, { ReactNode } from 'react'
import classnames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: ReactNode
  href?: string
}

// React.ButtonHTMLAttributes<HTMLElement> 原生 button 属性
// & 表示 交叉类型
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
// a 链接属性
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps

// Partial 讲 属性设置为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<BaseButtonProps> = props => {
  // restProps 用于接受剩余参数，包括组件原生属性
  const { className, disabled, size, btnType, children, href, ...restProps } = props

  // 默认拥有 btn 类名，后面集合动态添加

  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled // a 链接标签没有这个属性，需要动态添加
  })
  if (btnType === ButtonType.Link) {
    return (
      <a className={classes} href={href || '#'} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
