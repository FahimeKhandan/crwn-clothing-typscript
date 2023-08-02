import { Link } from 'react-router-dom'

import {   signInWithGooglePopup,
    createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async () => => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  )
}

export default SignIn
