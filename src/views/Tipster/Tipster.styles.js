import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-style: italic;
  text-align: right;
`;

export const Separator = styled.div`
  height: 1px;
  background: ${props => props.theme.colours.rosita};
  margin: 20px;
`;

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-column-gap: 3vw;
  margin-top: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  margin-top: 20px;

  @media (min-width: 600px) {
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
