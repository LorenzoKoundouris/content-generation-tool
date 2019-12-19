import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  margin: 10px 0;

  p {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
  }

  input {
    width: 75%;
    font-size: 16px;
    padding: 0 5px;
    border-radius: 5px;

    &.error {
      border-color: red;
    }
  }
`;
