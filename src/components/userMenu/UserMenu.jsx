import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Logoutbtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'end', color: '#2196F3' }}>
        Welcome, {user.name}!
      </p>
      <Logoutbtn
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Logoutbtn>
    </div>
  );
};
