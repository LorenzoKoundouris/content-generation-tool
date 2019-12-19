import React from "react";
import { PreviewContainer, StyledTextArea } from "./Preview.styles";

interface IPreviewProps {
  value: string;
}

function Preview({ value }: IPreviewProps) {
  return (
    <PreviewContainer>
      <h2>Preview</h2>
      <StyledTextArea value={value} rows={10} readOnly />
    </PreviewContainer>
  );
}

export default Preview;
