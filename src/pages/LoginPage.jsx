import { Helmet } from 'react-helmet';
import LoginForm from 'components/loginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
