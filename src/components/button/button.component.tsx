import './button.style.scss'

interface ButtonTypes {
  google: string
  inverted: string
}

const BUTTON_TYPE_CLASSES: ButtonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({
  children,
  type,
  ...otherProps
}: {
  children: string
  type: 'google' | 'inverted'
}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
