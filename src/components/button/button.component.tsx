import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  typeClass?: 'google' | 'inverted'
}

const Button: React.FC<ButtonProps> = ({ children, typeClass, ...otherProps }) => {
  return (
    <button
      className={`button-container ${typeClass ? BUTTON_TYPE_CLASSES[typeClass] : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
