import React from "react";
import { StyledInput } from "./Input.styles";

interface IInputProps {
  className?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "number";
  value: string | number;
}

class Input extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <StyledInput {...this.props} />;
  }
}

export default Input;
