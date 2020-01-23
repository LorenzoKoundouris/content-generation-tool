import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-style: italic;
  text-align: right;
`;

export const Separator = styled.hr`
  margin: 20px 0;
`;

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-column-gap: 3vw;
  margin-top: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  margin-top: 20px;
  border-top: solid 1px ${props => props.theme.colours.tipsterGrey};
  border-left: solid 1px ${props => props.theme.colours.tipsterGrey};
`;

export const GridCell = styled.div`
  padding: 10px;
  border-right: solid 1px ${props => props.theme.colours.tipsterGrey};
  border-bottom: solid 1px ${props => props.theme.colours.tipsterGrey};
`;

export const GridHeader = styled(GridCell)`
  background: ${props => props.theme.colours.grover};
  color: white;
`;
