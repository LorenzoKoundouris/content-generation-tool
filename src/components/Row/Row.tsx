import * as React from "react";
import { StyledRow } from "./Row.styles";

interface IRowProps {
  label: string;
  changeHandler: (evt: any) => void;
  isValid: boolean;
  type?: "text" | "number";
  placeholder?: string;
  value: string | number;
}

class Row extends React.Component<IRowProps> {
  public render() {
    const { label, changeHandler, isValid, value, ...otherProps } = this.props;
    if (isValid) console.log(`${label} is invalid`);

    return (
      <StyledRow>
        <p>{label}</p>
        <input
          className={`value-input ${!isValid && "error"}`}
          onChange={changeHandler}
          value={value}
          {...otherProps}
        />
      </StyledRow>
    );
  }
}

export default Row;
