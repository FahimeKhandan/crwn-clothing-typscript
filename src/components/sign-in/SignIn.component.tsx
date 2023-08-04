import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils.js'

// components
import SignUpForm from '../sign-up/SignUpForm.component.js'

//styles
import './sign-in.style.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div className="login-page">
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
      <SignUpForm />
    </div>
  )
}

export default SignIn
