import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkHref = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  color: rgb(42, 54, 59);
  background-color: #ebd8ff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: #5cd3a8;
  }
`;

export const Title = styled.title`
  margin-bottom: 8px;
  font-size: 16px;
  text-align: center;
`;