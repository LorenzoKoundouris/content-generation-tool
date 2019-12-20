import styled from "styled-components";

export const Container = styled.div`
  background: white;
`;
export const Body = styled.div`
  padding: 0 30px;
  padding-top: ${({ theme }) => theme.headerHeight};
  margin-bottom: 200px;
`;
