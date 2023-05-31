import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;

  &:hover {
    color: grey;
  }

  &.active {
    color: blue;
  }
`;
