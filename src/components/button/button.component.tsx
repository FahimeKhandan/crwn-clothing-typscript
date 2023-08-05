import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  buttonType?: 'google' | 'inverted',
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
