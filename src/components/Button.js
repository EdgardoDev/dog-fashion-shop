import styled from 'styled-components';

export const ButtonContainer = styled.button`
  margin-right: 10px;
  background: transparent;
  border: 0.1rem solid var(--lightBlue);
  padding: 0.4rem;
  color: var(--lightBlue);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;