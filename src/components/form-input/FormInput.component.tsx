import { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import './form-input.style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  ref: string
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value?.toString().length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
