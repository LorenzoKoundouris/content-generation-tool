import styled from "styled-components";

export const Separator = styled.div`
  height: 1px;
  background: ${props => props.theme.colours.rosita};
  margin: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  margin-top: 20px;

  @media (min-width: 920px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const GridCell = styled.input`
  font-size: 16px;
  padding: 8px;
  display: flex;
  min-width: 20px;
`;

export const GridHeader = styled.div`
  padding: 10px;
  background: ${props => props.theme.colours.grover};
  color: white;
`;
