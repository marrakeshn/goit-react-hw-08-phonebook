import { Helmet } from 'react-helmet';
import SignInForm from 'components/signInForm/SignIn';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <SignInForm />
    </div>
  );
}
