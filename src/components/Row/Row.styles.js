import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  margin: 10px 0;

  p {
    min-width: 130px;
  }

  input,
  textarea {
    margin: 0 10px;

    &.error {
      border-color: red;
    }
  }
`;
