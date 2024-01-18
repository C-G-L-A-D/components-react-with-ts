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

const Button: React.FC<BaseButtonProps> = props => {
  const { disabled, size, btnType, children, href } = props

  // 默认拥有 btn 类名，后面集合动态添加
  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled // a 链接标签没有这个属性，需要动态添加
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
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
