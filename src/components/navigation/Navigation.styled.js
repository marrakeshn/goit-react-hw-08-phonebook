import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
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
