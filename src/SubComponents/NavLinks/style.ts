import styled from "styled-components";

export const NavLinkContainer = styled.ul`
  list-style: none;
`;

export const NavLink = styled.li`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  margin-right: 36px;

  > a {
    color: #333333;
    transition: all 0.2s ease-out;
    &:hover {
      color: #f44a25;
      transition: all 0.2s ease-in;
      font-weight: 500;
    }
  }
`;
