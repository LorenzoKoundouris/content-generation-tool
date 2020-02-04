import React from "react";
import { StyledInput } from "./Input.styles";

interface IInputProps {
  className?: string;
  onChange?: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "number";
  value: string | number;
}

function Input(props: IInputProps) {
  return <StyledInput {...props} />;
}

export default Input;
