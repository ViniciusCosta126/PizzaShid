import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  > a {
    margin-right: 24px;
  }
`;

export const ButtonSignIn = styled.button`
  background: #f44a25;
  border-radius: 25px;
  padding: 10px 24px 11px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  border: 1px solid #fff;

  &:hover {
    transition: all 0.3s ease-in;
    background: #fff;
    border: 1px solid #f44a25;
    color: #f44a25;
  }
`;
