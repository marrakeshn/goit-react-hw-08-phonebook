import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    color: #e84a5f;
  }
`;

