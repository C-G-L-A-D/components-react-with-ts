import React from 'react'
import classnames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface baseAlert {
  title: string
  description?: AlertType
  type?: string
  closable?: boolean
  onClose?: () => void
}

const Alert: React.FC<baseAlert> = props => {
  const { title, description, type, closable, onClose } = props

  const classes = classnames('alert', {
    [`alter-${type}`]: type
  })

  return (
    <div className={classes}>
      <div>
        <div className='alter-title'>{title}</div>
        {description ? <div className='alter-desc'>{description}</div> : ''}
      </div>
      {closable ? <span onClick={onClose}>x</span> : ''}
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.Default,
  closable: true
}

export default Alert
