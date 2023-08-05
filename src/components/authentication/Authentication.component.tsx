import SignUpForm from "../sign-up/SignUpForm.component";
import SignInForm from "../sign-in/SignIn.component";

import "./authentication.style.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;