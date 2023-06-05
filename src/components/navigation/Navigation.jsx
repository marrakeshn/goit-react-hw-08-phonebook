import { useAuth } from 'hooks/useAuth';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { Link } from './Navigation.styled';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '10px',
        paddingTop: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontSize: '24px',
        borderBottom: '1px solid #2a363b',
      }}
    >
      <nav style={{ display: 'flex', alignItems: 'center', gap: '30px', }}>
        <Link to="/">
          <HomeIcon color="primary" />
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            <Chip icon={<MdPhone />} label="Contacts" color="primary" />
          </Link>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
