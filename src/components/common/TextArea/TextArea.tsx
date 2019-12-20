import React from "react";
import { StyledTextArea } from "./TextArea.styles";

interface ITextAreaProps {
  className?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  rows?: number;
  value: string | number;
}

function TextArea(props: ITextAreaProps): JSX.Element {
  return <StyledTextArea {...props} />;
}

export default TextArea;
