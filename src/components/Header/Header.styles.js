import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colours.grover};
  color: white;
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
`;

export const HeaderContent = styled.div`
  font-size: 24px;
  max-width: 1280px;
  padding: 0 30px;
`;
