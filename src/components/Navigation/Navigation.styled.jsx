import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 24px;
  font-weight: 700;
  color: #2a363b;

  :hover,
  :focus {
    color: #ebd8ff;
  }

  &.active {
    color: #5cd3a8;
  }
`;
