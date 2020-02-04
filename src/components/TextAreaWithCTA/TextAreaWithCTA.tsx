import React from "react";
import {
  TextAreaContainer,
  Content,
  StyledHeader
} from "./TextAreaWithCTA.styles";
import { StyledButton } from "../common/Button/Button.styles";
import TextArea from "../common/TextArea";

interface ITextAreaProps {
  value: string;
  type: UsageType.INPUT | UsageType.PREVIEW;
  invalid: boolean;
  handleChange?: (value: string) => void;
}

export enum UsageType {
  INPUT = "input",
  PREVIEW = "preview"
}

function TextAreaWithCTA(props: ITextAreaProps) {
  const { invalid, handleChange, value, type } = props;

  const handlePaste = () => {
    if (!handleChange) return;

    navigator.clipboard.readText().then(
      clipText => handleChange(clipText),
      e => console.log("clipboard read failed", e)
    );
  };

  const handleCopy = (clipboardText: string) => {
    navigator.clipboard.writeText(clipboardText).then(
      e => console.log("clipboard successfully set", e),
      e => console.log("clipboard write failed", e)
    );
  };

  return (
    <TextAreaContainer>
      <StyledHeader>{type}</StyledHeader>
      <Content>
        <TextArea
          className={invalid ? "invalid" : ""}
          value={value}
          rows={10}
          readOnly
        />

        {type === UsageType.INPUT && (
          <StyledButton onClick={handlePaste}>Paste</StyledButton>
        )}

        {type === UsageType.PREVIEW && !invalid && (
          <StyledButton onClick={() => handleCopy(value)}>Copy</StyledButton>
        )}
      </Content>
    </TextAreaContainer>
  );
}

export default TextAreaWithCTA;
